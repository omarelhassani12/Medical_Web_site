const SeqDB = require('./Config') ;


SeqDB.authenticate().then(() => {
       console.log('is connect with successfuly');
}).catch(err => {
    console.log('errors are' , err);
})

 