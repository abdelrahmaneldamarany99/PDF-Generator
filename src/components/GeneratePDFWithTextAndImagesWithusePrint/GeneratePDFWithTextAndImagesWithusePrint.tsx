import React, { useEffect, useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { usePrint } from "@app-structure/hooks";
import "./styles.css";

interface ApiResponse {
  title: string;
  description: string;
  images: string[];
}

const GeneratePDFWithTextAndImagesWithusePrint: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const print = usePrint("report-section");

  // Fetch API (returns JPG)
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1");
        const json = await res.json();

        setData({
          title: json.title,
          description: json.description,
          images: [json.image], // Always JPG
        });
      } catch (err) {
        console.error("API fetch error:", err);
      }
    };

    fetchAPI();
  }, []);

  // Convert image → Base64
  const convertToBase64 = async (url: string): Promise<string> => {
    const res = await fetch(url);
    const blob = await res.blob();

    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  };

  const handleGeneratePDF = async () => {
    if (!data) return;

    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 850]);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      let yPos = 800;

      // Title
      page.drawText(data.title, {
        x: 40,
        y: yPos,
        size: 22,
        font,
        color: rgb(0, 0, 0),
      });
      yPos -= 40;

      // Wrap description text
      const wrapText = (text: string, maxWidth = 500) => {
        const words = text.split(" ");
        const lines: string[] = [];
        let line = "";

        words.forEach((word) => {
          const testLine = line + word + " ";
          if (font.widthOfTextAtSize(testLine, 14) > maxWidth) {
            lines.push(line);
            line = word + " ";
          } else {
            line = testLine;
          }
        });

        if (line) lines.push(line);
        return lines;
      };

      const descriptionLines = wrapText(data.description);
      descriptionLines.forEach((line) => {
        page.drawText(line, { x: 40, y: yPos, size: 14, font });
        yPos -= 20;
      });

      yPos -= 20;

      // Embed JPG images
      for (const url of data.images) {
        try {
          const base64 = await convertToBase64(url);
          const img = await pdfDoc.embedJpg(base64.split(",")[1]);

          const { width, height } = img.scale(0.4);

          page.drawImage(img, {
            x: 40,
            y: yPos - height,
            width,
            height,
          });

          yPos -= height + 20;
        } catch (err) {
          console.warn("Image failed:", url, err);
        }
      }

      // Download PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report.pdf";
      link.click();
    } catch (err) {
      console.error("PDF Error:", err);
    }
  };

  if (!data) return <p>Loading…</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Report Preview</h2>

      <div id="report-section" className="print-container">
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.images.map((src, i) => (
          <img key={i} src={src} width={300} alt="preview" />
        ))}
      </div>

      <button onClick={handleGeneratePDF} style={{ marginRight: 12 }}>
        Generate PDF
      </button>

      <button onClick={() => print()}>Print / Save as PDF (DOM)</button>
    </div>
  );
};

export default GeneratePDFWithTextAndImagesWithusePrint;
