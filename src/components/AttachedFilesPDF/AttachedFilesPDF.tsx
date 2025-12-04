import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function AttachedFilesPDF() {
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    setLoading(true);

    const apiUrl =
      "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_attached_files?date_from=01-01-2024&date_to=31-10-2025&episode_no=1&patient_file_no=0437723&authorization=111111&poffset=0&poffset_step=20";

    const res = await fetch(apiUrl);
    const json = await res.json();

    const pdfDoc = await PDFDocument.create();

    for (const item of json.data) {
      const rawPath = item.pdf_path;
      const proxyUrl = `http://localhost:9999/proxy?url=${encodeURIComponent(
        rawPath
      )}`;

      const fileBytes = await fetch(proxyUrl).then((r) => r.arrayBuffer());

      const externalPdf = await PDFDocument.load(fileBytes);
      const copiedPages = await pdfDoc.copyPages(
        externalPdf,
        externalPdf.getPageIndices()
      );

      copiedPages.forEach((p) => pdfDoc.addPage(p));
    }

    const finalPdf = await pdfDoc.save();
    const blob = new Blob([finalPdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "episode-files.pdf";
    a.click();

    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={fetchFiles}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Generate AttachedFiles PDF"}
      </button>
    </div>
  );
}
