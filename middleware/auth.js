const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.auth = (req , res , next) => {

    const token = req.cookies.jwt ;
    const isMakeAppointment = req.cookies.isMakeAppointment ;

    if (token) {
        jwt.verify(token , 'secret key hash payload' ,async (err , decodeToken) =>{
            if (err) {
                res.locals.user = null ;
                next()
            }else 
               { 
                const user = await User.findOne({where : {id : decodeToken.id}}) ;
                user.isMakeApp = isMakeAppointment ;
                res.locals.user = user ; 
                 next();
            }
        })
    }else {
        res.locals.user = null ;
        next()
    }
}

module.exports.isAdmin = (req, res, next) => {
    const user = res.locals.user; // Assuming you have stored the user information in res.locals.user
    console.log(user);
    const Token = req.cookies.jwt ;
    if (user) {
      console.log(user.id);
      if (user.role == 1 || user.role == 2) {
      next(); // User is an admin, proceed to the next middleware or route handler
    } else {
      res.redirect('back'); // User is not an admin, redirect to the index page (or any other page you want)
    }
    } else       res.redirect('/'); // User is not an admin, redirect to the index page (or any other page you want)


  };
  

module.exports.setTitleMiddleware = (req, res, next) => {
    // Set the title property in res.locals
    res.locals.title = 'Your Page Title';
    next(); // Call the next middleware
  };