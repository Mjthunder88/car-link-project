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

const { PORT } = process.env;

server.use(express.json());
server.use(cors());

server.use(express.static(path.resolve(__dirname, "../build")));

const { register, login } = require('./controllers/auth')
const { getMake } = require('./controllers/make')
const { addVehicle } = require('./controllers/addVehicle')
const { displayVehicles } = require('./controllers/displayVehicles')
const { getVehicle, addMaintenance, services  } = require('./controllers/maintenance')
const { remove } = require('./controllers/deleteVehicle')
const { update } = require('./controllers/editVehicle')
const { getService, updateService } = require('./controllers/editService')
const { removeService } = require('./controllers/deleteService')



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
server.post('/add-maintenance/:carId', addMaintenance)
server.get('/get-services/:carId', services)

server.delete('/delete-vehicle/:carId', remove)
server.put('/update-vehicle/:carId', update)

server.get('/edit-service/:serviceId', getService)
server.put('/update-service/:serviceId', updateService)
server.delete('/delete-service/:serviceId', removeService)

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

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

server.listen( PORT, () => console.log(`Server running on ${PORT}`));
