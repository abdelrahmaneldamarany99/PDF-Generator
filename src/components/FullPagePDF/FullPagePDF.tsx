import React, { useContext } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { PDFContext } from "../../context/PDFContext";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 6,
  },
  label: {
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
});

interface Props {
  data: any;
}

const FullPagePDF: React.FC<Props> = () => {
  const { siteHeader, patientInvoice } = useContext(PDFContext);

  const header = siteHeader?.[0] || {};
  const patient = patientInvoice?.[0];
  const logoBase64 = header.site_logo;

  if (!header || !logoBase64) {
    return <Text>Loading...</Text>;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {header && (
          <View style={styles.section}>
            <Text style={styles.heading}>Invoice Header</Text>
            <Text>
              <Text style={styles.label}>English Name: </Text>
              {header.english_name}
            </Text>
            <Text>
              <Text style={styles.label}>Arabic Name: </Text>
              {header.arabic_name}
            </Text>
            <Image src={`data:image/bmp;base64,${logoBase64 || ""}`} />

            <Text>
              <Text style={styles.label}>Center: </Text>
              {header.center_name}
            </Text>
            <Text>
              <Text style={styles.label}>Location: </Text>
              {header.location}
            </Text>
            <Text>
              <Text style={styles.label}>Phone: </Text>
              {header.phone}
            </Text>
            <Text>
              <Text style={styles.label}>VAT No: </Text>
              {header.vat_no}
            </Text>
          </View>
        )}

        {patient && (
          <View style={styles.section}>
            <Text style={styles.heading}>Patient Information</Text>
            <Text>
              <Text style={styles.label}>Reference Invoice No: </Text>
              {patient.reference_invoice_no}
            </Text>
            <Text>
              <Text style={styles.label}>VAT Invoice No: </Text>
              {patient.vat_invoice_no}
            </Text>
            <Text>
              <Text style={styles.label}>Patient Name: </Text>
              {patient.patient_name}
            </Text>
            <Text>
              <Text style={styles.label}>ACC Name: </Text>
              {patient.acc_name}
            </Text>
            <Text>
              <Text style={styles.label}>VAT Number: </Text>
              {patient.vat_number}
            </Text>
            <Text>
              <Text style={styles.label}>Policy No: </Text>
              {patient.policy_no}
            </Text>
            <Text>
              <Text style={styles.label}>Patient ID: </Text>
              {patient.patient_id}
            </Text>
            <Text>
              <Text style={styles.label}>Card No: </Text>
              {patient.card_no}
            </Text>
          </View>
        )}

        {patient && (
          <View style={styles.section}>
            <Text style={styles.heading}>Additional Details</Text>
            <Text>
              <Text style={styles.label}>File No: </Text>
              {patient.file_no}
            </Text>
            <Text>
              <Text style={styles.label}>Company Name: </Text>
              {patient.company_name}
            </Text>
            <Text>
              <Text style={styles.label}>Policy Holder: </Text>
              {patient.policy_holder}
            </Text>
            <Text>
              <Text style={styles.label}>Marital Status: </Text>
              {patient.marital_status}
            </Text>
            <Text>
              <Text style={styles.label}>Gender: </Text>
              {patient.gender}
            </Text>
            <Text>
              <Text style={styles.label}>Doctor: </Text>
              {patient.doctor}
            </Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text>
            This PDF summarizes the main information currently displayed in the
            web page, including header and patient details.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default FullPagePDF;
