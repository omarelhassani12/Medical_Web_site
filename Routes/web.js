const express = require('express') ;
const RouteWeb = express.Router();
const UserController = require('../controllers/UserController');
const Middleware = require('../middleware/auth');
const PatinetController = require('../controllers/PatinetController');
const Appointment = require('../models/Appointment');
const Sequelize = require('sequelize');
const DoctorController = require('../controllers/DoctorController');
const calender = require('../public/calender.json');
const User = require('../models/User');
const { Op } = require('sequelize');
const ChatController = require('../controllers/ChatController');
RouteWeb.get('/', async( req, res)=> {
   
       res.render('index' , {calendar : calender});
});
RouteWeb.get('*' , Middleware.auth );

RouteWeb.post('/register', UserController.RegisterUser);

RouteWeb.get('/login', (req , res)=> {
    res.render('login');
});

RouteWeb.post('/login' , UserController.LoginUser)

RouteWeb.get('/' , (req , res)=> {
    res.redirect('index');
})
 

RouteWeb.get('/checkDays' ,async (req , res)=> {
    await Appointment.findAll({
        attributes: [
        [Sequelize.fn('DATE', Sequelize.col('DateApp')), 'date'],
        ],
        group: ['date'],
        having: Sequelize.literal('COUNT(*) >= 15'),
        // limit : 2
    }).then((result)=> {
         
         res.json({data : result , isSuccess : true});
    }).catch((err)=> console.log(err));
})
 
RouteWeb.get('/checkTimes/:DayCheck' , async (req, res)=> {
    const DayCheck = req.params.DayCheck;
    console.log(DayCheck)
    await Appointment.findAll({
        attributes: [
           'HourApp',
        ],
        where: {
          DateApp: DayCheck,
        },
        group: ['HourApp'],
        having: Sequelize.literal('COUNT(*) != 0'),
      }).then((result)=> { res.json({data : result , isSuccess : true});}).catch((err)=> console.log(err));
})

RouteWeb.post('/Appointment', PatinetController.Appointment);

RouteWeb.get('/logout', PatinetController.logout);

////////////////////////////// Chat Route //////////////////////////////

RouteWeb.get('/Chat' , ChatController.chat);

RouteWeb.get('/Chat/disc/:idsender/:idreceiver' , ChatController.getDisc);

RouteWeb.post('/Chat/sendMessage' , ChatController.storeMessage);


//////////////////////////////// Admin routes //////////////////////////////////

RouteWeb.get('/dashboard' , Middleware.isAdmin , DoctorController.index )

RouteWeb.delete('/appointments/:id/delete' ,  Middleware.isAdmin  , DoctorController.deleteApp  );

RouteWeb.get('/Doctors' ,  Middleware.isAdmin  , DoctorController.getDoctors)

RouteWeb.post('/admin-add-doctor',    DoctorController.addDoctor);

RouteWeb.delete('/API/Doctor/removeDoctor/:id' ,   DoctorController.deleteUser);

RouteWeb.delete('/API/Patients/ManyPatients' , DoctorController.DeleteManyPatients )

RouteWeb.put('/API/Doctor/edit/:id' ,  DoctorController.updateDoctor);

RouteWeb.get('/Patients' , DoctorController.getPatients);

RouteWeb.get('/Certificates' , DoctorController.getAllCertificates)


module.exports = RouteWeb