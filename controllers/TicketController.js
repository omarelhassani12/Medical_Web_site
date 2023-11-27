const PDFDocument = require('pdfkit');
const path = require('path');
const User = require('../models/User');

async function generateMedicalAppointmentPDF(req, res) {
  const date = req.body.myDateInput;
  const time = req.body.myTimeInput;
  const id = req.body.userIdInput;

  try {
    const username = await User.getUsernameById(id);
    const now = new Date();
    const currentTime = `${now.getHours()}_${now.getMinutes()}`;

    const doc = new PDFDocument({ size: 'A4' });
    res.setHeader('Content-Disposition', `attachment; filename=appointment_${username}_${date}_${currentTime}.pdf`);
    res.setHeader('Content-Type', 'application/pdf');
    doc.pipe(res);
    const clinicLogoPath = path.join(__dirname, '../public/favicon.png'); 
    doc.image(clinicLogoPath, 50, 40, { width: 80 });
    doc.moveDown(1);
    doc.fontSize(25).text("Cabinet Draae", { align: 'right' });
    doc.moveDown(2);
    doc.fontSize(22).text('Medical Appointment Rendez-vous', { align: 'center' });
    doc.moveDown(2);
    doc.fontSize(20).text(`Patient: ${username}`);
    doc.fontSize(20).text(`Doctor: Dr.Draae`);
    doc.fontSize(20).text(`Date: ${date}`);
    doc.fontSize(20).text(`Time: ${time}`);

    const footerHeight = 200;
    const bottomSectionY = doc.page.height - footerHeight;
    doc.rect(0, bottomSectionY, doc.page.width, footerHeight).fill('#f0f0f0'); 
    const contactTextX = 50; 
    const contactTextY = bottomSectionY + 40;
    doc.fontSize(16).fillColor('black')
      .text('For inquiries, please contact us at:', contactTextX, contactTextY - 20, { align: 'center' });
    const contactInfo = [
      'Email: info@draaeclinic.com',
      'Phone: +212 669-918003',
      'Website: www.draaeclinic.com'
    ];

    const lineHeight = 15;
    const spaceBetween = 10;
    doc.moveDown(10);
    contactInfo.forEach((info, index) => {
      doc.fontSize(12)
        .text(info, contactTextX, contactTextY + index * lineHeight + spaceBetween * index, { align: 'left' });
    });
    doc.end();
  } catch (error) {
    console.error('Error fetching username:', error);
    res.status(500).send('Error fetching username');
  }
}

module.exports = generateMedicalAppointmentPDF;
