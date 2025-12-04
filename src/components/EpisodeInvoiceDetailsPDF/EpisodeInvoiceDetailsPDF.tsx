import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  pdf,
  Font,
} from "@react-pdf/renderer";

// Arabic-friendly font
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

const EpisodeInvoiceDetailsPDF = () => {
  const [isLoading, setIsLoading] = useState(false);

  const API_URL =
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_episode_invoice_details?authorization=111111&organization_no=08&episode_invoice_no=I0825/0000111&patient_file_no=0369144&episode_no=14&planguageid=1";

  const generatePDF = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      if (!json.data || json.data.length === 0) {
        alert("No data received");
        return;
      }

      const d = json.data[0];

      const PDFFile = (
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.line}>Invoice Date: {d.invoice_date}</Text>
            <Text style={styles.line}>Bill No: {d.bill_no}</Text>
            <Text style={styles.line}>Service Code: {d.service_code}</Text>
            <Text style={styles.line}>Description: {d.description}</Text>
            <Text style={styles.line}>Unit Price: {d.unit_price}</Text>
            <Text style={styles.line}>Quantity: {d.qty}</Text>
            <Text style={styles.line}>Gross: {d.gross}</Text>
            <Text style={styles.line}>Discount: {d.discount}</Text>
            <Text style={styles.line}>Net: {d.net}</Text>
            <Text style={styles.line}>VAT: {d.vat}</Text>
            <Text style={styles.line}>Net with VAT: {d.net_with_vat}</Text>
          </Page>
        </Document>
      );

      const blob = await pdf(PDFFile).toBlob();
      window.open(URL.createObjectURL(blob), "_blank");
    } catch (err) {
      console.error("PDF Error:", err);
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
        {isLoading ? "Generating PDF..." : "Generate Episode Invoice Details PDF"}
      </button>
    </div>
  );
};

export default EpisodeInvoiceDetailsPDF;
