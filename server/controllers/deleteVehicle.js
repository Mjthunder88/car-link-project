const { Car, Maintenance } = require("../models/models");

module.exports = {
  remove: async (req, res) => {
    try {
      const { carId } = req.params;
      const deletedVehicle = await Car.destroy({
        include: [
          {
            model: Maintenance,
          },
        ],
        where: { id: carId },
      });
      res.status(200).send("Car has been Deleted");
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
