import React, { useContext } from "react";
import { PDFContext } from "../../context/PDFContext";

const cellStyle: React.CSSProperties = {
  border: "1px solid #000",
  padding: "4px 6px",
  fontSize: "10px",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const headerCellStyle: React.CSSProperties = {
  ...cellStyle,
  fontWeight: 600,
};

const leftAlignCellStyle: React.CSSProperties = {
  ...cellStyle,
  textAlign: "left",
};

const sectionStyle: React.CSSProperties = {
  margin: "50px 0",
};
const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8,
  alignItems: "flex-start",
};
const labelStyle: React.CSSProperties = {
  fontWeight: 700,
  marginRight: 8,
};

const YagLaserPosteriorCapsulotomyOneEyePDF: React.FC = ({
  discount,
  gross,
  invoice_date,
  net,
  vat,

  bill_no,
  description,
  net_with_vat,
  qty,
  service_code,
  total,
  unit_price,
}) => {
  const { patientInvoice } = useContext(PDFContext);
  const { doctor } = patientInvoice[0];
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
          marginBottom: "8px",
        }}
      >
        <thead>
          <tr>
            <th style={headerCellStyle} colSpan={2}>
              Admission
            </th>
            <th style={headerCellStyle} colSpan={2}>
              Discharge
            </th>
            <th style={headerCellStyle}>Room No</th>
            <th style={headerCellStyle}>Length of Stay</th>
            <th style={headerCellStyle}>Consultant</th>
          </tr>
          <tr>
            <th style={headerCellStyle}>Date</th>
            <th style={headerCellStyle}>Time</th>
            <th style={headerCellStyle}>Date</th>
            <th style={headerCellStyle}>Time</th>
            <th style={cellStyle}></th>
            <th style={cellStyle}></th>
            <th style={cellStyle}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>{invoice_date}</td>
            <td style={cellStyle}>06:23</td>
            <td style={cellStyle}>{invoice_date}</td>
            <td style={cellStyle}>06:23</td>
            <td style={cellStyle}>
              bed0101
              <br />
              1st class
            </td>
            <td style={cellStyle}>
              0
              <br />
              Days
            </td>
            <td style={cellStyle}>
              OP
              <br />
              TAWFIK AL-TAISI
            </td>
          </tr>
        </tbody>
      </table>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "12px",
        }}
      >
        <thead>
          <tr>
            <th style={headerCellStyle}>Item No</th>
            <th style={headerCellStyle}>Package</th>
            <th style={headerCellStyle}>Gross</th>
            <th style={headerCellStyle}>Discount</th>
            <th style={headerCellStyle}>%</th>
            <th style={headerCellStyle}>Total</th>
            <th style={headerCellStyle}>Vat Amt</th>
            <th style={headerCellStyle}>Net</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>300056</td>
            <td style={leftAlignCellStyle}>
              YAG LASER POSTERIOR CAPSULOTOMY (ONE EYE)
            </td>
            <td style={cellStyle}>{gross}</td>
            <td style={cellStyle}>{discount}</td>
            <td style={cellStyle}>40%</td>
            <td style={cellStyle}>720.00</td>
            <td style={cellStyle}>{vat}</td>
            <td style={cellStyle}>{net}</td>
          </tr>
          <tr>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}>-</td>
          </tr>
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          border: "1px solid #000",
          padding: "8px",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            width: "140px",
            height: "140px",
            border: "1px solid #000",
            marginRight: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "8px",
          }}
        >
          QR
        </div>
        <div style={{ flex: 1 }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "8px",
            }}
          >
            <thead>
              <tr>
                <th style={headerCellStyle}>Gross</th>
                <th style={headerCellStyle}>Discount</th>
                <th style={headerCellStyle}>%</th>
                <th style={headerCellStyle}>Total</th>
                <th style={headerCellStyle}>Vat Amt</th>
                <th style={headerCellStyle}>pat_share</th>
                <th style={headerCellStyle}>Net Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>{gross}</td>
                <td style={cellStyle}>{discount}</td>
                <td style={cellStyle}>40%</td>
                <td style={cellStyle}>720.00</td>
                <td style={cellStyle}>{vat}</td>
                <td style={cellStyle}>.00</td>
                <td style={cellStyle}>{net}</td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              textAlign: "center",
              fontSize: "10px",
              marginTop: "4px",
            }}
          >
            Eight Hundred Twenty-Eight (Saudi Riyal)
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          fontSize: "10px",
        }}
      >
        <div style={{ flex: 1, marginRight: "40px" }}>
          <span>Patient Nam</span>
          <span
            style={{
              display: "inline-block",
              borderBottom: "1px solid #000",
              minWidth: "160px",
              marginLeft: "8px",
            }}
          ></span>
        </div>
        <div style={{ flex: 1 }}>
          <span>Doctor</span>
          <span
          // style={{
          //   display: "inline-block",
          //   borderBottom: "1px solid #000",
          //   minWidth: "160px",
          //   marginLeft: "8px",
          // }}
          >
            {doctor}
          </span>
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Total:</span>
            <span>{total}</span>
          </div>
          <div>
            <span style={labelStyle}>VAT:</span>
            <span>{vat}</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Description:</span>
            <span>{description}</span>
          </div>
          <div>
            <span style={labelStyle}>Bill number:</span>
            <span>{bill_no}</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Discount:</span>
            <span>{discount}</span>
          </div>
          <div>
            <span style={labelStyle}>Gross:</span>
            <span>{gross}</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Invoice date:</span>
            <span>{invoice_date}</span>
          </div>
          <div>
            <span style={labelStyle}>Net:</span>
            <span>{net}</span>
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <span style={labelStyle}>Net with Vat:</span>
            <span>{net_with_vat}</span>
          </div>
        </div>
      </div>
      <hr style={{ margin: "100px 0" }} />
    </div>
  );
};

export default YagLaserPosteriorCapsulotomyOneEyePDF;
