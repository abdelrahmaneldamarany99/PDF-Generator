import React, { useContext } from "react";
import { type PatientInfo } from "../../types";
import { PDFContext } from "../../context/PDFContext";

/*
  Renders the patient information section of the invoice.
*/
interface Props {
  data: PatientInfo;
}

export const PatientInfoSection: React.FC<Props> = () => {
  const { patientInvoice } = useContext(PDFContext);
  return (
    <div style={container}>
      <h2>فاتورة ضريبية</h2>
      {/* Top Row: Reference & VAT Invoice */}
      <div style={row}>
        <div style={left}>
          <strong>Reference_Invoice_No:</strong>{" "}
          {patientInvoice[0].reference_invoice_no &&
            patientInvoice[0].reference_invoice_no}
        </div>

        <div style={right}>
          <strong>Vat Invoice No:</strong>{" "}
          {patientInvoice[0].vat_invoice_no && patientInvoice[0].vat_invoice_no}
        </div>
      </div>

      {/* Invoice Date */}
      <div style={{ marginTop: 10 }}>
        <strong>Date:</strong> {patientInvoice[0].invoiceItem[0].invoice_date}
      </div>

      {/* Patient Name + ID + Card */}
      <div style={{ marginTop: 20, ...row }}>
        <div style={left}>
          <p>
            <strong>Patient Name:</strong> {patientInvoice[0].patient_name}
          </p>
          <p>
            <strong>ACC NAME:</strong>{" "}
            {patientInvoice[0].acc_name && patientInvoice[0].acc_name}
          </p>
          <p>
            <strong>VAT_NO:</strong> {patientInvoice[0].vat_number}
          </p>
          <p>
            <strong>Policy No:</strong>{" "}
            {patientInvoice[0].policy_no && patientInvoice[0].policy_no}
          </p>
          <p>
            <strong>Vat File NO:</strong>{" "}
            {patientInvoice[0].vat_file_no && patientInvoice[0].vat_file_no}
          </p>
        </div>

        <div style={right}>
          <p>
            <strong>PATIENT_ID:</strong>{" "}
            {patientInvoice[0].patient_id && patientInvoice[0].patient_id}
          </p>
          <p>
            <strong>Card No:</strong>{" "}
            {patientInvoice[0].card_no && patientInvoice[0].card_no}
          </p>
        </div>
      </div>
    </div>
  );
};

const container: React.CSSProperties = {
  padding: "15px 0",
  borderBottom: "1px solid #ccc",
};

const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const left: React.CSSProperties = {
  maxWidth: "65%",
};

const right: React.CSSProperties = {
  textAlign: "right",
  maxWidth: "35%",
};
