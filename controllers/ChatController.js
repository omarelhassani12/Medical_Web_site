const Message = require('../models/Message');
const User = require('../models/User');
const { Op } = require("sequelize");


const chat = async (req, res) => {
  try {
    const currentUserId = res.locals.user.id; // Assuming you have the current user's ID available in the 'req.user.id' property
    // Retrieve users with different IDs than the current user
    const users = await User.findAll({
      where: {
        id: {
          [Op.ne]: currentUserId // Exclude the current user's ID from the query
        }
      }
    });
    // Render the 'chat' view and pass the 'users' data to it
    res.status(200).render('chat', { users : users });
  } catch (error) {
    // Handle the error, e.g., by sending an error response
    res.status(500).send('Error retrieving users');
  }
};


// Function to get all messages between users based on their IDs, ordered by the last message
const getDisc = async (req, res) => {

    // Perform the necessary logic to fetch all messages between the users with the provided IDs
  // You can use the Message model defined above to query the database

  // Example query using Sequelize
  try {
    const  idsender   = req.params.idsender ; 
    const idreceiver = req.params.idreceiver ;
    const ids =[idsender , idreceiver] ;
    const messages = await Message.findAll({
      where: {
        idSender: ids,
        idReceiver: ids
      },
      order: [['dateMessage', 'ASC']] // Order the messages by the dateMessage column in descending order
    });
    console.log(messages);
    // Return the messages to the client or perform any other necessary actions
    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while retrieving messages' });
  }
};

const storeMessage = async (req , res ) =>{
    
   try {
   const message =  await Message.create({
      idSender : req.body.idSender,
      idReceiver : req.body.idReceiver ,
      content : req.body.content ,
    })
     res.status(200).json({succes : true})
  } catch (error) {
    console.log(error);
  }
}
module.exports = { chat ,storeMessage , getDisc}