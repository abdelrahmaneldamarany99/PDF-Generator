import React from "react";

const tableCell: React.CSSProperties = {
  border: "1px solid #000",
  padding: "4px 6px",
  fontSize: "9px",
  textAlign: "center",
};

const tableHeader: React.CSSProperties = {
  ...tableCell,
  fontWeight: 600,
};

const leftTableCell: React.CSSProperties = {
  ...tableCell,
  textAlign: "left",
};

const ServiceAndMedicationApprovalSection: React.FC = ({service_code, unit_price, qty}) => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        fontSize: "10px",
        color: "#000",
      }}
    >
      <div style={{ marginBottom: 8, fontSize: "10px" }}>
        Suggestive Line(s) of managment Kindly , enumerate the recommended
        investigations , and/or procedures For outpatient approvals only :
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "8px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>Code *</th>
            <th style={tableHeader}>Description/Service</th>
            <th style={tableHeader}>Approval No</th>
            <th style={tableHeader}>U. Price</th>
            <th style={tableHeader}>Quantity</th>
            <th style={tableHeader}>Type</th>
            <th style={tableHeader}>Cost *</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCell}>300056</td>
            <td style={leftTableCell}>
              YAG LASER POSTERIOR CAPSULOTOMY (ONE EYE)
            </td>
            <td style={tableCell}>121266622</td>
            <td style={tableCell}>1200</td>
            <td style={tableCell}>1</td>
            <td style={tableCell}>OR</td>
            <td style={tableCell}>1200</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: 4, marginBottom: 4, fontSize: "10px" }}>
        * Provider&apos;s Approval/Coding Staff must review / code the
        recommended service (s) &amp; allocate cost and complete the following:
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
          fontSize: "10px",
        }}
      >
        <div>
          <span>Completed/Coded by: </span>
          <span style={{ fontWeight: 600 }}>Tawfik Mohmmed Al-Tisi</span>
        </div>
        <div>
          <span>Signature: </span>
          <span style={{ fontWeight: 600 }}>Tawfik Mohmmed Al-Tisi</span>
          <span style={{ marginLeft: 24 }}>Date: 25-08-2025</span>
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>Code *</th>
            <th style={tableHeader}>Medication</th>
            <th style={tableHeader}>Approval No</th>
            <th style={tableHeader}>U. Price</th>
            <th style={tableHeader}>Quantity</th>
            <th style={tableHeader}>Type</th>
            <th style={tableHeader}>Cost *</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCell}>{service_code}</td>
            <td style={leftTableCell}>
              ALPHAGAN-P 0.15% OPHTHALMIC SOLUTION (14 Days)
            </td>
            <td style={tableCell}></td>
            <td style={tableCell}>{unit_price}</td>
            <td style={tableCell}>{qty}</td>
            <td style={tableCell}>MED</td>
            <td style={tableCell}>{qty * unit_price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServiceAndMedicationApprovalSection;


