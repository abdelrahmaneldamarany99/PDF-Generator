import React from "react";

const checkboxStyle: React.CSSProperties = {
  display: "inline-block",
  width: 10,
  height: 10,
  border: "1px solid #000",
  marginRight: 4,
};

const AttendingPhysicianForm: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        fontSize: "10px",
        color: "#000",
      }}
    >
      <div
        style={{
          border: "1px solid #000",
          padding: "8px",
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <span style={checkboxStyle} /> Inpatient&nbsp;&nbsp;
          <span style={checkboxStyle} /> Outpatient&nbsp;&nbsp;
          <span style={checkboxStyle} /> Emergency Case ? Yes ( ) No ( )
          &nbsp;&nbsp; Emergency Care Level:
          <span style={{ marginLeft: 4 }}>1( ) 2( ) 3( ) 4( ) 5( )</span>
        </div>

        <div style={{ marginBottom: 4 }}>
          Physician Name [ID]:
          <span style={{ marginLeft: 8 }}></span>
        </div>

        <div style={{ marginBottom: 4 }}>
          Bp:
          <span style={{ marginLeft: 8 }} />
          Pulse:
          <span style={{ marginLeft: 8 }} />
          Temp:
          <span style={{ marginLeft: 8 }} />
          Weight:
          <span style={{ marginLeft: 8 }} />
          Height:
          <span style={{ marginLeft: 8 }} />
          R.R:
          <span style={{ marginLeft: 8 }} />
          Duration of illness:
          <span style={{ marginLeft: 8 }}>30+ - DAY</span>
        </div>

        <div style={{ marginTop: 8, marginBottom: 4 }}>
          Chief Complaint &amp; Main Symptoms:
        </div>
        <div
          style={{
            border: "1px solid #000",
            padding: "4px",
            minHeight: 36,
            marginBottom: 8,
          }}
        >
          BLURRED VISION RT EYE , RT PCO
        </div>

        <div style={{ marginBottom: 4 }}>Significant Signs:</div>
        <div
          style={{
            border: "1px solid #000",
            padding: "4px",
            minHeight: 36,
            marginBottom: 8,
          }}
        >
          , YAG LASER CAPSULOTOMY OD TODAY
        </div>

        <div style={{ marginBottom: 4 }}>Possible Line of Treatment:</div>
        <div
          style={{
            border: "1px solid #000",
            padding: "4px",
            minHeight: 36,
            marginBottom: 8,
          }}
        ></div>

        <div style={{ marginBottom: 4 }}>Other Conditions:</div>

        <div style={{ marginBottom: 4 }}>
          Diagnosis: ( H26.4 ) ) (P) After-cataract ( ) ( )
        </div>
        <div style={{ marginBottom: 4 }}>
          Diagnosis: ( H40.0 ) ) (P) Glaucoma suspect ( ) ( )
        </div>
        <div style={{ marginBottom: 4 }}>Diagnosis: ( ) ( )</div>
        <div style={{ marginBottom: 8 }}>Diagnosis: ( ) ( )</div>

        <div style={{ marginBottom: 4 }}>
          Please tick( ✓ ) Where appropriate:
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={checkboxStyle} /> Chronic
          </div>
          <div>
            <span style={checkboxStyle} /> Check-Up
          </div>
          <div>
            <span style={checkboxStyle} /> Congenital
          </div>
          <div>
            <span style={checkboxStyle} /> Psychiatric
          </div>
          <div>
            <span style={checkboxStyle} /> RTA
          </div>
          <div>
            <span style={checkboxStyle} /> Infertility
          </div>
          <div>
            <span style={checkboxStyle} /> Work Related
          </div>
          <div>
            <span style={checkboxStyle} /> Pregnancy
          </div>
          <div>
            <span style={checkboxStyle} /> Vaccination
          </div>
          <div>
            Indicate LMP:
            <span style={{ marginLeft: 8 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendingPhysicianForm;


