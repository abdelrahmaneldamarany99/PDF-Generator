import React, { useContext } from "react";
import { PDFContext } from "../../context/PDFContext";

const labelStyle: React.CSSProperties = {
  fontWeight: 700,
  marginRight: 4,
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 4,
};

const MedicalSheetSummary: React.FC = () => {
  const { patientInvoice } = useContext(PDFContext);
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Times New Roman, serif",
        fontSize: "12px",
        color: "#000",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "18px",
          marginBottom: "12px",
        }}
      >
        Medical Sheet
      </div>

      <div style={rowStyle}>
        <div>
          <span style={labelStyle}>Consultant</span>
          <span>Tawfik Mohmmed Al-Tisi</span>
        </div>
        <div>
          <span style={labelStyle}>Visit Date</span>
          <span>25-08-2025 17:52</span>
        </div>
      </div>

      <div style={rowStyle}>
        <div>
          <span style={labelStyle}>Patient Name</span>
          <span>053565 - Hamedah - - Zahrani</span>
        </div>
        <div>
          <span style={labelStyle}>Date Of Birth</span>
          <span>11-04-1964</span>
        </div>
      </div>

      <div style={rowStyle}>
        <div>
          <span style={labelStyle}>Gender</span>
          <span>{patientInvoice[0].gender}</span>
        </div>
        <div>
          <span style={labelStyle}>Blood Group</span>
          <span>&nbsp;</span>
        </div>
      </div>

      <div style={rowStyle}>
        <div>
          <span style={labelStyle}>Attendance</span>
          <span>Daycase</span>
        </div>
        <div>
          <span style={labelStyle}>Nat ID</span>
          <span>1012711493</span>
          <span style={{ marginLeft: 24, ...labelStyle }}>Bed no</span>
          <span>bed0101</span>
        </div>
      </div>

      <div style={{ marginTop: 16, marginBottom: 8 }}>
        <span style={labelStyle}>Admission Reason</span>
        <span>&nbsp;</span>
      </div>

      <div style={{ marginBottom: 16 }}>
        <span style={labelStyle}>Complaint</span>
        <span>BLURRED OF VISION</span>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        <span style={labelStyle}>Written By</span>
        <span>Tawfik Mohmmed Al-Tisi</span>
        <span style={{ marginLeft: 40 }}>Cataract</span>
      </div>

      <div style={{ marginTop: 16, fontWeight: 700 }}>Vital Sign</div>
    </div>
  );
};

export default MedicalSheetSummary;
