const make = [
    {
        name: "Acura"
    }, 
    {
        name: "Afeela"
    },
    {
        name: "Alfa Romeo"
    },
    {
        name: "Audi"
    },
    {
        name: "BMW"
    },
    {
        name: "Bently"
    },
    {
        name: "Buick"
    },
    {
        name: "Cadillac"
    },
    {
        name: "Chevrolet"
    },
    {
        name: "Chrysler"
    },
    {
        name: "Doge"
    },
    {
        name: "Fiat"
    },
    {
        name: "Fisker"
    },
    {
        name: "Ford"
    },
    {
        name: "GMC"
    },
    {
        name: "Genesis"
    },
    {
        name: "Honda"
    },
    {
        name: "Hyundai"
    },
    {
        name: "Infiniti"
    },
    {
        name: "Jaguar"
    },
    {
        name: "Jeep"
    },
    {
        name: "Kia"
    },
    {
        name: "Land Rover"
    },
    {
        name: "Lexus"
    },
    {
        name: "Lincoln"
    },
    {
        name: "Lotus"
    },
    {
        name: "Lucid"
    },
    {
        name: "Maserati"
    },
    {
        name: "Mazda"
    },
    {
        name: "Mercedes-Benz"
    },
    {
        name: "Mercury"
    },
    {
        name: "Mini"
    },
    {
        name: "Mitsubishi"
    },
    {
        name: "Nissan"
    },
    {
        name: "Polestar"
    },
    {
        name: "Pontiac"
    },
    {
        name: "Porshe"
    },
    {
        name: "Ram"
    },
    {
        name: "Rivian"
    },
    {
        name: "Rolls-Royce"
    },
    {
        name: "Saturn"
    },
    {
        name: "Scion"
    },
    {
        name: "Smart"
    },
    {
        name: "Subaru"
    },
    {
        name: "Suzuki"
    },
    {
        name: "Tesla"
    },
    {
        name: "Toyota"
    },
    {
        name: "Volkswagen"
    },
    {
        name: "Volvo"
    },
]

const seed = async () => {
    const {Manufacturer, Model} = require('../models/models')
    await Manufacturer.bulkCreate(make)
    await Model.bulkCreate(models)
    console.log("Seed Complete")
  }

  module.exports = seed


  //! may or may not continue getting every model To much time for how much time I have left
// const models = [
//     {
//         name: "Integra",
//         manufacturerId: 1
//     },
//     {
//         name: "TLX",
//         manufacturerId: 1
//     },
//     {
//         name: "CDX",
//         manufacturerId: 1
//     },
//     {
//         name: "RDX",
//         manufacturerId: 1
//     },
//     {
//         name: "MDX",
//         manufacturerId: 1
//     },
//     {
//         name: "NSX",
//         manufacturerId: 1
//     },
//     {
//         name: "Legend",
//         manufacturerId: 1
//     },
//     {
//         name: "Vigor",
//         manufacturerId: 1
//     },
//     {
//         name: "RL",
//         manufacturerId: 1
//     },
//     {
//         name: "SLX",
//         manufacturerId: 1
//     },
//     {
//         name: "CL",
//         manufacturerId: 1
//     },
//     {
//         name: "EL",
//         manufacturerId: 1
//     },
//     {
//         name: "RSX",
//         manufacturerId: 1
//     },
//     {
//         name: "TSX",
//         manufacturerId: 1
//     },
//     {
//         name: "CSX",
//         manufacturerId: 1
//     },
//     {
//         name: "ZDX",
//         manufacturerId: 1
//     },
//     {
//         name: "ILX",
//         manufacturerId: 1
//     },
//     {
//         name: "RLX",
//         manufacturerId: 1
//     },
//     {
//         name: "TL",
//         manufacturerId: 1
//     }
// ]