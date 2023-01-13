const { DataTypes } = require("sequelize");

const db = require("../database");

module.exports = {
  User: db.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING({ length: 150 }),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING({ length: 100 }),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }),
  Car: db.define("car", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2022,
      validate: {
        min: 1920,
        max: 2030,
      },
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vin: {
      type: DataTypes.STRING({ length: 17 }),
      allowNull: false,
      unique: true,
    },
    transmission: {
      type: DataTypes.STRING({ length: 9 }),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(),
      allowNull: false
    }
  }),
  Model: db.define("model", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }),
  Manufacturer: db.define("manufacturer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }),
};
