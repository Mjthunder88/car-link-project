const { Maintenance } = require("../models/models");

module.exports = {
  removeService: async (req, res) => {
    try {
      const { serviceId } = req.params;
      const deleted = await Maintenance.destroy({ where: { id: serviceId } });
      res.status(200).send("Service has been deleted");
    } catch (err) {
      console.log(err);
      res.sendStaus(400);
    }
  },
};
