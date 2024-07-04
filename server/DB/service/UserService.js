const bcrypt = require('bcrypt')
const UserModel = require("../models/UserModel");
const jwt = require('../../lib/jwt')

exports.register = async (data) => await UserModel.create(data)

exports.login = async (data) => {
    const { email, password } = data

    const userData = await UserModel.findOne({ email: email })
    if (!userData) {
        throw new Error('email or password is not correct!')
    }

    const isPasswordCorrect = await bcrypt.compare(password, userData.password)

    if (!isPasswordCorrect) {
        throw new Error('email or password is not correct!')
    }
    const payload = { _id: userData._id, email: userData.email, username: userData.username }

    const token = await jwt.sign(payload, 'secret')

    return { token, payload }

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