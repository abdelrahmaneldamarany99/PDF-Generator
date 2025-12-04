import React, { useState, useEffect } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

type ApiData = {
  title: string;
  description: string;
  items: string[];
  images: string[];
};

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 50;

const GeneratePDFWithTextAndImages: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(
        //   "https://mocki.io/v1/2c3e5f34-9e7f-4c9e-bae1-0d1e94db0e95",
        // ); // Replace with your API
        const res = await fetch("/data/mock-data.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("API fetch error:", err);
      }
    };

    fetchData();
  }, []);

  const wrapText = (
    text: string,
    font: any,
    size: number,
    maxWidth: number,
  ) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let line = "";

    words.forEach((word) => {
      const testLine = line ? line + " " + word : word;
      const width = font.widthOfTextAtSize(testLine, size);
      if (width > maxWidth) {
        if (line) lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });
    if (line) lines.push(line);
    return lines;
  };

  const handleDownload = async () => {
    if (!data) return;

    setLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // ===== Header =====
      page.drawRectangle({
        x: 0,
        y: PAGE_HEIGHT - 80,
        width: PAGE_WIDTH,
        height: 80,
        color: rgb(0.2, 0.4, 0.8),
      });

      page.drawText(data.title, {
        x: MARGIN,
        y: PAGE_HEIGHT - 50,
        size: 24,
        font,
        color: rgb(1, 1, 1),
      });

      // ===== Description =====
      const fontSize = 14;
      const lineHeight = 18;
      let currentY = PAGE_HEIGHT - 120;

      const descriptionLines = wrapText(
        data.description.replace(/\r?\n/g, " "),
        font,
        fontSize,
        PAGE_WIDTH - 2 * MARGIN,
      );
      descriptionLines.forEach((line) => {
        page.drawText(line, {
          x: MARGIN,
          y: currentY,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
        currentY -= lineHeight;
      });

      currentY -= 10;

      // ===== List items =====
      const itemFontSize = 12;
      const itemLineHeight = 16;
      data.items.forEach((item) => {
        const itemLines = wrapText(
          item,
          font,
          itemFontSize,
          PAGE_WIDTH - 2 * MARGIN - 10,
        );
        itemLines.forEach((line) => {
          page.drawText(`• ${line}`, {
            x: MARGIN + 10,
            y: currentY,
            size: itemFontSize,
            font,
            color: rgb(0, 0, 0),
          });
          currentY -= itemLineHeight;
        });
        currentY -= 4;
      });

      currentY -= 10;

      // ===== Images =====
      for (const imgUrl of data.images) {
        try {
          const imgBytes = await fetch(imgUrl).then((res) => res.arrayBuffer());
          const img = await pdfDoc
            .embedJpg(imgBytes)
            .catch(async () => pdfDoc.embedPng(imgBytes));
          const imgDims = img.scale(0.5);
          if (currentY - imgDims.height < 60) {
            // Simple page break
            const newPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
            currentY = PAGE_HEIGHT - MARGIN;
            page = newPage;
          }
          page.drawImage(img, {
            x: MARGIN,
            y: currentY - imgDims.height,
            width: imgDims.width,
            height: imgDims.height,
          });
          currentY -= imgDims.height + 20;
        } catch (err) {
          console.error("Image fetch/embed error:", err);
        }
      }

      // ===== Footer =====
      page.drawRectangle({
        x: 0,
        y: 0,
        width: PAGE_WIDTH,
        height: 60,
        color: rgb(0.2, 0.4, 0.8),
      });
      page.drawText("Page 1", {
        x: PAGE_WIDTH - 100,
        y: 20,
        size: 14,
        font,
        color: rgb(1, 1, 1),
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report_with_images.pdf";
      link.click();
    } catch (err) {
      console.error("PDF Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={handleDownload}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        {loading ? "Generating PDF..." : "Generate PDF with Images"}
      </button>
    </div>
  );
};

export default GeneratePDFWithTextAndImages;
