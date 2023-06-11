const { param } = require('../Routes/web');
const Appointment = require('../models/Appointment');
const Certificate = require('../models/Certificate');
const Experiance = require('../models/Experiance');
const User = require('../models/User');
const Sequelize = require('sequelize');
const { handeller } = require('./UserController');
const bcrypt = require('bcrypt') ; 
const sqDB = require("../Config/Config") ;

const index = (req, res) => {
  // Perform the join and fetch the appointments along with the associated patients (users with role 3)
  Appointment.findAll({
    include: [
      {
        model: User,
        attributes: ['firstName', 'lastName', 'telephone'],
        where: {
          role: 3 // Filter users with role 3
        }
      }
    ],
    attributes: ['id', 'DateApp', 'HourApp'],
    order: [['DateApp', 'ASC']],
    // raw: true // Return raw data
  })
    .then(appointments => {
      // Count the number of users by role
      return User.findAll({
        attributes: ['role', [Sequelize.fn('COUNT', Sequelize.col('role')), 'count']],
        group: ['role'],
        raw: true // Return raw data
      })
        .then(counts => {
          // Handle the retrieved appointments and user counts
          res.render('Dashboard/index', {
            appointments: appointments,
            userCounts: counts
          });
        })
        .catch(error => {
          // Handle any errors that occur during the count
          console.error('Error counting users:', error);
        });
    })
    .catch(error => {
      // Handle any errors that occur during the retrieval of appointments
      console.error('Error retrieving appointments:', error);
    });
};


const deleteApp = async(req, res) => {
  console.log(req.params);
  try {
      const app = await Appointment.findByPk(req.params.id);
      if(app){
       await app.destroy();
       res.status(200).json({success : true});
      }else {
        res.status(404).json({success : false});
      }
  } catch (error) {
      console.log(error.message);
  }

}

