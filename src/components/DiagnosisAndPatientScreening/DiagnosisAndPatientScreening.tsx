import React, { useContext } from "react";
import { PDFContext } from "../../context/PDFContext";

const labelStyle: React.CSSProperties = {
  fontWeight: 700,
  marginRight: 8,
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8,
  alignItems: "flex-start",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: 24,
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: 8,
  marginBottom: 16,
};

const thStyle: React.CSSProperties = {
  border: "1px solid #000",
  padding: "6px",
  textAlign: "left",
  backgroundColor: "#f0f0f0",
  fontWeight: 700,
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #000",
  padding: "6px",
};

const DiagnosisAndPatientScreening: React.FC = () => {
  const { patientInvoice } = useContext(PDFContext);
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Times New Roman, serif",
        fontSize: "12px",
        color: "#000",
        padding: "20px",
        position: "relative",
      }}
    >
      <div style={sectionStyle}>
        <div style={{ fontWeight: 700, marginBottom: 8, fontSize: "14px" }}>Diagnosis</div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Final / Provisional</th>
              <th style={thStyle}>ICD</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Provisional</td>
              <td style={tdStyle}>H26.4</td>
              <td style={tdStyle}>(P) After-cataract</td>
            </tr>
            <tr>
              <td style={tdStyle}>Provisional Associated</td>
              <td style={tdStyle}>H20.0</td>
              <td style={tdStyle}>(P) Acute and subacute iridocyclitis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={sectionStyle}>
        <div style={{ fontWeight: 700, marginBottom: 8, fontSize: "14px" }}>PATIENT_SICKLEAVE</div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Date From</th>
              <th style={thStyle}>Date To</th>
              <th style={thStyle}>Abstract Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>&nbsp;</td>
              <td style={tdStyle}>&nbsp;</td>
              <td style={tdStyle}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={sectionStyle}>
        <div style={{ fontWeight: 700, marginBottom: 12, fontSize: "14px" }}>OPTH_SCREENING</div>
        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Consultant:</span>
            <span>Tawfik Mohmmed Al-Tisi</span>
          </div>
          <div>
            <span style={labelStyle}>Visit Date:</span>
            <span>25-08-2025 18:23</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Patient Name:</span>
            <span>053565 - Hamedah - - Zahrani</span>
          </div>
          <div>
            <span style={labelStyle}>Date Of Birth:</span>
            <span>11-04-1964</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Gender:</span>
            <span>{patientInvoice[0].gender}</span>
          </div>
          <div>
            <span style={labelStyle}>Old:</span>
            <span>61 Y</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Blood Group:</span>
            <span>&nbsp;</span>
          </div>
          <div>
            <span style={labelStyle}>Attendance:</span>
            <span>Daycase</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Nat ID:</span>
            <span>1012711493</span>
          </div>
          <div>
            <span style={labelStyle}>Bed no:</span>
            <span>bed0101</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Clinical Entity:</span>
            <span>Day Surgery Ward</span>
          </div>
          <div>
            <span style={labelStyle}>Admission Reason:</span>
            <span>&nbsp;</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          border: "2px solid #0066cc",
          padding: "8px 12px",
          backgroundColor: "#e6f2ff",
          borderRadius: "4px",
          textAlign: "center",
          fontSize: "10px",
          color: "#0066cc",
          transform: "rotate(-5deg)",
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: "4px" }}>مجمع حسين علي محسن السقاف الطبي</div>
        <div style={{ fontWeight: 700 }}>Hussein Ali Mohsen Al-Saggaf Medical Complex</div>
      </div>
    </div>
  );
};

export default DiagnosisAndPatientScreening;

