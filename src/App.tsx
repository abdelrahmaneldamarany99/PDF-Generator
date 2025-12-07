// import GeneratePDFWithTemplate from "./components/GeneratePDFWithTemplate/GeneratePDFWithTemplate";
// import GeneratePDFWithTextAndImages from "./components/GeneratePDFWithTextAndImages/GeneratePDFWithTextAndImages";
// import GeneratePDFWithTextAndImagesWithusePrint from "./components/GeneratePDFWithTextAndImagesWithusePrint/GeneratePDFWithTextAndImagesWithusePrint";
// import GeneratePDFWithImages from "./components/GeneratePDFWithImages/GeneratePDFWithImages";
// import OpenFiles from "./components/OpenFiles/OpenFiles";
// import PDFProcessor from "./components/PDFProcessor/PDFProcessor";
// -------------------------------------------------------------------
// import AttachedFilesPDF from "./components/AttachedFilesPDF/AttachedFilesPDF";
// import OrganizationPDF from "./components/OrganizationPDF/OrganizationPDF";
// import EpisodeInvoicePDF from "./components/EpisodeInvoicePDF/EpisodeInvoicePDF";
// import EpisodeInvoiceDetailsPDF from "./components/EpisodeInvoiceDetailsPDF/EpisodeInvoiceDetailsPDF";
// import AllAPIsPDF from "./components/AllAPIsPDF/AllAPIsPDF";
import InvoicePreview from "./components/InvoicePreview/InvoicePreview";
import InvoiceHeader from "./components/InvoiceHeader/InvoiceHeader";
import invoiceData from "./data/invoice.json"; // the extracted JSON
import headerData from "./data/header.json";
import "./App.css";
import { PatientInfoSection } from "./components/PatientInfoSection/PatientInfoSection";
import patientInfo from "./data/patientInfo.json";
import YagLaserPosteriorCapsulotomyOneEyePDF from "./components/YagLaserPosteriorCapsulotomyOneEyePDF/YagLaserPosteriorCapsulotomyOneEyePDF";
import VitalSignsAndMedicationsSheet from "./components/VitalSignsAndMedicationsSheet/VitalSignsAndMedicationsSheet";
import ServiceAndMedicationApprovalSection from "./components/ServiceAndMedicationApprovalSection/ServiceAndMedicationApprovalSection";
import MedicalSheetSummary from "./components/MedicalSheetSummary/MedicalSheetSummary";
import AttendingPhysicianForm from "./components/AttendingPhysicianForm/AttendingPhysicianForm";
import UCAFForm from "./components/UCAFForm/UCAFForm";
import DischargeSummary from "./components/DischargeSummary/DischargeSummary";
import CaseManagementForm from "./components/CaseManagementForm/CaseManagementForm";
import DiagnosisAndPatientScreening from "./components/DiagnosisAndPatientScreening/DiagnosisAndPatientScreening";
import MedicalSheetPage from "./pages/MedicalSheetPage";
import { useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FullPagePDF from "./components/FullPagePDF/FullPagePDF";
import PDFContextProvider, { PDFContext } from "./context/PDFContext";

interface ApiData {
  siteHeader?: Array<{
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
  }>;
  patientInvoice?: Array<{
    reference_invoice_no?: string;
    vat_invoice_no?: string;
    invoiceItem?: Array<{
      invoice_date?: string;
    }>;
    patient_name?: string;
    acc_name?: string;
    vat_number?: string;
    policy_no?: string;
    vat_file_no?: string;
    patient_id?: string;
    card_no?: string;
    doctor?: string;
    file_no?: string;
    company_name?: string;
    marital_status?: string;
    policy_holder?: string;
    gender?: string;
  }>;
}

function App() {
  const { patientInvoice, siteHeader } = useContext(PDFContext);

  if (!patientInvoice || !patientInvoice[0]) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div style={{ padding: "16px" }}>
          <PDFDownloadLink
            document={
              <FullPagePDF
                siteHeader={siteHeader}
                patientInvoice={patientInvoice}
              />
            }
            fileName="invoice-report.pdf"
          >
            {({ loading }) => (
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                }}
                disabled={loading}
              >
                {loading ? "Please Wait..." : "Download PDF"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
        {siteHeader && siteHeader[0] && (
          <InvoiceHeader
          // siteHeader={siteHeader[0]}
          />
        )}
        <PatientInfoSection
        // state={state.patientInvoice[0]}
        />
        {/* <InvoicePreview invoice={invoiceData} /> */}
        {patientInvoice[0].invoiceItem.map((invoice: any) => (
          <YagLaserPosteriorCapsulotomyOneEyePDF
            key={invoice.service_code}
            {...invoice}
          />
        ))}
        {/* ---------------------------------------------------- */}
        <UCAFForm
        // state={state.patientInvoice}
        />
        <AttendingPhysicianForm />
        {patientInvoice[0].invoiceItem.map((invoice: any) => (
          <ServiceAndMedicationApprovalSection
            key={invoice.service_code}
            {...invoice}
          />
        ))}
        <CaseManagementForm />
        {siteHeader && siteHeader[0] && (
          <InvoiceHeader
          // state={state.siteHeader[0]}
          />
        )}
        <MedicalSheetPage
        // state={state.patientInvoice[0]}
        />
        {siteHeader && siteHeader[0] && (
          <InvoiceHeader
          // state={state.siteHeader[0]}
          />
        )}
        <MedicalSheetPage
        // state={state.patientInvoice[0]}
        />
        <DischargeSummary />

        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}

        {/* <GeneratePDFWithImages /> */}
        {/* <OpenFiles /> */}
        {/* <PDFProcessor /> */}
        {/* ---------------------------------------------------- */}
        {/* <AllAPIsPDF />
      <AttachedFilesPDF />
      <OrganizationPDF />
      <EpisodeInvoicePDF />
      <EpisodeInvoiceDetailsPDF /> */}
        {/* ---------------------------------------------------- */}

        {/* <GeneratePDFWithTemplate /> */}
        {/* <GeneratePDFWithTextAndImages /> */}
        {/* <GeneratePDFWithTextAndImagesWithusePrint /> */}
      </div>
    </>
  );
}

export default App;
