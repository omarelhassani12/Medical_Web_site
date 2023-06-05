const  Appointment = require('../models/Appointment');
const Sequelize = require('sequelize')

module.exports.Appointment =async (req , res) => {

    const { date , time , id} = req.body;
    console.log(req.body);
    const appointment = Appointment.build({
        DateApp : date,
        HourApp :  time ,
        idPat : id ,
        idDoc : 54
        });
        
        res.cookie('isMakeAppointment' , true , {httpOnly: true  , maxAge: 60 * 60 * 24 * 1000})

       await appointment.save().then((result) => {
        res.status(201).json({
            result , isSuccess : true
        });
          }).catch((err) => {
            console.log(err);
            res.status(400).json({
               err
            });
          })

        }
 
module.exports.logout = (req, res) => {
  res.cookie('jwt', '' ,  {maxAge : 1} );
  res.redirect('/');
}        
    

   