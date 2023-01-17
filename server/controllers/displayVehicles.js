const { Car, Manufacturer } = require('../models/models')

module.exports = {
    displayVehicles: async (req, res) => {
        try {
            const {userId} = req.params
            console.log(userId, "-----------HERE_-----------")
            const vehicles = await Car.findAll({
                include: [{
                    model: Manufacturer,
                }],
                where: {
                    userId: userId
                }
            })
            res.status(200).send(vehicles)
        } catch (err) {
            console.log(err)
            res.status(400).send('Error fetching vehicles')
        }
    }
}