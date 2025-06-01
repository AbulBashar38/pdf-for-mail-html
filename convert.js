const fs = require("fs");
const pdf = require("html-pdf-node");

const generatePDF = () => {
  const html = fs.readFileSync("twm.html", "utf8");
  const file = { content: html };
  const option = { format: "A4", orientation: "portrait" };
  pdf.generatePdf(file, option).then((pdfBuffer) => {
    fs.writeFileSync("twm-convert.pdf", pdfBuffer);
    console.log("PDF generated as twm.pdf");
  });
};

generatePDF();
