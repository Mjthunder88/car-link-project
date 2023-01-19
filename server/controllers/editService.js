const { Maintenance } = require("../models/models");

module.exports = {
  getService: async (req, res) => {
    try {
      const { serviceId } = req.params;
      const service = await Maintenance.findOne({
        where: { id: serviceId },
      });
      res.status(200).send(service);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  updateService: async (req, res) => {
    try {
      const { serviceId } = req.params;
      const { service, date, mileage, notes } = req.body;
      const updated = await Maintenance.update(
        {
          service,
          date,
          mileage,
          details: notes,
        },
        { where: { id: serviceId } },
        { returning: true }
      );
      res.status(200).send(updated)
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
