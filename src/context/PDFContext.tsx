import { createContext, useEffect, useState } from "react";

export const PDFContext = createContext<any>(null);

export default function PDFContextProvider({ children }) {
  const [state, setState] = useState({});

  const API_URL =
    // "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/patient_episode_invoice_report?authorization=1261656&organization_no=08&patient_file_no=0369144&episode_invoice_no=I0825/0000065S&episode_no=13&planguageid=1";
    "http://136.243.62.235:9090/ords/exsys_api/hs_pb_episode_invoices/patient_episode_invoice_report?authorization=1261656&organization_no=08&patient_file_no=0369144&episode_invoice_no=I0825/0000111&episode_no=14&planguageid=1";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setState(json);
    };
    fetchData();
  }, []);

  return (
    <PDFContext.Provider value={{ ...state, setState }}>
      {children}
    </PDFContext.Provider>
  );
}
