import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  pdf,
  Font,
} from "@react-pdf/renderer";

// Register Amiri for Arabic support
Font.register({
  family: "Amiri",
  src: "/fonts/Amiri-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Amiri",
    fontSize: 14,
    lineHeight: 1.6,
  },
  line: {
    marginBottom: 6,
  },
});

const EpisodeInvoicePDF = () => {
  const [isLoading, setIsLoading] = useState(false);

  const API_URL =
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_episode_invoice_master?authorization=111111&organization_no=08&episode_invoice_no=I0825/0000111&planguageid=1";

  const generatePDF = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      if (!json.data || json.data.length === 0) {
        alert("No data received from API");
        return;
      }

      const d = json.data[0];

      const PDFFile = (
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.line}>Company Name: {d.company_name}</Text>
            <Text style={styles.line}>VAT Number: {d.vat_number}</Text>
            <Text style={styles.line}>Batch No: {d.batch_no}</Text>
            <Text style={styles.line}>Batch From: {d.batch_from}</Text>
            <Text style={styles.line}>Batch To: {d.batch_to}</Text>
            <Text style={styles.line}>Printed On: {d.printed_on}</Text>
            <Text style={styles.line}>Patient Name: {d.patient_name}</Text>
            <Text style={styles.line}>Sex: {d.sex}</Text>
            <Text style={styles.line}>Age: {d.age}</Text>
            <Text style={styles.line}>Marital Status: {d.marital_status}</Text>
            <Text style={styles.line}>Policy Holder: {d.policy_holder}</Text>
            <Text style={styles.line}>Doctor: {d.doctor}</Text>
            <Text style={styles.line}>File No: {d.file_no}</Text>
            <Text style={styles.line}>Badge No: {d.badge_no}</Text>
            <Text style={styles.line}>Claim No: {d.claim_no}</Text>
          </Page>
        </Document>
      );

      const blob = await pdf(PDFFile).toBlob();
      window.open(URL.createObjectURL(blob), "_blank");
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Failed to generate PDF.");
    } finally {
      setIsLoading(false);
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
        {isLoading ? "Generating PDF..." : "Generate Episode Invoice PDF"}
      </button>
    </div>
  );
};

export default EpisodeInvoicePDF;
