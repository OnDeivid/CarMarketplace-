const bcrypt = require('bcrypt')

const UserModel = require("../models/UserModel");
const jwt = require('../utils/jwt')

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
    console.log(userData)
    const payload = { _id: userData._id, email: userData.email, username: userData.username, phone: userData.number, icon: userData.profileIcon }

    const token = await jwt.sign(payload, 'secret')

    return { token, payload }

}

