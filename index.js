const express = require('express') ;
const app = express();
const cors = require('cors');
const ejs = require ('ejs');
const path = require('path') ;
const http = require('http');
const server = http.createServer(app) ;
const { Server } = require('socket.io') ;
const io = new Server(server) ; 
const favicon = require('serve-favicon');
const dotenv = require('dotenv');
const cookiesParser = require('cookie-parser');
dotenv.config ({path : path.join(__dirname, './.env')});
const  bodyParser = require('body-parser');
const RouterWeb = require('./Routes/web');
const Middleware = require('./middleware/auth');
  
const PORT = process.env.PORT ?? 3306  ;

app.use(cors());
app.use(bodyParser.json()) ;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.urlencoded({extended : true , limit: '25mb'})) ;
app.use(cookiesParser()) ; 
  

   var client = {}

  io.on('connection', (socket) =>{
    let idnewClient = socket.handshake.query.idSender ;
    client[idnewClient] = socket ;
    console.log('connect : ' + idnewClient) ;
    socket.on('/message' , (message) =>{
       if (client[message.idReceiver]) {
        client[message.idReceiver].emit('/receiver', message)
      }else {
        console.log("User not exist : " + message.idReceiver);
      }
    })
})
 
  server.listen(PORT ,  ()=>{
    console.log('http://localhost:'+PORT ); 
    });   

app.get('*' , Middleware.auth)
app.use('/' ,RouterWeb);
