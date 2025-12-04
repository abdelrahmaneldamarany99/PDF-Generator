// button for all file
import React, { useEffect, useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";

const PDFProcessor = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIslaoding] = useState(false);

  const API_URL =
    "http://136.243.62.235:9090/ords/exsys_api/Mr_opthalmology/pop_patient_opth_investigation?patientfileno=0000333&category_id=18&planguageid=1&authorization=1016199";

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setFiles(json.data || []);
    };
    fetchFiles();
  }, []);

  const processAllFiles = async () => {
    setIslaoding(true);
    if (files.length === 0) return alert("No files to process.");

    const start = performance.now();

    const newPdf = await PDFDocument.create();
    const font = await newPdf.embedFont(StandardFonts.Helvetica);

    // ----------- First Page (Loading Info) -----------
    const infoPage = newPdf.addPage([595, 842]);
    infoPage.drawText("Files Loaded Successfully", {
      x: 50,
      y: 800,
      size: 22,
      font,
    });

    // ----------- Process Each File -----------
    for (let f of files) {
      const cleanUrl = f.image.replace(/\\/g, "");
      const proxiedUrl =
        "http://localhost:9999/proxy?url=" + encodeURIComponent(cleanUrl);

      const bytes = await fetch(proxiedUrl).then((r) => r.arrayBuffer());

      // PDF File
      if (cleanUrl.toLowerCase().endsWith(".pdf")) {
        const originalPdf = await PDFDocument.load(bytes);
        const pages = await newPdf.copyPages(
          originalPdf,
          originalPdf.getPageIndices(),
        );
        pages.forEach((p) => newPdf.addPage(p));
      }

      // Image File
      else {
        let img;
        try {
          img = await newPdf.embedJpg(bytes);
        } catch {
          img = await newPdf.embedPng(bytes);
        }

        const page = newPdf.addPage([595, 842]);
        const scaled = img.scale(0.7);

        page.drawImage(img, {
          x: (595 - scaled.width) / 2,
          y: (842 - scaled.height) / 2,
          width: scaled.width,
          height: scaled.height,
        });
      }
    }

    // ----------- Update Load Time on First Page -----------
    const end = performance.now();
    const seconds = ((end - start) / 1000).toFixed(2);

    infoPage.drawText(`Total Load Time: ${seconds} seconds`, {
      x: 50,
      y: 770,
      size: 16,
      font,
    });

    // ----------- Open Final PDF -----------
    const finalBytes = await newPdf.save();
    const blob = new Blob([finalBytes], { type: "application/pdf" });
    window.open(URL.createObjectURL(blob), "_blank");
    setIslaoding(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={processAllFiles}
        style={{
          padding: "12px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          marginBottom: 20,
          // minWidth: "fit-content",
        }}
      >
        {isLoading
          ? "Generating..."
          : "👉 Generate SINGLE PDF from All Response Files"}
      </button>

      {/* {files.map((f) => (
        <div
          key={f.image_id}
          style={{
            margin: "10px",
            padding: 10,
            border: "1px solid #ccc",
            borderRadius: 5,
          }}
        >
          <p>ID: {f.image_id}</p>
          <p>{f.image}</p>
        </div>
      ))} */}
    </div>
  );
};

export default PDFProcessor;

// button for each file
// import React, { useEffect, useState } from "react";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// const PDFProcessor = () => {
//   const [files, setFiles] = useState([]);

//   const API_URL =
//     "http://136.243.62.235:9090/ords/exsys_api/Mr_opthalmology/pop_patient_opth_investigation?patientfileno=0000333&category_id=18&planguageid=1&authorization=1016199";

//   useEffect(() => {
//     const fetchFiles = async () => {
//       const response = await fetch(API_URL);
//       const json = await response.json();
//       setFiles(json.data || []);
//     };

//     fetchFiles();
//   }, []);

//   const processFile = async (fileUrl) => {
//     const cleanUrl = fileUrl.replace(/\\/g, "");

//     const start = performance.now();

//     const proxiedUrl =
//       "http://localhost:9999/proxy?url=" + encodeURIComponent(cleanUrl);

//     const bytes = await fetch(proxiedUrl).then((r) => r.arrayBuffer());

//     if (cleanUrl.toLowerCase().endsWith(".pdf")) {
//       const originalPdf = await PDFDocument.load(bytes);

//       const newPdf = await PDFDocument.create();
//       const font = await newPdf.embedFont(StandardFonts.Helvetica);

//       const end = performance.now();
//       const seconds = ((end - start) / 1000).toFixed(2);

//       const infoPage = newPdf.addPage([595, 842]);
//       infoPage.drawText("PDF Loaded Successfully", {
//         x: 50,
//         y: 800,
//         size: 22,
//         font,
//       });
//       infoPage.drawText(`Load Time: ${seconds} seconds`, {
//         x: 50,
//         y: 770,
//         size: 16,
//         font,
//       });

//       const copied = await newPdf.copyPages(
//         originalPdf,
//         originalPdf.getPageIndices(),
//       );
//       copied.forEach((p) => newPdf.addPage(p));

//       const finalBytes = await newPdf.save();
//       const blob = new Blob([finalBytes], { type: "application/pdf" });

//       window.open(URL.createObjectURL(blob), "_blank");
//     } else {
//       const newPdf = await PDFDocument.create();
//       const font = await newPdf.embedFont(StandardFonts.Helvetica);

//       const end = performance.now();
//       const seconds = ((end - start) / 1000).toFixed(2);

//       const infoPage = newPdf.addPage([595, 842]);
//       infoPage.drawText("Image Loaded", {
//         x: 50,
//         y: 800,
//         size: 22,
//         font,
//       });
//       infoPage.drawText(`Load Time: ${seconds} seconds`, {
//         x: 50,
//         y: 770,
//         size: 16,
//         font,
//       });

//       let img;
//       try {
//         img = await newPdf.embedJpg(bytes);
//       } catch {
//         img = await newPdf.embedPng(bytes);
//       }

//       const page = newPdf.addPage([595, 842]);
//       const scaled = img.scale(0.7);

//       page.drawImage(img, {
//         x: (595 - scaled.width) / 2,
//         y: (842 - scaled.height) / 2,
//         width: scaled.width,
//         height: scaled.height,
//       });

//       const finalBytes = await newPdf.save();
//       const blob = new Blob([finalBytes], { type: "application/pdf" });

//       window.open(URL.createObjectURL(blob), "_blank");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Files</h2>

//       {files.map((f) => {
//         const url = f.image.replace(/\\/g, "");
//         return (
//           <div
//             key={f.image_id}
//             style={{ margin: "10px", padding: 10, border: "1px solid #ccc" }}
//           >
//             <p>ID: {f.image_id}</p>
//             <button onClick={() => processFile(url)}>
//               Open Processed File
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PDFProcessor;
