import React, { useContext } from "react";
import { PDFContext } from "../../context/PDFContext";

const boldText: React.CSSProperties = {
  fontWeight: 700,
};

const smallLabel: React.CSSProperties = {
  fontSize: "9px",
};

const UCAFForm: React.FC = () => {
  const { patientInvoice } = useContext(PDFContext);
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        fontSize: "10px",
        color: "#000",
        marginTop: "200px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "22px",
          marginBottom: "8px",
        }}
      >
        UCAF 2.0
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px",
        }}
      >
        <div style={{ flex: 1, marginRight: 16 }}>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>provider Name</span>&nbsp;
            <span>Hussein Ali Alsagqaf Medical Comblex</span>
          </div>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>Patient File N</span>&nbsp;
            <span>{patientInvoice.file_no}</span>&nbsp;
            <span>Hamedah - - Zahrani</span>
          </div>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>company:</span>&nbsp;
            <span style={smallLabel}>
              ............................................................................................
            </span>
          </div>

          <div
            style={{
              border: "1px solid #000",
              padding: "6px",
              marginTop: 6,
              fontSize: "9px",
            }}
          >
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>
                To be completed and ID verified by the reception/nurse:
              </span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>provider Name :</span>&nbsp;
              <span>Hussein Ali Alsaggaf Medical Complex</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Insurance Company Name:</span>&nbsp;
              <span>{patientInvoice.company_name}</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>TPA Company Name:</span>&nbsp;
              <span></span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Patient File Number:</span>&nbsp;
              <span>{patientInvoice.file_no}</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Dept:</span>&nbsp;
              <span>Bupa-petrorabighcompany-(VIP)</span>
            </div>
            <div style={{ marginBottom: 4 }}>
              <span style={boldText}>Plan Type</span> ({" "}
              {patientInvoice.marital_status === "Single" && "Y"} ) Single ({" "}
              {patientInvoice.marital_status !== "Single" && "Y"} ) Married
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Date Of Visit:</span>&nbsp;
              <span>25-08-2025</span>&nbsp;&nbsp;
              <span style={boldText}>New Visit</span>
              <span style={{ marginLeft: 6 }}>☑</span>
              <span style={{ marginLeft: 10 }}>Follow Up</span>
              <span style={{ marginLeft: 10 }}>Refill</span>
              <span style={{ marginLeft: 10 }}>Walk-in</span>
              <span style={{ marginLeft: 10 }}>Referral</span>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>Insurance Company:</span>&nbsp;
            <span>{patientInvoice.company_name}</span>
          </div>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>Date Of Visit:</span>&nbsp;
            <span>25-08-2025</span>&nbsp;
            <span style={boldText}>Dept:</span>&nbsp;
            <span>Cataract</span>
          </div>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>Policy No.:</span>&nbsp;
            <span>514891001</span>
          </div>
          <div style={{ marginBottom: 4 }}>
            <span style={boldText}>Insurance Card number:</span>&nbsp;
            <span>37529611</span>
          </div>

          <div
            style={{
              border: "1px solid #000",
              padding: "6px",
              marginTop: 6,
              fontSize: "9px",
            }}
          >
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>
                Print/Fill in clear letters or Emboss Card:
              </span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Insured Name:</span>&nbsp;
              <span>Hamedah - - Zahrani</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>ID Card No :</span>&nbsp;
              <span>37529611</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Sex :</span>&nbsp;
              <span>Female</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Policy Holder:</span>&nbsp;
              <span>{patientInvoice.policy_holder}</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Policy No :</span>&nbsp;
              <span>514891001</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Member Since :</span>&nbsp;
              <span></span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Expiry Date :</span>&nbsp;
              <span>09-01-2026</span>
            </div>
            <div style={{ marginBottom: 2 }}>
              <span style={boldText}>Approval :</span>&nbsp;
              <span></span>
            </div>
            <div style={{ marginTop: 4 }}>
              <span style={boldText}>Age :</span>&nbsp;
              <span>61 Years</span>&nbsp;&nbsp;
              <span style={boldText}>Member Type :</span>&nbsp;
              <span></span>&nbsp;&nbsp;
              <span style={boldText}>Class :</span>&nbsp;
              <span>VIP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UCAFForm;