const getDoctors = (req, res) => {
  User.findAll({
    where: {
      role: 1
    }
  })
    .then(doctors => {
      res.render('Dashboard/Doctors', { doctors });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
};


const addDoctor = async (req, res) => {
  const { firstName, lastName, tele, cni, email, address, password } = req.body;
  console.log(req.body);
  // Create a new doctor record in the database
 await User.create({
    firstName: firstName,
    lastName: lastName,
    telephone: tele,
    cni: cni,
    email: email,
    address: address,
    password: password,
    role: 1 // Assuming 1 represents the role for doctors
  })
    .then(doctor => {
      // Doctor created successfully
      res.status(200).json({success : true});
    })
    .catch(error => {
     const err = handeller(error);
     res.status(500).json({success : false , error : err})
    });
};




const deleteUser = (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a parameter
  console.log(userId);
  User.destroy({
    where: {
      id: userId
    }
  })
    .then(() => {
      res.status(200).json({success : true});
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({success : false});
    });
};

const DeleteManyPatients = async (req ,res )=> {
  try {
    // Create a Sequelize transaction for atomicity
    const transaction = await sqDB.transaction();

    // Delete the users based on their IDs
     await User.destroy({
      where: {
        id: {
          [Sequelize.Op.in]: req.body.ids
        }
      },
      transaction
    });

    // Commit the transaction
    await transaction.commit();
  

    // Send a response to the client
    res.status(200).json({
      success: true,
      message: `Patients successfully removed.`
    });

  } catch (error) {
    // Rollback the transaction if an error occurs
    if (transaction) {
      await transaction.rollback();
    }

    // Send an error response to the client
    res.status(500).json({
      success: false,
      message: 'Failed to remove users.'
    });
  
  }
}

const updateDoctor =async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a parameter
  console.log(req.body, userId);
  
  try {
    await User.update(
      {
        // Set all the attributes you want to update based on the req.body fields
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        telephone: req.body.tele,
        address: req.body.address,
        cni: req.body.cni,
        password:  req.body.password , // Hash the password before updating
      },
      {
        where: {
          id: userId,
          role: 1, // Condition to match users with role 1
        },
        individualHooks: true
      }
    );
  
    res.status(200).json({ success: true, message: 'User updated successfully' });
  } catch (error) {
    const err = handeller(error);
    console.error(error);
    res.status(500).json({ success: false, error : err });
  }
  
};

const getPatients =async (req, res) => {
  await User.findAll({
    where: {
      role: 3 // Condition to match users with role 3
    }
  })
    .then(patients => {
      res.render('Dashboard/Patients' , { Patients : patients});
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
};

 
const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.findAll();
    res.status(200).render('Dashboard/Certificat', {Certificats : certificates})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const CreateCertficate = async ( req ,res ) =>{

    try {
      const cert =  await Certificate.create({
        NameCertificate : req.body.Deplome ,
        SourceCertificate : req.body.source ,
        DateCertificate : req.body.dateCer
      })

      res.status(200).json({success : true}) ;
    } catch (error) {
      res.status(400).json({success : false}) ;
    }
}


const DeleteDeploma = async ( req, res ) => {
    console.log(req.params.id) ;
  try {
        const deplomaDeleted = await Certificate.destroy({
      where : { id : req.params.id}
    })
    res.status(200).json({success : true})
  } catch (error) {
    res.status(400).json({success : false})

  }
}

const getAllExp = async (req, res) => {

  try {
    const Exps = await Experiance.findAll() ;
    console.log(Exps.length)
    res.render('Dashboard/Experiances', {
      exps : Exps
    })
  } catch (error) {
    console.log(error)
  }
}

const AddExp = async (req, res) => {
  console.log(req.body);
  try {
    const exp = await Experiance.create({
       labelExperiance : req.body.label ,
       descriptionExperiance :req.body.description ,
       DateStart : req.body.dateStart ,
       DateEnd : req.body.dateEnd
    })
    res.status(200).json({success : true})
  } catch (error) {
    console.log(error)
    res.status(400).json({success : false})
  }
}
 
const DeleteExp = async (req, res) => {
    console.log(req.params.id , 'deleteExp')
    try {
      await Experiance.destroy({
        where : {
          id : req.params.id
        }
      })
      res.status(200).json({success : true});
    } catch (error) {
      res.status(400).json({success : false})
    }

}


// Next methods not implemented yet please implement them in client-side

const getSecretaires = async (req, res) => {
  try {
    const secretaires = await User.findAll({ where: { role: 2 } }); // Find all users with role 2

    res.render('secretaires', { secretaires }); // Render the view with the retrieved secretaires
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

const deleteSecretaire = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the ID of the secretary to delete is passed in the URL parameters

    // Delete the secretary by ID
    const deletedSecretaire = await User.destroy({ where: { id, role: 2 } });

    if (deletedSecretaire) {
      res.status(200).send('Secretary deleted successfully');
    } else {
      res.status(404).send('Secretary not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

const updateSecretaire = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the ID of the secretary to update is passed in the URL parameters
    const { firstName, lastName, telephone } = req.body; // Assuming the updated data is passed in the request body

    // Update the secretary by ID
    const updatedSecretaire = await User.update(
      { firstName, lastName, telephone },
      { where: { id, role: 2 } }
    );

    if (updatedSecretaire[0]) {
      res.status(200).send('Secretary updated successfully');
    } else {
      res.status(404).send('Secretary not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

const addSecretaire = async (req, res) => {
  try {
    const { firstName, lastName, telephone } = req.body; // Assuming the secretary's data is passed in the request body

    // Create the secretary
    const createdSecretaire = await User.create({
      firstName,
      lastName,
      telephone,
      role: 2 // Assuming role 2 represents the secretary role
    });

    res.status(201).json(createdSecretaire);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};




module.exports = {
  index,
  deleteApp,
  getDoctors,
  AddExp,
  CreateCertficate,
  getAllCertificates,
  addDoctor,
  deleteUser,
  getAllExp ,
  DeleteManyPatients,
  updateDoctor,
  DeleteExp,
  getPatients,
  getSecretaires,
  deleteSecretaire,
  updateSecretaire,
  DeleteDeploma,
  addSecretaire
};
 

