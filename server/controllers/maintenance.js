const { Car } = require('../models/models')


module.exports = {
    getVehicle: async (req, res) => {
        const { carId } = req.params
        try {
            const vehicle =  await Car.findOne({where: {id: carId}})
            console.log(vehicle, ' ---------------HERE------------')
            if (vehicle) {
                res.status(200).send(vehicle)
            } else {
                res.status(400).send('No vehicle found')
            }
        } catch (err) {
            console.log(err)
        }
    }
}