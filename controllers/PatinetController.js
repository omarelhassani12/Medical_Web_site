const  Appointment = require('../models/Appointment');
const { Op } = require('sequelize');

// module.exports.createAppointment = async (req, res) => {
//   try {
//     const { date, time, id } = req.body;
//     console.log(req.body);

//     const appointment = await Appointment.create({
//       DateApp: date,
//       HourApp: time,
//       idPat: id,
//       idDoc: 54,
//     });

//     res.cookie('isMakeAppointment', true, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });

//     res.status(201).json({
//       result: appointment,
//       isSuccess: true,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       error: err.message || 'Failed to create appointment',
//     });
//   }
// };
 

module.exports.createAppointment = async (req, res) => {
  try {
    const { date, time } = req.body;

    const idPat = req.user.id;

    if (!idPat) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

     // Format the date and time for comparison in the database
     const formattedDate = new Date(date).toISOString().split('T')[0];
     const formattedTime = time;
 
     // Check if the selected date and time are available
     const existingAppointment = await Appointment.findOne({
       where: {
         DateApp: formattedDate,
         HourApp: formattedTime,
       },
     });

    if (existingAppointment) {
      return res.status(400).json({ error: 'This time slot is already booked. Please choose another time.' });
    }

    const appointment = await Appointment.create({
      DateApp: formattedDate,
      HourApp: formattedTime,
      idPat,
      idDoc: 93, // You may set the default doctor ID as needed
    });
    
    console.log(`DateApp: ${appointment.DateApp}`);
    console.log(`HourApp: ${appointment.HourApp}`);
    console.log(`idPat: ${appointment.idPat}`);
    console.log(`idDoc: ${appointment.idDoc}`);

    // res.cookie('isMakeAppointment', true, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });

    res.status(201).json({
      result: appointment,
      isSuccess: true,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err.message || 'Failed to create appointment',
    });
  }
};


module.exports.logout = (req, res) => {
  res.cookie('jwt', '' ,  {maxAge : 1} );
  res.redirect('/');
}        
    

   