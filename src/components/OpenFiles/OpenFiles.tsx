import React, { useEffect, useState } from "react";

const OpenFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL =
    "http://136.243.62.235:9090/ords/exsys_api/Mr_opthalmology/pop_patient_opth_investigation?patientfileno=0000333&category_id=18&planguageid=1&authorization=1016199";

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);

      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setFiles(json.data || []);
      } catch (err) {
        console.error("Error fetching files:", err);
      }

      setLoading(false);
    };

    fetchFiles();
  }, []);

  const openFile = (url) => {
    const cleanUrl = url.replace(/\\/g, "");

    window.open(cleanUrl, "_blank");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Patient Files</h2>

      {loading && <p>Loading...</p>}

      {!loading && files.length === 0 && <p>No files found.</p>}

      {files.map((file) => {
        const url = file.image.replace(/\\/g, "");
        const isPdf = url.toLowerCase().endsWith(".pdf");

        return (
          <div
            key={file.image_id}
            style={{
              padding: 10,
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: 5,
            }}
          >
            <p>
              <strong>ID:</strong> {file.image_id}
            </p>
            <p>
              <strong>Date:</strong> {file.image_date}
            </p>

            <button
              onClick={() => openFile(url)}
              style={{
                padding: "8px 14px",
                backgroundColor: "#0d6efd",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              {isPdf ? "Open PDF" : "Open Image"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default OpenFiles;
