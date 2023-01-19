const { Car } = require("../models/models");

module.exports = {
  update: async (req, res) => {
    try {
      const { year, mileage, vin, transmission, make, model } = req.body;
      const { carId } = req.params;
      const updatedVehicle = await Car.update(
        {
          year,
          mileage,
          vin,
          transmission,
          model,
          manufacturerId: make,
        },
        { where: { id: carId } },
        { returning: true }
      );
      res.status(200).send(updatedVehicle);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
