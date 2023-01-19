const { Car } = require("../models/models");

module.exports = {
  addVehicle: async (req, res) => {
    try {
      console.log(req.body, "in controller");
      const { year, mileage, vin, transmission, model, make, userId } =
        req.body;
      const manufacturerId = Number(make);
      const addedVehicle = await Car.create({
        year,
        mileage,
        vin,
        transmission,
        model,
        manufacturerId,
        userId,
      });
      res.status(200).send(addedVehicle);
    } catch (err) {
      console.log(err);
      res.status(400).send("Error when adding vehicle");
    }
  },
};
