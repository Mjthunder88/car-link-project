require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();

const seed = require('./seed/seed')

const db = require("./database");
const {
  User,
  Car,
  Model,
  Manufacturer,
  Maintenance
} = require("./models/models");

const { SERVER_PORT } = process.env;

server.use(express.json());
server.use(cors());

const { register, login } = require('./controllers/auth')
const { getMake } = require('./controllers/make')
const { addVehicle } = require('./controllers/addVehicle')
const { displayVehicles } = require('./controllers/displayVehicles')
const { getVehicle } = require('./controllers/maintenance')



// Manufacturer.hasMany(Model, {
//     foreignKey: {
//         allowNull: false
//     }
// });
// Model.belongsTo(Manufacturer, {
//     foreignKey: {
//         allowNull: false
//     }
// });

Car.belongsTo(Manufacturer, {
    foreignKey: {
        allowNull: false
    }
});
// Car.belongsTo(Model, {
//     foreignKey: {
//         allowNull: false
//     }
// });
User.hasMany(Car, {
    foreignKey: {
        allowNull: false
    }
});
Car.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
});
Car.hasMany(Maintenance, {
  foreignKey: {
    allowNull: false
  }
})
Maintenance.belongsTo(Car, {
  foreignKey: {
    allowNull: false
  } 
})

//! Endpoints below

server.post('/register', register)
server.post('/login', login)
server.get('/get-makes', getMake)
server.post('/add-vehicle', addVehicle)
server.get('/get-vehicles/:userId', displayVehicles)
server.get('/vehicle-maintenance/:carId', getVehicle)

//! syncing for database below
db
.sync()
// .sync({force: true})
  .then(() => {
    // seed()
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
