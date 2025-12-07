import React from "react";

const labelStyle: React.CSSProperties = {
  fontWeight: 700,
  marginRight: 8,
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 12,
  alignItems: "flex-start",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: 20,
  border: "1px dashed #000",
  padding: "12px",
};

const dottedLine: React.CSSProperties = {
  borderBottom: "1px dotted #000",
  flex: 1,
  marginLeft: 8,
  marginRight: 8,
  minWidth: "100px",
};

const CaseManagementForm: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Times New Roman, serif",
        fontSize: "12px",
        color: "#000",
        padding: "20px",
        marginTop:"200px"
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <span style={labelStyle}>Is Case Management Form (CMF1.0) Included</span>
        <span style={{ marginLeft: 8 }}>Yes ( )</span>
        <span style={{ marginLeft: 8 }}>No ( )</span>
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <span style={labelStyle}>Please Specify Possible Line of management when applicable:.</span>
          <div style={dottedLine}></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span style={labelStyle}>Estimated Length of Stay:</span>
          <div style={dottedLine}></div>
          <span style={{ marginLeft: 8 }}>days</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span style={labelStyle}>Approved Length of Stay:</span>
          <div style={dottedLine}></div>
          <span style={{ marginLeft: 8 }}>days</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span style={labelStyle}>Expected Date of Admission:</span>
          <div style={dottedLine}></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span style={labelStyle}>Estimated Cost:</span>
          <div style={dottedLine}></div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={labelStyle}>Total Approved Cost:</span>
          <span style={{ marginLeft: 8 }}>1238.5</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ marginBottom: 8 }}>
            I hereby certify that ALL information mentioned are correct shown on this form were medically ir
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <div style={labelStyle}>Physician</div>
              <div>1004</div>
            </div>
            <div>
              <div style={labelStyle}>Sign</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 12,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                border: "1px solid #000",
                padding: "8px",
                textAlign: "center",
                minWidth: "200px",
              }}
            >
              <div>د. توفيق التيسي</div>
              <div>Dr. Tawfik M. AlTais</div>
              <div>استشاري طب وجراحة العيون</div>
              <div>Ophthalmology Consultant</div>
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px",
                textAlign: "center",
                minWidth: "150px",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "4px" }}>🌿</div>
              <div>السقاف</div>
              <div>SADGAF EYE CENTER</div>
              <div>لطب العيون</div>
              <div>ID: 1004</div>
            </div>
          </div>
          <div style={{ marginBottom: 8 }}>ment of the case</div>
          <div>
            <span style={labelStyle}>ate</span>
            <span style={{ marginLeft: 8 }}>....../...../......</span>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ marginBottom: 8 }}>
            I hereby certify that all statements & information provided concerning patient identification & the patient illness or injury are TRUE
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Name (and relationship if guardian):</span>
            <div style={dottedLine}></div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Signature(*):</span>
            <div style={dottedLine}></div>
          </div>
          <div>
            <span style={labelStyle}>Date</span>
            <div style={{ ...dottedLine, display: "inline-block" }}></div>
            <span style={{ marginLeft: 8 }}>.../...</span>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>For Insurance Company Use Only:</div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Approved</span>
            <span style={{ marginLeft: 8 }}>( )</span>
            <span style={{ marginLeft: 16, ...labelStyle }}>Not Approved</span>
            <span style={{ marginLeft: 8 }}>( )</span>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Comments: (include approved days / services . if different from the requested)</span>
            <div style={dottedLine}></div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Approved By:</span>
            <div style={dottedLine}></div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Signature:</span>
            <div style={dottedLine}></div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={labelStyle}>Approved Validaty:</span>
            <div style={dottedLine}></div>
          </div>
          <div>
            <span style={labelStyle}>Date:</span>
            <span style={{ marginLeft: 8 }}>/ /</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseManagementForm;

