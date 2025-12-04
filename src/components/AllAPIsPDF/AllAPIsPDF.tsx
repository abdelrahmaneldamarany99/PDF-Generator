import { useState } from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  pdf,
  Font,
} from "@react-pdf/renderer";

// Register Amiri font for Arabic support
Font.register({
  family: "Amiri",
  src: "/fonts/Amiri-Regular.ttf",
});

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Amiri",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

// Types for API responses
interface APIResponse {
  data?: Record<string, unknown>[];
}

// PDF Document Component
interface PDFDocProps {
  org: APIResponse;
  master: APIResponse;
  details: APIResponse;
}

const PDFDoc = ({ org, master, details }: PDFDocProps) => {
  const renderSection = (title: string, data: Record<string, unknown>) => {
    if (!data) return null;

    return (
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{title}</Text>
        {Object.entries(data).map(([key, val], index) => {
          const text = val?.toString() || "";
          return (
            <Text key={index} style={styles.text}>
              {key}: {text}
              {/* ---------------------------------------------------------- */}
              {/* Test text */}
              {/* تم إصدار الفاتورة رقم 12345 بتاريخ 03/12/2025 لصالح العميل Ahmed. */}
              {/* ---------------------------------------------------------- */}
            </Text>
          );
        })}
      </Page>
    );
  };

  return (
    <Document>
      {org.data &&
        org.data.length > 0 &&
        renderSection("Organization Information", org.data[0])}
      {master.data &&
        master.data.length > 0 &&
        renderSection("Episode Invoice Master", master.data[0])}
      {details.data &&
        details.data.length > 0 &&
        renderSection("Episode Invoice Details", details.data[0])}
    </Document>
  );
};

const AllAPIsPDF = () => {
  const [loading, setLoading] = useState(false);

  const API_ORG =
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_organization_information?organization_no=08&authorization=111111";

  const API_MASTER =
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_episode_invoice_master?authorization=111111&organization_no=08&episode_invoice_no=I0825/0000111&planguageid=1";

  const API_DETAILS =
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_episode_invoice_details?authorization=111111&organization_no=08&episode_invoice_no=I0825/0000111&patient_file_no=0369144&episode_no=14&planguageid=1";

  const fetchJSON = async (url: string) => {
    const res = await fetch(url);
    return await res.json();
  };

  const generatePDF = async () => {
    setLoading(true);

    try {
      // Fetch data from all APIs
      const org = await fetchJSON(API_ORG);
      const master = await fetchJSON(API_MASTER);
      const details = await fetchJSON(API_DETAILS);

      // Generate PDF using react-pdf
      const blob = await pdf(
        <PDFDoc org={org} master={master} details={details} />
      ).toBlob();

      // Open PDF in new tab
      window.open(URL.createObjectURL(blob), "_blank");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={generatePDF}
        style={{
          padding: "12px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Generate PDF From All APIs"}
      </button>
    </div>
  );
};

export default AllAPIsPDF;
