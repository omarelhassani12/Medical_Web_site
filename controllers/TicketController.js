const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function sanitizeFilename(filename) {
  return filename.replace(/[^a-zA-Z0-9-_]/g, '_');
}

function generateMedicalAppointmentPDF(req, res) {
  const userId = req.body.userId;
  const date = req.body.myDateInput;
  const time = sanitizeFilename(req.body.myTimeInput); // Sanitize the time value

  const pdfDir = path.join(__dirname, 'pdf'); // Path to the pdf directory
  const filename = path.join(pdfDir, `appointment_${userId}_${date}_${time}.pdf`);

  const doc = new PDFDocument();
  const stream = fs.createWriteStream(filename);

  doc.pipe(stream);

  // Header: Clinic Name and Logo
  const clinicLogoPath = path.join(__dirname, '../public/favicon.png'); // Update with the actual path

  // Display the logo with spacing
  doc.image(clinicLogoPath, 50, 40, { width: 80 });

  // Add space before the text
  doc.moveDown(1);



  // Display the clinic name on the right side
  doc.fontSize(16).text("Cabinet Name", 100, doc.y, { align: 'right' });



 doc.moveDown(2);
 doc.fontSize(18).text('Medical Appointment Rendez-vous', { align: 'center' });
 doc.moveDown();
 doc.fontSize(14).text(`Patient:`);
 doc.fontSize(14).text(`Doctor: `);
 doc.fontSize(14).text(`Date: `);
 doc.fontSize(14).text(`Time: `);

 doc.moveTo(50, doc.page.height - 100)
   .lineTo(doc.page.width - 50, doc.page.height - 100)
   .strokeColor('#ccc').stroke();

 doc.fontSize(10).text('For inquiries, please contact us at:')
   .moveDown(0.5).text('Email: info@modernclinic.com')
   .text('Phone: +1 (123) 456-7890')
   .text('Website: www.modernclinic.com');
  
  // Position the footer at the bottom of the page
  const footerHeight = 40;
  doc.moveTo(0, doc.page.height - footerHeight).lineTo(doc.page.width, doc.page.height - footerHeight).stroke();

  // Close the PDF document stream
  doc.end();

  stream.on('finish', () => {
    // Set the Content-Disposition header here
    res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filename)}`);
    res.setHeader('Content-Type', 'application/pdf');

    // Start the download
    const fileStream = fs.createReadStream(filename);
    fileStream.pipe(res);
  });

  stream.on('error', (err) => {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  });
}

module.exports = generateMedicalAppointmentPDF;

   