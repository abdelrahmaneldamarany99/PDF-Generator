import React from "react";

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
  marginBottom: 16,
};

const DischargeSummary: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Times New Roman, serif",
        fontSize: "12px",
        color: "#000",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "20px",
          marginBottom: "20px",
          borderBottom: "2px solid #000",
          paddingBottom: "8px",
        }}
      >
        Discharge Summary
      </div>

      <div style={sectionStyle}>
        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>MRN:</span>
            <span>053565</span>
          </div>
          <div>
            <span style={labelStyle}>Patient Name (اسم المريض):</span>
            <span>Hamedah -- Zahrani</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Admission Date (تاريخ الدخول):</span>
            <span>25-08-2025</span>
          </div>
          <div>
            <span style={labelStyle}>Disch. Date (تاريخ الخروج):</span>
            <span>25-08-2025</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Attending Physician (الطبيب المعالج):</span>
            <span>Tawfik Mohmmed Al-Tisi</span>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>Diagnosis (التشخيص):</span>
          <span>H26.4 - (P) After-cataract</span>
        </div>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>Diagnosis (التشخيص):</span>
          <span>H40.0 - (P) Glaucoma suspect</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>History of Present Illness (تاريخ المرض الحالي):</span>
          <span>BLURRED VISION RT EYE, RT PCO</span>
        </div>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>Duration of illness (مدة المرض):</span>
          <span>30+</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>LABRATORY (المختبر):</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>PROCEDURES (الإجراءات):</span>
          <span>YAG LASER POSTERIOR CAPSULOTOMY (ONE EYE) (OD)</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>Discharge Medications (أدوية الخروج):</span>
          <span>ALPHAGAN-P 0.15% OPHTHALMIC SOLUTION</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>Follow Up Appointments (مواعيد المتابعة):</span>
          <span>العين ا</span>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <span style={labelStyle}>Dictated By (أملى بواسطة):</span>
        <span>Tawfik Mohmmed Al-Tisi</span>
      </div>
    </div>
  );
};

export default DischargeSummary;

