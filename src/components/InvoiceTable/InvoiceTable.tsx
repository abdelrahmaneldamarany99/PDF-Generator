import React from "react";

/*
  Displays invoice items in a table format.
  Props:
    - data: array of items from invoice.items
*/
export default function InvoiceTable({ data }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
      <thead>
        <tr>
          {["Item No", "Package", "Gross", "Discount", "%", "Total", "VAT", "Net"].map(
            (h) => (
              <th
                key={h}
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "left",
                  background: "#f8f8f8"
                }}
              >
                {h}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td style={cell}>{row.item_no}</td>
            <td style={cell}>{row.package}</td>
            <td style={cell}>{row.gross}</td>
            <td style={cell}>{row.discount}</td>
            <td style={cell}>{row.discount_percent}%</td>
            <td style={cell}>{row.total}</td>
            <td style={cell}>{row.vat_amount}</td>
            <td style={cell}>{row.net}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const cell = {
  border: "1px solid #eee",
  padding: "8px"
};
