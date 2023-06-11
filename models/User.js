const { Sequelize , DataTypes} = require("sequelize");
const sqDB = require("../Config/Config") ;
const Appointment = require("./Appointment");
const bcrypt = require('bcrypt') ; 
const Message = require("./Message");
const User = sqDB.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // field must not be empty
        len: [3, 50], // field must have a length between 2 and 50
      }
    },
    role: {
      type : DataTypes.INTEGER,
      defaultValue: 3 ,   
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // field must not be empty
        len: [2, 50], // field must have a length between 2 and 50
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // field must be unique
      validate: {
        isEmail: true, // field must be a valid email address
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // field must not be empty
        len: [8, 20], // field must have a length between 6 and 50
       }
    },
    telephone: {
      type: DataTypes.STRING,
       validate: {
        len: 10, // field must have a length between 9 and 15
       }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    
    },
    cni: {
      type: DataTypes.STRING,
      unique : true,
      validate: {
        len: [6 , 20], // field must have a length between 9 and 15
       }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // set the default value to the current time
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },);

  //////////////////////////////// Association Types //////////////////////////////////
  User.hasMany(Appointment,
  { 
    foreignKey: 'idPat' ,
     onDelete: 'CASCADE', // Set onDelete option to CASCADE
  });
  Appointment.belongsTo(User, { foreignKey: 'idPat' });

  User.hasMany(Message, {
    foreignKey: 'idSender',
    onDelete: 'CASCADE',
  });
  Message.belongsTo(User, { foreignKey: 'idSender' });

  User.hasMany(Message, {
    foreignKey: 'idReceiver',
    onDelete: 'CASCADE',
  });
  Message.belongsTo(User, { foreignKey: 'idReceiver' });

  


// Create a hook to encrypt the password before saving to the database
User.beforeCreate(   (user , options) => {
     const salt =   bcrypt.genSaltSync(10);   
     console.log(salt.toString)   
     user.password =  bcrypt.hashSync(user.password, salt);
 })  

 User.beforeUpdate(async (user, options) => {
  if (user.changed('password')) {
    // Check if the password field has been modified
    const hashedPassword = await bcrypt.hash(user.password, 10); // Hash the new password
    user.password = hashedPassword; // Update the password field with the hashed value
  }
});

// static function
 User.authenticate = async function(email, password, callback) {
 const user = await User.findOne({ where: { email: email } })
    if (!user) {
      return callback(null, false);
    }

   else if (user) { 
    bcrypt.compare(password, user.password, function(err, res)
     {
      if (res) {
        return callback(null, user);
      } else {
        return callback(null, false);
      }
    });
 }
    else  return callback(err , false);

};


 User.login = (email , password)=>{
  return User.findOne({
    where: {
      email: email
    }
  }, (err , result)=>{
    if(err) throw err;
    if(!result) {
      return new Error('User not found ');
    }else {
      const isEqual = bcrypt.compareSync(password, result.password);
      if (isEqual) {
        return result ;
      } else {
        return new Error('Invalid password');
      }
    }
  })
}
  

module.exports = User;
 