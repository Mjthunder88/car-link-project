const {Manufacturer} = require('../models/models')


module.exports = {
    getMake: async (req, res) => {
        try {
            const makes = await Manufacturer.findAll()
            console.log(makes)
            if (!makes) {
                res.sendStatus(404)
            } else {
                res.status(200).send(makes)
            }
        } catch (err) {
            console.log(err)
            res.status(400).send("error getting makes")
        }
    }
}
