const CarModel = require('../models/CarModel');

exports.create = async (data) => await CarModel.create(data);

exports.getAll = async () => await CarModel.find({});

exports.getMyCars = async (userId) => await CarModel.find({ userId })


exports.filterBy = async (filter) => {


    const fieldData = {}
    if (filter.year != '') {
        fieldData.year = filter.year
    }

    if (filter.brand != '') {
        fieldData.brand = filter.brand.trim()
    }

    if (filter.model != '') {
        fieldData.model = filter.model.trim()
    }

    if (filter.price != '') {
        fieldData.price = filter.price
    }

    if (filter.mileage != '') {
        fieldData.mileage = filter.mileage
    }


    if (filter.fuel != '') {
        fieldData.fuel = filter.fuel
    }
 
    console.log(fieldData)
    const data = await CarModel.find(fieldData)
    console.log(data)

}