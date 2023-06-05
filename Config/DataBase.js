// Use package mysql only but is not help me for develope just write query of string
 // Define your controller
 
// const connection = mysql.createConnection({
       
//             host:  process.env.HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASS,
//             database : process.env.DB_DATABASE

//     });
 

// connection.connect(function (err) {
//     if (err) throw console.log(err);
//     console.log('Connected to the database!');
// });

// function registerUser(data) {
//     connection.query('INSERT INTO User SET ?', data, function (error, results, fields) {
//         if (error) throw error;
//         console.log('Data inserted successfully!' , results, '\n' , fields);
//     });
//  }

// function closeConnection() {
//     connection.end(function (err) {
//         if (err) throw err;
//         console.log('Database connection closed!');
//     });
// }

// module.exports = { registerUser , connection};

const SeqDB = require('./Config') ;


SeqDB.authenticate().then(() => {
       console.log('is connect with successfuly');
}).catch(err => {
    console.log('errors are' , err);
})

 