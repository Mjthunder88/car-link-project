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
            type: DataTypes.STRING({length: 255}),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING({length: 255}),
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
        user_id: {
            type: DataTypes.INTEGER,
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
    })
}