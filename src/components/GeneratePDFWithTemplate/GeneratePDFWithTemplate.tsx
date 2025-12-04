import React, { useState, useEffect } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

type ApiData = {
  title: string;
  description: string;
  items: string[];
};

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 50;

const GeneratePDFWithTemplate: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ===== Fetch main post =====
        const postRes = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
        );
        const postJson = await postRes.json();

        // ===== Fetch comments for the post =====
        const commentsRes = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments",
        );
        const commentsJson = await commentsRes.json();

        // ===== Map API response to PDF structure =====
        const mappedData: ApiData = {
          title: postJson.title,
          description: postJson.body.replace(/\r?\n/g, " "), // remove newlines
          items: commentsJson.map((c: any) => c.name), // take comment names as items
        };

        setData(mappedData);
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

    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
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
        data.description,
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

      // ===== Save PDF =====
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report.pdf";
      link.click();
    } catch (error) {
      console.error("PDF Error:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Generate PDF
      </button>
      {data && (
        <div style={{ marginTop: 20 }}>
          <h3>Preview:</h3>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Description:</strong> {data.description}
          </p>
          <ul>
            {data.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneratePDFWithTemplate;
