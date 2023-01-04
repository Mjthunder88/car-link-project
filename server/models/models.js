const { DataTypes } = require('sequelize')

const db = require('../database')

module.exports = {
    User: db.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING({length: 150}),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING({length: 100}),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }),
    Car: db.define("car", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        year: {
            type: DataTypes.INTEGER({length: 4}),
            allowNull: false,
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vin: {
            type: DataTypes.STRING({length: 17}),
            allowNull: false
        },
        transmission: {
            type: DataTypes.STRING({length: 9}),
            allowNull: false
        }
    }),
    Users_car: db.define("users_car", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    }),
    Model: db.define("model", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    }),
    Manufacturer: db.define("manufacturer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}