// OrganizationPDF.tsx
import React, { useEffect, useState } from "react";
import { Document, Page, Text, StyleSheet, PDFDownloadLink, Font } from "@react-pdf/renderer";

interface Organization {
  english_name: string;
  arabic_name: string;
  phone: string;
  cr_no: string;
  vat_no: string;
}

Font.register({
  family: "Amiri",
  src: "/fonts/Amiri-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Amiri",
    fontSize: 16,
  },
  item: {
    marginBottom: 20,
  },
  line: {
    marginBottom: 6,
  },
});

const OrganizationPDF = () => {
  const [data, setData] = useState<Organization[]>([]);
  const [ready, setReady] = useState(false);

  const API_URL =
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/get_organization_information?organization_no=08&authorization=111111";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json.data || []);
      setReady(true);
    };
    fetchData();
  }, []);

  const PDFFile = (
    <Document>
      <Page size="A4" style={styles.page}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Text style={styles.line}>English Name: {item.english_name}</Text>
            <Text style={styles.line}>Arabic Name: {item.arabic_name}</Text>
            <Text style={styles.line}>Phone: {item.phone}</Text>
            <Text style={styles.line}>CR No: {item.cr_no}</Text>
            <Text style={[styles.line, { marginBottom: 20 }]}>
              VAT No: {item.vat_no}
            </Text>
          </React.Fragment>
        ))}
      </Page>
    </Document>
  );

  return (
    <div style={{ padding: 20 }}>
      {ready ? (
        <PDFDownloadLink
          document={PDFFile}
          fileName="organization.pdf"
          style={{
            padding: "12px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Generate Organization PDF
        </PDFDownloadLink>
      ) : (
        <button
          disabled
          style={{
            padding: "12px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Loading...
        </button>
      )}
    </div>
  );
};

export default OrganizationPDF;
