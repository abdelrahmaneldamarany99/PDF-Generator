import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Amiri",
  src: "/fonts/Amiri-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Amiri",
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
  },
  label: {
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  container: {
    paddingBottom: 12,
    borderBottom: "1px solid #ccc",
    marginBottom: 12,
  },
  left: {
    maxWidth: "65%",
  },
  right: {
    textAlign: "right",
    maxWidth: "35%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    borderBottom: "2px solid #000",
    marginBottom: 12,
  },
  headerLeft: {
    flex: 1,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  headerRight: {
    flex: 1,
    textAlign: "right",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 4,
  },
  headerText: {
    fontSize: 9,
    marginBottom: 2,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 4,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 8,
  },
  tableCell: {
    border: "1px solid #000",
    padding: "4px 6px",
    fontSize: 9,
    textAlign: "center",
  },
  tableHeader: {
    border: "1px solid #000",
    padding: "4px 6px",
    fontSize: 9,
    textAlign: "center",
    fontWeight: 600,
    backgroundColor: "#f0f0f0",
  },
  tableCellLeft: {
    border: "1px solid #000",
    padding: "4px 6px",
    fontSize: 9,
    textAlign: "left",
  },
  invoiceTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
    textAlign: "center",
  },
  boldText: {
    fontWeight: 700,
  },
  smallText: {
    fontSize: 9,
  },
  borderBox: {
    border: "1px solid #000",
    padding: 6,
    marginTop: 6,
    fontSize: 9,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    width: 8,
    height: 8,
    border: "1px solid #000",
    marginRight: 4,
  },
  dottedLine: {
    borderBottom: "1px dotted #000",
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    minWidth: 100,
  },
  sectionBorder: {
    border: "1px dashed #000",
    padding: 12,
    marginBottom: 16,
  },
  centerText: {
    textAlign: "center",
  },
  qrBox: {
    width: 100,
    height: 100,
    border: "1px solid #000",
    marginRight: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 8,
  },
});

interface Props {
  siteHeader?: Array<any>;
  patientInvoice?: Array<any>;
  data?: any;
}

