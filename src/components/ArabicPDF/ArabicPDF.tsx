import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import amiri from "../../pdf/Amiri-Regular.ttf";
// import amiri from "../../pdf/Amiri-Regular.ttf?base64";

var pdfFonts = {
  pdfMake: {
    vfs: {
      "Amiri-Regular.ttf": amiri,
    },
  },
};

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

const ArabicPDF = () => {
  const generatePDF = () => {
    const fonts = {
      Amiri: {
        normal: "Amiri-Regular.ttf",
        bold: "Amiri-Regular.ttf",
        italics: "Amiri-Regular.ttf",
        bolditalics: "Amiri-Regular.ttf",
      }
    };

    const arabicText = "مرحباً بك في نظام التقارير — النص العربي لازم يظهر مضبوط!";

    const docDefinition = {
      content: [
        {
          text: arabicText,
          font: "Amiri",
          fontSize: 18,
          alignment: "right",
        }
      ],
      defaultStyle: {
        font: "Amiri",
      }
    };

    pdfMake.createPdf(docDefinition, undefined, fonts).open();
  };

  return (
    <button onClick={generatePDF}>
      Generate Arabic PDF
    </button>
  );
};

export default ArabicPDF;
