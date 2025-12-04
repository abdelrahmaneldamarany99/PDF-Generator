import DiagnosisAndPatientScreening from "../components/DiagnosisAndPatientScreening/DiagnosisAndPatientScreening";
import InvoiceHeader from "../components/InvoiceHeader/InvoiceHeader";
import MedicalSheetSummary from "../components/MedicalSheetSummary/MedicalSheetSummary";
import VitalSignsAndMedicationsSheet from "../components/VitalSignsAndMedicationsSheet/VitalSignsAndMedicationsSheet";
import headerData from "../data/header.json";

const MedicalSheetPage = () => {
  return (
    <>
      <MedicalSheetSummary />
      <VitalSignsAndMedicationsSheet />
      <DiagnosisAndPatientScreening />
    </>
  );
};

export default MedicalSheetPage;
