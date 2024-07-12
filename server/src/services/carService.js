const CarModel = require('../models/CarModel')
const UserModel = require('../models/UserModel');

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

    return await CarModel.find(fieldData)

}

exports.likeCar = async (carId, email) => {
    let flag = false
    const userData = await UserModel.findOne({ email })

    userData.likedCars.forEach(likedCar => {
        if (likedCar.toString() == carId) {
            flag = true
        }
    });

    if (!flag) {
        // Like the car (if it's not already liked)
        userData.likedCars.push(carId)
        await UserModel.findOneAndUpdate({ email }, userData)
    } else {
        // Unlike the car (if it's already liked)
        const indexToRemove = userData.likedCars.indexOf(carId);
        indexToRemove > -1 ? userData.likedCars.splice(indexToRemove, 1) : null
        await UserModel.findOneAndUpdate({ email }, userData)
    }
    return userData.likedCars
}

exports.getHearts = async (email) => {
    const userData = await UserModel.findOne({ email })
    return userData.likedCars
}

exports.getLikedCars = async (email) => {
    const likedCars = await UserModel.findOne({ email }).populate('likedCars')
    return likedCars.likedCars

}