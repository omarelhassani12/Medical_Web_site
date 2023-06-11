const connectSqDB = require('../Config/DataBase');
const User = require('../models/User');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const calender = require('../public/calender.json');
const Certificate = require('../models/Certificate');
const Experiance = require('../models/Experiance');

const index = async( req, res)=> {
   const certificates = await Certificate.findAll();
   const experiances =  await Experiance.findAll();
  res.render('index' , {calendar : calender , Certificats : certificates , Exps : experiances});
}
const  handeller  = (error)=>{

          // return e.message.replace('Validation ' , '' )  ;

    err = { 
          email : '',
          password : '' ,
          tele : '',
          firstName : '',
          lastName : '' ,
          cni : '' ,
        }
 
        if (error instanceof Sequelize.ValidationError) {
          error.errors.forEach((error) => {
            switch (error.validatorKey) {
              case 'notEmpty': 
                if (error.path === 'firstName') {
                  err.firstName = 'Your First Name Should be have minimum 8 Characters';
                } else if (error.path === 'lastName') {
                  err.lastName = 'Your Last Name Should be have minimum 5 Characters';
                }
                break;
              case 'len':
                if (error.path === 'firstName') {
                  err.firstName = 'Your First Name Should be have minimum 3 Characters';
                } else if (error.path === 'lastName') {
                  err.lastName = 'Your Last Name Should be have minimum 10 Characters';
                } else if (error.path === 'password') {
                  err.password = 'Your Password Should be have minimum 10 Characters';
                } else if (error.path === 'telephone' || error.path === 'cni') {
                  err[error.path] = `Your ${error.path} Should be have minimum 10 Characters`;
                }
                break;
              case 'isEmail':
                if (error.path === 'email') {
                  err.email = 'Your Email Has already Registered';
                }
                break;
                
              
              default:
                if (error.message === 'email must be unique') {
                  err.email = 'Email already exists';
                }else if (error.message === 'cni must be unique') {
                  err.cni = 'CNI already exists';
                }else console.log(error.message);

            }
          });
        }
        
        
      return err ;
    }

const RegisterUser = (req , res )=>{ 
    
       
    var { phone  } = req.body;
    const { email , password , cni , lastName , firstName ,address} = req.body;
     phone = phone != '' ? phone : null ;
    const user =   User.build({
        firstName: firstName,
        lastName: lastName,
        telephone: phone ,
        email: email,
        password: password,
        cni : cni ,
        address : address,
      });
       
      user.validate().then(() => {

        user.save().then(() => {
        res.json({user});
        console.log('User saved' , {user} )

        }).catch((err) => {
          console.log(err)
          const errors = handeller(err);
          res.json({errors});  
        });

     }).catch((err) => {

      const errors = handeller(err);
      res.json({errors});     
        
    });
    // User.findAll().then((user) => {
    //   res.json({user});
    // }).catch((err) => console.log('err'));
}
const maxAge =  60 * 60 * 24 ;

const createToken = (id) =>{
  return jwt.sign({ id } , 'secret key hash payload' , {
    expiresIn : maxAge
  });
}

const LoginUser =async (req, res )=>{

    const { email , password } = req.body;
 
   
// Call the static method
User.authenticate(email, password, function(err, user) {
  if (err) {
    console.error(err);
  } else if (!user) {
    res.json({error : 'Invalid username or password'});
  } else {
    const token = createToken(user.id);
     
    res.cookie('jwt', token , { httpOnly: true  , maxAge: maxAge * 1000});

    res.json({user});
  }
});    
 
    
}


module.exports = {RegisterUser , handeller , index , LoginUser};