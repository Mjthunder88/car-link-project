const { Car, Manufacturer, Maintenance } = require("../models/models");

module.exports = {
  getVehicle: async (req, res) => {
    try {
      const { carId } = req.params;
      const vehicle = await Car.findOne({
        include: [
          {
            model: Manufacturer,
          },
        ],
        where: { id: carId },
      });
      //   console.log(vehicle, " ---------------HERE------------");
      if (vehicle) {
        res.status(200).send(vehicle);
      } else {
        res.status(400).send("No vehicle found");
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("Error fetching car");
    }
  },
  addMaintenance: async (req, res) => {
    const { service, date, mileage, notes } = req.body;
    const { carId } = req.params;
    console.log(carId, "---------HERE_---------------");
    try {
      const maintenance = await Maintenance.create({
        service,
        date,
        mileage,
        notes,
        carId,
      });
      res.status(200).send(maintenance);
    } catch (err) {
      console.log(err);
    }
  },
  services: async (req, res) => {
    try {
      const { carId } = req.params;
      const serviceList = await Maintenance.findAll({ where: { carId: carId } });
      console.log(serviceList, "---------HERE-------");
      res.status(200).send(serviceList);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
