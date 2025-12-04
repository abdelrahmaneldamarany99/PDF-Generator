import React, { useContext } from "react";
import { PDFContext } from "../../context/PDFContext";

interface InvoiceHeaderProps {
  data?: {
    english_name?: string;
    facility_name?: string;
    arabic_name?: string;
    center_name?: string;
    location?: string;
    phone?: string;
    vat_no?: string;
    date?: string;
    page_current?: number;
    page_total?: number;
    user?: number;
  };
}

export default function InvoiceHeader() {
  const { siteHeader } = useContext(PDFContext);
  const logoBase64 = siteHeader[0].site_logo;
  const logoSrc = `data:image/bmp;base64,${logoBase64}`;

  if (!siteHeader[0]) {
    return null;
  }

  return (
    <div style={container}>
      {/* Left side */}
      <div>
        <h2 style={{ margin: 0 }}>
          {siteHeader[0].english_name || siteHeader[0].facility_name || ""}
        </h2>
        <p style={line}>{siteHeader[0].location && siteHeader[0].location}</p>
        <p style={line}>Phone : {siteHeader[0].phone || ""}</p>
        <p style={line}>VAT NO : {siteHeader[0].vat_no || ""}</p>
      </div>

      {/* Center logo + center name */}
      <div style={{ textAlign: "center", width: "200px", display: "flex" }}>
        <h2 style={{ margin: 0, fontSize: "26px" }}>
          {siteHeader[0].arabic_name || siteHeader[0].center_name || ""}
        </h2>
        <img src={logoSrc} alt="Logo" style={{ width: 100, marginBottom: 4 }} />
      </div>

      {/* Right side info */}
      <div style={{ textAlign: "right" }}>
        <p style={line}>
          <strong>Date</strong> {siteHeader[0].date && siteHeader[0].date}
        </p>
        <p style={line}>
          <strong>Page</strong>{" "}
          {siteHeader[0].page_current && siteHeader[0].page_current}
          {siteHeader[0].page_total && siteHeader[0].page_total}
        </p>
        <p style={line}>
          <strong>User</strong> {siteHeader[0].user && siteHeader[0].user}
        </p>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "2px solid #000",
};

const line = {
  margin: "2px 0",
};
