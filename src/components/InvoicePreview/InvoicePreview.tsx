import React from "react";
import InvoiceTable from "../InvoiceTable/InvoiceTable";

/*
  Displays full invoice (header + patient info + table + totals)
  Props:
    - invoice: full JSON object extracted from the PDF
*/
export default function InvoicePreview({ invoice }) {
  const { items, totals, patient, invoice: header } = invoice;

  return (
    <div style={{ padding: 20 }}>
      {/* Header */}
      <h2 style={{ marginBottom: 5 }}>Invoice #{header.reference_invoice_no}</h2>
      <p>Date: {header.invoice_date}</p>

      {/* Patient Info */}
      <div style={{ marginTop: 20 }}>
        <h3>Patient Information</h3>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Policy:</strong> {patient.policy_no}</p>
        <p><strong>Patient ID:</strong> {patient.patient_id}</p>
      </div>

      {/* Items Table */}
      <InvoiceTable data={items} />

      {/* Totals */}
      <div style={{ marginTop: 20 }}>
        <h3>Totals</h3>
        <p>Gross: {totals.gross}</p>
        <p>Discount: {totals.discount}</p>
        <p>Total: {totals.total}</p>
        <p>VAT: {totals.vat_amount}</p>
        <p><strong>Net Amount: {totals.net_amount}</strong></p>
      </div>
    </div>
  );
}
