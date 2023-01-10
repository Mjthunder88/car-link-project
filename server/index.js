require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();

const db = require("./database");
const {
  User,
  Car,
  Model,
  Manufacturer,
} = require("./models/models");

const { SERVER_PORT } = process.env;

server.use(express.json());
server.use(cors());

const { register, login } = require('./controllers/auth')



Manufacturer.hasMany(Model, {
    foreignKey: {
        allowNull: false
    }
});
Model.belongsTo(Manufacturer, {
    foreignKey: {
        allowNull: false
    }
});

Car.belongsTo(Manufacturer, {
    foreignKey: {
        allowNull: false
    }
});
Car.belongsTo(Model, {
    foreignKey: {
        allowNull: false
    }
});
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

//! Endpoints below

server.post('/register', register)
server.post('/login', login)

//! syncing for database below
db
.sync()
// .sync({force: true})
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

server.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