const FullPagePDF: React.FC<Props> = ({ siteHeader, patientInvoice }) => {
  const header = siteHeader?.[0];
  const patient = patientInvoice?.[0];
  const logoBase64 = header?.site_logo;

  if (!header || !patient) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text>Loading...</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {header && (
          <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerTitle}>
                {header.english_name || header.facility_name || ""}
              </Text>
              <Text style={styles.headerText}>{header.location || ""}</Text>
              <Text style={styles.headerText}>
                Phone : {header.phone || ""}
              </Text>
              <Text style={styles.headerText}>
                VAT NO : {header.vat_no || ""}
              </Text>
            </View>
            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                {header.arabic_name || header.center_name || ""}
              </Text>
              {logoBase64 && (
                <Image
                  src={`data:image/bmp;base64,${logoBase64}`}
                  style={styles.logo}
                />
              )}
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>Date</Text> {header.date || ""}
              </Text>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>Page</Text>{" "}
                {header.page_current || ""}
                {header.page_total || ""}
              </Text>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>User</Text> {header.user || ""}
              </Text>
            </View>
          </View>
        )}

        {patient && (
          <View style={styles.container}>
            <Text style={styles.invoiceTitle}>فاتورة ضريبية</Text>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text>
                  <Text style={styles.label}>Reference_Invoice_No:</Text>{" "}
                  {patient.reference_invoice_no || ""}
                </Text>
              </View>
              <View style={styles.right}>
                <Text>
                  <Text style={styles.label}>Vat Invoice No:</Text>{" "}
                  {patient.vat_invoice_no || ""}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text>
                <Text style={styles.label}>Date:</Text>{" "}
                {patient.invoiceItem?.[0]?.invoice_date || ""}
              </Text>
            </View>
            <View style={{ marginTop: 12, ...styles.row }}>
              <View style={styles.left}>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>Patient Name:</Text>{" "}
                  {patient.patient_name || ""}
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>ACC NAME:</Text>{" "}
                  {patient.acc_name || ""}
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>VAT_NO:</Text>{" "}
                  {patient.vat_number || ""}
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>Policy No:</Text>{" "}
                  {patient.policy_no || ""}
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>Vat File NO:</Text>{" "}
                  {patient.vat_file_no || ""}
                </Text>
              </View>
              <View style={styles.right}>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>PATIENT_ID:</Text>{" "}
                  {patient.patient_id || ""}
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.label}>Card No:</Text>{" "}
                  {patient.card_no || ""}
                </Text>
              </View>
            </View>
          </View>
        )}

        {patient?.invoiceItem?.map((invoice: any, index: number) => (
          <View key={index} style={styles.section}>
            <View style={styles.table}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableHeader, flex: 1 }}>
                  <Text>Admission</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 1 }}>
                  <Text>Discharge</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.5 }}>
                  <Text>Room No</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.5 }}>
                  <Text>Length of Stay</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.5 }}>
                  <Text>Consultant</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>Date</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>Time</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>Date</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>Time</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}></View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}></View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}></View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>{invoice.invoice_date || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>06:23</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>{invoice.invoice_date || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>06:23</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>bed0101{"\n"}1st class</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>0{"\n"}Days</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.5 }}>
                  <Text>OP{"\n"}TAWFIK AL-TAISI</Text>
                </View>
              </View>
            </View>

            <View style={styles.table}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableHeader, flex: 0.6 }}>
                  <Text>Item No</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 2 }}>
                  <Text>Package</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Gross</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Discount</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.6 }}>
                  <Text>%</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Total</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Vat Amt</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Net</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableCell, flex: 0.6 }}>
                  <Text>300056</Text>
                </View>
                <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                  <Text>YAG LASER POSTERIOR CAPSULOTOMY (ONE EYE)</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{invoice.gross || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{invoice.discount || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.6 }}>
                  <Text>40%</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>720.00</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{invoice.vat || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{invoice.net || ""}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                border: "1px solid #000",
                padding: 6,
                marginBottom: 8,
              }}
            >
              <View style={styles.qrBox}>
                <Text>QR</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.table}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ ...styles.tableHeader, flex: 1 }}>
                      <Text>Gross</Text>
                    </View>
                    <View style={{ ...styles.tableHeader, flex: 1 }}>
                      <Text>Discount</Text>
                    </View>
                    <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                      <Text>%</Text>
                    </View>
                    <View style={{ ...styles.tableHeader, flex: 1 }}>
                      <Text>Total</Text>
                    </View>
                    <View style={{ ...styles.tableHeader, flex: 1 }}>
                      <Text>Vat Amt</Text>
                    </View>
                    <View style={{ ...styles.tableHeader, flex: 1 }}>
                      <Text>pat_share</Text>
                    </View>
                    <View style={{ ...styles.tableHeader, flex: 1 }}>
                      <Text>Net Amount</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ ...styles.tableCell, flex: 1 }}>
                      <Text>{invoice.gross || ""}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, flex: 1 }}>
                      <Text>{invoice.discount || ""}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, flex: 0.8 }}>
                      <Text>40%</Text>
                    </View>
                    <View style={{ ...styles.tableCell, flex: 1 }}>
                      <Text>720.00</Text>
                    </View>
                    <View style={{ ...styles.tableCell, flex: 1 }}>
                      <Text>{invoice.vat || ""}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, flex: 1 }}>
                      <Text>.00</Text>
                    </View>
                    <View style={{ ...styles.tableCell, flex: 1 }}>
                      <Text>{invoice.net || ""}</Text>
                    </View>
                  </View>
                </View>
                <Text
                  style={{ ...styles.centerText, fontSize: 9, marginTop: 4 }}
                >
                  Eight Hundred Twenty-Eight (Saudi Riyal)
                </Text>
              </View>
            </View>

            <View style={styles.flexRow}>
              <View style={{ flex: 1, marginRight: 20 }}>
                <Text>
                  Patient Name{" "}
                  <Text
                    style={{ borderBottom: "1px solid #000", minWidth: 120 }}
                  >
                    {" "}
                  </Text>
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  Doctor <Text>{patient.doctor || ""}</Text>
                </Text>
              </View>
            </View>
          </View>
        ))}

        {patient && (
          <View style={styles.section}>
            <Text
              style={{ ...styles.heading, fontSize: 18, textAlign: "center" }}
            >
              UCAF 2.0
            </Text>
            <View style={styles.flexRow}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>provider Name</Text> Hussein Ali
                  Alsagqaf Medical Comblex
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>Patient File N</Text>{" "}
                  {patient.file_no || ""} Hamedah - - Zahrani
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>company:</Text>{" "}
                  <Text style={styles.smallText}>
                    ............................................................................................
                  </Text>
                </Text>
                <View style={styles.borderBox}>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>
                      To be completed and ID verified by the reception/nurse:
                    </Text>
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>provider Name :</Text> Hussein
                    Ali Alsaggaf Medical Complex
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Insurance Company Name:</Text>{" "}
                    {patient.company_name || ""}
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>TPA Company Name:</Text>
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Patient File Number:</Text>{" "}
                    {patient.file_no || ""}
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Dept:</Text>{" "}
                    Bupa-petrorabighcompany-(VIP)
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Plan Type</Text> (
                    {patient.marital_status === "Single" ? "Y" : " "}) Single (
                    {patient.marital_status !== "Single" ? "Y" : " "}) Married
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Date Of Visit:</Text>{" "}
                    25-08-2025 <Text style={styles.boldText}>New Visit</Text> ☑
                    Follow Up Refill Walk-in Referral
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>Insurance Company:</Text>{" "}
                  {patient.company_name || ""}
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>Date Of Visit:</Text> 25-08-2025{" "}
                  <Text style={styles.boldText}>Dept:</Text> Cataract
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>Policy No.:</Text> 514891001
                </Text>
                <Text style={{ marginBottom: 4 }}>
                  <Text style={styles.boldText}>Insurance Card number:</Text>{" "}
                  37529611
                </Text>
                <View style={styles.borderBox}>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>
                      Print/Fill in clear letters or Emboss Card:
                    </Text>
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Insured Name:</Text> Hamedah -
                    - Zahrani
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>ID Card No :</Text> 37529611
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Sex :</Text> Female
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Policy Holder:</Text>{" "}
                    {patient.policy_holder || ""}
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Policy No :</Text> 514891001
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Member Since :</Text>
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Expiry Date :</Text>{" "}
                    09-01-2026
                  </Text>
                  <Text style={{ marginBottom: 2 }}>
                    <Text style={styles.boldText}>Approval :</Text>
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    <Text style={styles.boldText}>Age :</Text> 61 Years{" "}
                    <Text style={styles.boldText}>Member Type :</Text>{" "}
                    <Text style={styles.boldText}>Class :</Text> VIP
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <View style={{ border: "1px solid #000", padding: 6 }}>
            <Text style={{ marginBottom: 6 }}>
              <View style={styles.checkbox} /> Inpatient{" "}
              <View style={styles.checkbox} /> Outpatient{" "}
              <View style={styles.checkbox} /> Emergency Case ? Yes ( ) No ( )
              Emergency Care Level: 1( ) 2( ) 3( ) 4( ) 5( )
            </Text>
            <Text style={{ marginBottom: 4 }}>
              Physician Name [ID]: <Text> </Text>
            </Text>
            <Text style={{ marginBottom: 4 }}>
              Bp: <Text> </Text> Pulse: <Text> </Text> Temp: <Text> </Text>{" "}
              Weight: <Text> </Text> Height: <Text> </Text> R.R: <Text> </Text>{" "}
              Duration of illness: 30+ - DAY
            </Text>
            <Text style={{ marginTop: 6, marginBottom: 4 }}>
              Chief Complaint & Main Symptoms:
            </Text>
            <View
              style={{
                border: "1px solid #000",
                padding: 4,
                minHeight: 30,
                marginBottom: 6,
              }}
            >
              <Text>BLURRED VISION RT EYE , RT PCO</Text>
            </View>
            <Text style={{ marginBottom: 4 }}>Significant Signs:</Text>
            <View
              style={{
                border: "1px solid #000",
                padding: 4,
                minHeight: 30,
                marginBottom: 6,
              }}
            >
              <Text>, YAG LASER CAPSULOTOMY OD TODAY</Text>
            </View>
            <Text style={{ marginBottom: 4 }}>Possible Line of Treatment:</Text>
            <View
              style={{
                border: "1px solid #000",
                padding: 4,
                minHeight: 30,
                marginBottom: 6,
              }}
            ></View>
            <Text style={{ marginBottom: 4 }}>Other Conditions:</Text>
            <Text style={{ marginBottom: 4 }}>
              Diagnosis: ( H26.4 ) ) (P) After-cataract ( ) ( )
            </Text>
            <Text style={{ marginBottom: 4 }}>
              Diagnosis: ( H40.0 ) ) (P) Glaucoma suspect ( ) ( )
            </Text>
            <Text style={{ marginBottom: 4 }}>Diagnosis: ( ) ( )</Text>
            <Text style={{ marginBottom: 6 }}>Diagnosis: ( ) ( )</Text>
            <Text style={{ marginBottom: 4 }}>
              Please tick( ✓ ) Where appropriate:
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              <Text>
                <View style={styles.checkbox} /> Chronic
              </Text>
              <Text>
                <View style={styles.checkbox} /> Check-Up
              </Text>
              <Text>
                <View style={styles.checkbox} /> Congenital
              </Text>
              <Text>
                <View style={styles.checkbox} /> Psychiatric
              </Text>
              <Text>
                <View style={styles.checkbox} /> RTA
              </Text>
              <Text>
                <View style={styles.checkbox} /> Infertility
              </Text>
              <Text>
                <View style={styles.checkbox} /> Work Related
              </Text>
              <Text>
                <View style={styles.checkbox} /> Pregnancy
              </Text>
              <Text>
                <View style={styles.checkbox} /> Vaccination
              </Text>
              <Text>
                Indicate LMP: <Text> </Text>
              </Text>
            </View>
          </View>
        </View>

        {patient?.invoiceItem?.map((invoice: any, index: number) => (
          <View key={index} style={styles.section}>
            <Text style={{ marginBottom: 6, fontSize: 9 }}>
              Suggestive Line(s) of managment Kindly , enumerate the recommended
              investigations , and/or procedures For outpatient approvals only :
            </Text>
            <View style={styles.table}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Code *</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 2 }}>
                  <Text>Description/Service</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 1 }}>
                  <Text>Approval No</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>U. Price</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.6 }}>
                  <Text>Quantity</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.6 }}>
                  <Text>Type</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Cost *</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>300056</Text>
                </View>
                <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                  <Text>YAG LASER POSTERIOR CAPSULOTOMY (ONE EYE)</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 1 }}>
                  <Text>121266622</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>1200</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.6 }}>
                  <Text>1</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.6 }}>
                  <Text>OR</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>1200</Text>
                </View>
              </View>
            </View>
            <Text style={{ marginTop: 4, marginBottom: 4, fontSize: 9 }}>
              * Provider's Approval/Coding Staff must review / code the
              recommended service (s) & allocate cost and complete the
              following:
            </Text>
            <View style={styles.flexRow}>
              <Text>
                Completed/Coded by:{" "}
                <Text style={styles.boldText}>Tawfik Mohmmed Al-Tisi</Text>
              </Text>
              <Text>
                Signature:{" "}
                <Text style={styles.boldText}>Tawfik Mohmmed Al-Tisi</Text>{" "}
                Date: 25-08-2025
              </Text>
            </View>
            <View style={styles.table}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Code *</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 2 }}>
                  <Text>Medication</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 1 }}>
                  <Text>Approval No</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>U. Price</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.6 }}>
                  <Text>Quantity</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.6 }}>
                  <Text>Type</Text>
                </View>
                <View style={{ ...styles.tableHeader, flex: 0.8 }}>
                  <Text>Cost *</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{invoice.service_code || ""}</Text>
                </View>
                <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                  <Text>ALPHAGAN-P 0.15% OPHTHALMIC SOLUTION (14 Days)</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 1 }}></View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{invoice.unit_price || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.6 }}>
                  <Text>{invoice.qty || ""}</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.6 }}>
                  <Text>MED</Text>
                </View>
                <View style={{ ...styles.tableCell, flex: 0.8 }}>
                  <Text>{(invoice.qty || 0) * (invoice.unit_price || 0)}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.section}>
          <Text style={{ marginBottom: 12 }}>
            <Text style={styles.boldText}>
              Is Case Management Form (CMF1.0) Included
            </Text>{" "}
            Yes ( ) No ( )
          </Text>
          <View style={{ marginBottom: 12 }}>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                Please Specify Possible Line of management when applicable:.
              </Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View
              style={{
                ...styles.flexRow,
                marginBottom: 6,
                alignItems: "center",
              }}
            >
              <Text style={styles.boldText}>Estimated Length of Stay:</Text>
              <View style={styles.dottedLine}></View>
              <Text style={{ marginLeft: 6 }}>days</Text>
            </View>
            <View
              style={{
                ...styles.flexRow,
                marginBottom: 6,
                alignItems: "center",
              }}
            >
              <Text style={styles.boldText}>Approved Length of Stay:</Text>
              <View style={styles.dottedLine}></View>
              <Text style={{ marginLeft: 6 }}>days</Text>
            </View>
            <View
              style={{
                ...styles.flexRow,
                marginBottom: 6,
                alignItems: "center",
              }}
            >
              <Text style={styles.boldText}>Expected Date of Admission:</Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View
              style={{
                ...styles.flexRow,
                marginBottom: 6,
                alignItems: "center",
              }}
            >
              <Text style={styles.boldText}>Estimated Cost:</Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View style={{ ...styles.flexRow, alignItems: "center" }}>
              <Text style={styles.boldText}>Total Approved Cost:</Text>
              <Text style={{ marginLeft: 6 }}>1238.5</Text>
            </View>
          </View>
          <View style={styles.sectionBorder}>
            <Text style={{ marginBottom: 8 }}>
              I hereby certify that ALL information mentioned are correct shown
              on this form were medically ir
            </Text>
            <View style={{ ...styles.flexRow, marginBottom: 8 }}>
              <View>
                <Text style={styles.boldText}>Physician</Text>
                <Text>1004</Text>
              </View>
              <View>
                <Text style={styles.boldText}>Sign</Text>
              </View>
            </View>
            <View style={{ ...styles.flexRow, marginBottom: 8 }}>
              <View
                style={{
                  border: "1px solid #000",
                  padding: 6,
                  textAlign: "center",
                  minWidth: 150,
                }}
              >
                <Text>د. توفيق التيسي</Text>
                <Text>Dr. Tawfik M. AlTais</Text>
                <Text>استشاري طب وجراحة العيون</Text>
                <Text>Ophthalmology Consultant</Text>
              </View>
              <View
                style={{
                  border: "1px solid #000",
                  padding: 6,
                  textAlign: "center",
                  minWidth: 120,
                }}
              >
                <Text style={{ fontSize: 18, marginBottom: 4 }}>🌿</Text>
                <Text>السقاف</Text>
                <Text>SADGAF EYE CENTER</Text>
                <Text>لطب العيون</Text>
                <Text>ID: 1004</Text>
              </View>
            </View>
            <Text style={{ marginBottom: 6 }}>ment of the case</Text>
            <Text>
              <Text style={styles.boldText}>ate</Text> ....../...../......
            </Text>
          </View>
          <View style={styles.sectionBorder}>
            <Text style={{ marginBottom: 6 }}>
              I hereby certify that all statements & information provided
              concerning patient identification & the patient illness or injury
              are TRUE
            </Text>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                Name (and relationship if guardian):
              </Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Signature(*):</Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.boldText}>Date</Text>
              <View style={styles.dottedLine}></View>
              <Text style={{ marginLeft: 6 }}>.../...</Text>
            </View>
          </View>
          <View style={styles.sectionBorder}>
            <Text style={{ ...styles.boldText, marginBottom: 8 }}>
              For Insurance Company Use Only:
            </Text>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Approved</Text> ( ){" "}
              <Text style={styles.boldText}>Not Approved</Text> ( )
            </View>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                Comments: (include approved days / services . if different from
                the requested)
              </Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Approved By:</Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Signature:</Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Approved Validaty:</Text>
              <View style={styles.dottedLine}></View>
            </View>
            <View>
              <Text style={styles.boldText}>Date:</Text> <Text> / /</Text>
            </View>
          </View>
        </View>

        {header && (
          <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerTitle}>
                {header.english_name || header.facility_name || ""}
              </Text>
              <Text style={styles.headerText}>{header.location || ""}</Text>
              <Text style={styles.headerText}>
                Phone : {header.phone || ""}
              </Text>
              <Text style={styles.headerText}>
                VAT NO : {header.vat_no || ""}
              </Text>
            </View>
            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                {header.arabic_name || header.center_name || ""}
              </Text>
              {logoBase64 && (
                <Image
                  src={`data:image/bmp;base64,${logoBase64}`}
                  style={styles.logo}
                />
              )}
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>Date</Text> {header.date || ""}
              </Text>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>Page</Text>{" "}
                {header.page_current || ""}
                {header.page_total || ""}
              </Text>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>User</Text> {header.user || ""}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text
            style={{ ...styles.heading, fontSize: 16, textAlign: "center" }}
          >
            Medical Sheet
          </Text>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Consultant</Text> Tawfik Mohmmed
                Al-Tisi
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Visit Date</Text> 25-08-2025 17:52
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Patient Name</Text> 053565 -
                Hamedah - - Zahrani
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Date Of Birth</Text> 11-04-1964
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Gender</Text>{" "}
                {patient.gender || ""}
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Blood Group</Text>{" "}
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Attendance</Text> Daycase
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Nat ID</Text> 1012711493{" "}
                <Text style={styles.boldText}>Bed no</Text> bed0101
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 12, marginBottom: 6 }}>
            <Text>
              <Text style={styles.boldText}>Admission Reason</Text>{" "}
            </Text>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text>
              <Text style={styles.boldText}>Complaint</Text> BLURRED OF VISION
            </Text>
          </View>
          <View
            style={{ ...styles.centerText, marginTop: 12, marginBottom: 12 }}
          >
            <Text>
              <Text style={styles.boldText}>Written By</Text> Tawfik Mohmmed
              Al-Tisi <Text>Cataract</Text>
            </Text>
          </View>
          <Text style={{ marginTop: 12, ...styles.boldText }}>Vital Sign</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.table}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableHeader, flex: 1.5 }}>
                <Text>Reading Date</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Height</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Weight</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Temperature</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1.2 }}>
                <Text>Blood Pressur</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Pulse Rate</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Respiratory</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCell, flex: 1.5 }}>
                <Text>24-08-2025 11:37</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>159 CM</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>61.5 Kgm</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>C</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1.2 }}>
                <Text>135/75 mmHg</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>76 MIN</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>20IB/MIN</Text>
              </View>
            </View>
          </View>
          <Text style={{ ...styles.boldText, marginBottom: 4, fontSize: 10 }}>
            Medications
          </Text>
          <View style={styles.table}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableHeader, flex: 1.5 }}>
                <Text>Date</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 2 }}>
                <Text>Product Name</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 2.5 }}>
                <Text>Dosage</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCell, flex: 1.5 }}>
                <Text>25-08-2025 18:28</Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                <Text>ALPHAGAN EYE DROPS</Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 2.5 }}>
                <Text>One Drops Every 12 Hour For 10 Day For 10 Day</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCell, flex: 1.5 }}>
                <Text>25-08-2025 18:27</Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                <Text>PRED FORTE OPTH. SUSP</Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 2.5 }}>
                <Text>One Drops Every 6 Hour For 10 Day For 10 Day</Text>
              </View>
            </View>
          </View>
          <Text style={{ ...styles.boldText, marginBottom: 4, fontSize: 10 }}>
            Sign & Symptoms
          </Text>
          <View style={styles.table}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Description</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCellLeft, flex: 1 }}>
                <Text>PCO OD</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCellLeft, flex: 1 }}>
                <Text> </Text>
              </View>
            </View>
          </View>
          <Text style={{ ...styles.boldText, marginBottom: 4, fontSize: 10 }}>
            Other Services
          </Text>
          <View style={styles.table}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Date</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Service</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCellLeft, flex: 1 }}>
                <Text> </Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 1 }}>
                <Text> </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={{ ...styles.boldText, marginBottom: 6, fontSize: 12 }}>
            Diagnosis
          </Text>
          <View style={styles.table}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableHeader, flex: 1.5 }}>
                <Text>Final / Provisional</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>ICD</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 2 }}>
                <Text>Description</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCell, flex: 1.5 }}>
                <Text>Provisional</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>H26.4</Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                <Text>(P) After-cataract</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCell, flex: 1.5 }}>
                <Text>Provisional Associated</Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text>H20.0</Text>
              </View>
              <View style={{ ...styles.tableCellLeft, flex: 2 }}>
                <Text>(P) Acute and subacute iridocyclitis</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              ...styles.boldText,
              marginBottom: 6,
              fontSize: 12,
              marginTop: 12,
            }}
          >
            PATIENT_SICKLEAVE
          </Text>
          <View style={styles.table}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Date From</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 1 }}>
                <Text>Date To</Text>
              </View>
              <View style={{ ...styles.tableHeader, flex: 2 }}>
                <Text>Abstract Diagnosis</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text> </Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 1 }}>
                <Text> </Text>
              </View>
              <View style={{ ...styles.tableCell, flex: 2 }}>
                <Text> </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              ...styles.boldText,
              marginBottom: 8,
              fontSize: 12,
              marginTop: 12,
            }}
          >
            OPTH_SCREENING
          </Text>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Consultant:</Text> Tawfik Mohmmed
                Al-Tisi
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Visit Date:</Text> 25-08-2025
                18:23
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Patient Name:</Text> 053565 -
                Hamedah - - Zahrani
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Date Of Birth:</Text> 11-04-1964
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Gender:</Text>{" "}
                {patient.gender || ""}
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Old:</Text> 61 Y
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Blood Group:</Text>{" "}
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Attendance:</Text> Daycase
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Nat ID:</Text> 1012711493
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Bed no:</Text> bed0101
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>Clinical Entity:</Text> Day
                Surgery Ward
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Admission Reason:</Text>{" "}
              </Text>
            </View>
          </View>
          {/* <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              border: "2px solid #0066cc",
              padding: "6px 10px",
              backgroundColor: "#e6f2ff",
              borderRadius: 4,
              textAlign: "center",
              fontSize: 8,
            }}
          >
            <Text style={{ ...styles.boldText, marginBottom: 2 }}>
              مجمع حسين علي محسن السقاف الطبي
            </Text>
            <Text style={styles.boldText}>
              Hussein Ali Mohsen Al-Saggaf Medical Complex
            </Text>
          </View> */}
        </View>

        {header && (
          <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerTitle}>
                {header.english_name || header.facility_name || ""}
              </Text>
              <Text style={styles.headerText}>{header.location || ""}</Text>
              <Text style={styles.headerText}>
                Phone : {header.phone || ""}
              </Text>
              <Text style={styles.headerText}>
                VAT NO : {header.vat_no || ""}
              </Text>
            </View>
            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>
                {header.arabic_name || header.center_name || ""}
              </Text>
              {logoBase64 && (
                <Image
                  src={`data:image/bmp;base64,${logoBase64}`}
                  style={styles.logo}
                />
              )}
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>Date</Text> {header.date || ""}
              </Text>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>Page</Text>{" "}
                {header.page_current || ""}
                {header.page_total || ""}
              </Text>
              <Text style={styles.headerText}>
                <Text style={styles.boldText}>User</Text> {header.user || ""}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text
            style={{ ...styles.heading, fontSize: 18, textAlign: "center" }}
          >
            Discharge Summary
          </Text>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>MRN:</Text> 053565
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Patient Name (اسم المريض):</Text>{" "}
                Hamedah -- Zahrani
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>
                  Admission Date (تاريخ الدخول):
                </Text>{" "}
                25-08-2025
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.boldText}>Disch. Date (تاريخ الخروج):</Text>{" "}
                25-08-2025
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text>
                <Text style={styles.boldText}>
                  Attending Physician (الطبيب المعالج):
                </Text>{" "}
                Tawfik Mohmmed Al-Tisi
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Diagnosis (التشخيص):</Text> H26.4 -
              (P) After-cataract
            </Text>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>Diagnosis (التشخيص):</Text> H40.0 -
              (P) Glaucoma suspect
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                History of Present Illness (تاريخ المرض الحالي):
              </Text>{" "}
              BLURRED VISION RT EYE, RT PCO
            </Text>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                Duration of illness (مدة المرض):
              </Text>{" "}
              30+
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>LABRATORY (المختبر):</Text>
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>PROCEDURES (الإجراءات):</Text> YAG
              LASER POSTERIOR CAPSULOTOMY (ONE EYE) (OD)
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                Discharge Medications (أدوية الخروج):
              </Text>{" "}
              ALPHAGAN-P 0.15% OPHTHALMIC SOLUTION
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 6 }}>
              <Text style={styles.boldText}>
                Follow Up Appointments (مواعيد المتابعة):
              </Text>{" "}
              العين ا
            </Text>
          </View>
          <View style={{ marginTop: 16 }}>
            <Text>
              <Text style={styles.boldText}>Dictated By (أملى بواسطة):</Text>{" "}
              Tawfik Mohmmed Al-Tisi
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default FullPagePDF;
