require("dotenv").config();
const { SECRET } = process.env;

const { User } = require("../models/models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (email, id) => {
  return jwt.sign(
    {
      email,
      id,
    },
    SECRET,
    {
      expiresIn: "20m",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { email, firstName, lastName , password } = req.body;
      const foundUser = await User.findOne({ where: { email: email } });
      if (foundUser) {
        res.status(400).send("An account with this email already exsists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: hash,
        });
        console.log(newUser);
        const token = createToken(
          newUser.dataValues.email,
          newUser.dataValues.id
        );
        res.status(200).send({
          email: newUser.dataValues,
          userId: newUser.dataValues.id,
          token: token,
        });
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
