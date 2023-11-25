const express = require('express');
const generateMedicalAppointmentPDF = require('../controllers/TicketController'); // Update the path
const TicketRoutes = express.Router();

// Route handler for form submission
TicketRoutes.post('/generate-teckit', (req, res) => {
  generateMedicalAppointmentPDF(req, res); 
});

module.exports = TicketRoutes;
