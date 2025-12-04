import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "./vfs_fonts";

pdfMake.vfs = vfsFonts;

export const fonts = {
  Amiri: {
    normal: "Amiri-Regular.ttf",
    bold: "Amiri-Regular.ttf",
    italics: "Amiri-Regular.ttf",
    bolditalics: "Amiri-Regular.ttf",
  },
};
