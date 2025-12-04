import React, { useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const GeneratePDFWithImages: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loadTime, setLoadTime] = useState<number | null>(null);

  const numImages = 5;

  const images = Array.from(
    { length: numImages },
    () =>
      `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 10000)}`,
  );

  const handleDownload = async () => {
    setLoading(true);
    const startTime = performance.now();

    try {
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // ------- First Page (Header + Description + Loading Time) -------
      const firstPage = pdfDoc.addPage([595, 842]);
      firstPage.drawText("PDF with Images Example", {
        x: 50,
        y: 800,
        size: 24,
        font,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText("Each image is displayed on a new page.", {
        x: 50,
        y: 770,
        size: 14,
        font,
        color: rgb(0, 0, 0),
      });

      // ------- Add each image to a NEW PAGE -------
      for (const imgUrl of images) {
        try {
          const imgBytes = await fetch(imgUrl).then((res) => res.arrayBuffer());
          const img = await pdfDoc.embedJpg(imgBytes).catch(async () => {
            return pdfDoc.embedPng(imgBytes);
          });

          const page = pdfDoc.addPage([595, 842]);
          const { width, height } = img.scale(0.7);

          page.drawImage(img, {
            x: (595 - width) / 2,
            y: (842 - height) / 2,
            width,
            height,
          });
        } catch (err) {
          console.error("Image fetch/embed error:", err);
        }
      }

      // ------- Stop timing and show only real time -------
      const endTime = performance.now();
      const totalSeconds = Number(((endTime - startTime) / 1000).toFixed(2));
      setLoadTime(totalSeconds);

      firstPage.drawText(`Estimated Time: ${totalSeconds} seconds`, {
        x: 50,
        y: 740,
        size: 14,
        font,
        color: rgb(0, 0, 0),
      });

      // ------- Save PDF -------
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "pdf_with_images.pdf";
      link.click();
    } catch (error) {
      console.error("PDF Error:", error);
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
        {loading ? "Generating PDF..." : "Generate PDF with Random Images"}
      </button>

      {loadTime !== null && (
        <p style={{ marginTop: 15, fontSize: 16 }}>
          ⏱️ Estimated time: <strong>{loadTime} seconds</strong>
        </p>
      )}
    </div>
  );
};

export default GeneratePDFWithImages;
