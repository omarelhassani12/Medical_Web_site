const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');


function sanitizeFilename(filename) {
  const sanitizedFilename = filename.replace(/[_-]+/g, ':');
  return sanitizedFilename.replace(/[^a-zA-Z0-9:_-]/g, '_');
}

async function generateMedicalAppointmentPDF(req, res) {
  const userId = req.body.userId;

  const date = req.body.myDateInput;
  const time = sanitizeFilename(req.body.myTimeInput);
  const id = req.body.userIdInput;
  const formattedTime = time.replace(/(\d{2})(\d{2})-(\d{2})(\d{2})/, '$1:$2 - $3:$4');

  const pdfDir = path.join(__dirname, 'pdf');
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir);
  }

  try {
    // Fetch the username based on userId
    const username = await User.getUsernameById(id);

  const sanitizedFormattedTime = formattedTime.replace(/:/g, '_');

  const filename = path.join(pdfDir, `appointment_${username}_${date}_${sanitizedFormattedTime}.pdf`);

  // Set custom page size
  const doc = new PDFDocument({ size: 'A4' });
  const stream = fs.createWriteStream(filename);

  doc.pipe(stream);

  // Header: Clinic Name and Logo
  const clinicLogoPath = path.join(__dirname, '../public/favicon.png'); // Update with the actual path

  // Display the logo with spacing
  doc.image(clinicLogoPath, 50, 40, { width: 80 });

  // Add space before the text
  doc.moveDown(1);

  // Display the clinic name on the right side
  doc.fontSize(25).text("Cabinet Draae", { align: 'right' });

  doc.moveDown(2);
  doc.fontSize(22).text('Medical Appointment Rendez-vous', { align: 'center' });
  doc.moveDown(2);
  doc.fontSize(20).text(`Patient:${username}`);
  doc.fontSize(20).text(`Doctor: Dr.Draae`);
  doc.fontSize(20).text(`Date: ${date}`);
  doc.fontSize(20).text(`Time: ${formattedTime}`);



  // Draw a colored rectangle for the bottom section
const footerHeight = 200;
const bottomSectionY = doc.page.height - footerHeight;
doc.rect(0, bottomSectionY, doc.page.width, footerHeight).fill('#f0f0f0'); // Change color here

// Contact information section
const contactTextX = 50; // Adjusted to start from the left
const contactTextY = bottomSectionY + 40;

doc.fontSize(16).fillColor('black')
  .text('For inquiries, please contact us at:', contactTextX, contactTextY - 20, { align: 'center' });

// Contact information separated for clarity
const contactInfo = [
  'Email: info@modernclinic.com',
  'Phone: +1 (123) 456-7890',
  'Website: www.modernclinic.com'
];

const lineHeight = 15;

// Calculate the space between elements
const spaceBetween = 10;
doc.moveDown(10);

// Display each piece of contact information one next to the other with space between
contactInfo.forEach((info, index) => {
  doc.fontSize(12)
    .text(info, contactTextX, contactTextY + index * lineHeight + spaceBetween * index, { align: 'left' });
});

// Close the PDF document stream
doc.end();



  console.log('Generated filename:', filename);

  // Listen for the 'finish' event on the stream
  stream.on('finish', () => {
    console.log('PDF stream finished');
    // Set the Content-Disposition header here
    res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filename)}`);
    res.setHeader('Content-Type', 'application/pdf');

    // Start the download
    const fileStream = fs.createReadStream(filename);

    // Listen for the 'error' event on the fileStream
    fileStream.on('error', (err) => {
      console.error('Error reading PDF file:', err);
      res.status(500).send('Error reading PDF file');
    });

    // Pipe the fileStream to the response
    fileStream.pipe(res);
  });

  // Listen for the 'error' event on the stream
  stream.on('error', (err) => {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  });
} catch (error) {
  console.error('Error fetching username:', error);
  res.status(500).send('Error fetching username');
}
}


module.exports = generateMedicalAppointmentPDF;
