import React from "react";

const cell: React.CSSProperties = {
  border: "1px solid #000",
  padding: "4px 6px",
  fontSize: "10px",
  textAlign: "center",
};

const headerCell: React.CSSProperties = {
  ...cell,
  fontWeight: 600,
};

const leftCell: React.CSSProperties = {
  ...cell,
  textAlign: "left",
};

const VitalSignsAndMedicationsSheet: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        fontSize: "10px",
        color: "#000",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "12px",
        }}
      >
        <thead>
          <tr>
            <th style={headerCell}>Reading Date</th>
            <th style={headerCell}>Height</th>
            <th style={headerCell}>Weight</th>
            <th style={headerCell}>Temperature</th>
            <th style={headerCell}>Blood Pressur</th>
            <th style={headerCell}>Pulse Rate</th>
            <th style={headerCell}>Respiratory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cell}>24-08-2025 11:37</td>
            <td style={cell}>159 CM</td>
            <td style={cell}>61.5 Kgm</td>
            <td style={cell}>C</td>
            <td style={cell}>135/75 mmHg</td>
            <td style={cell}>76 MIN</td>
            <td style={cell}>20IB/MIN</td>
          </tr>
        </tbody>
      </table>

      <div
        style={{
          fontWeight: 700,
          marginBottom: "4px",
          fontSize: "12px",
        }}
      >
        Medications
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "12px",
        }}
      >
        <thead>
          <tr>
            <th style={headerCell}>Date</th>
            <th style={headerCell}>Product Name</th>
            <th style={headerCell}>Dosage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cell}>25-08-2025 18:28</td>
            <td style={leftCell}>ALPHAGAN EYE DROPS</td>
            <td style={leftCell}>
              One Drops Every 12 Hour For 10 Day For 10 Day
            </td>
          </tr>
          <tr>
            <td style={cell}>25-08-2025 18:27</td>
            <td style={leftCell}>PRED FORTE OPTH. SUSP</td>
            <td style={leftCell}>
              One Drops Every 6 Hour For 10 Day For 10 Day
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style={{
          fontWeight: 700,
          marginBottom: "4px",
          fontSize: "12px",
        }}
      >
        Sign &amp; Symptoms
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "12px",
        }}
      >
        <thead>
          <tr>
            <th style={headerCell} colSpan={2}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={leftCell} colSpan={2}>
              PCO OD
            </td>
          </tr>
          <tr>
            <td style={leftCell} colSpan={2}>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <div
        style={{
          fontWeight: 700,
          marginBottom: "4px",
          fontSize: "12px",
        }}
      >
        Other Services
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={headerCell}>Date</th>
            <th style={headerCell}>Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={leftCell}>&nbsp;</td>
            <td style={leftCell}>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VitalSignsAndMedicationsSheet;


