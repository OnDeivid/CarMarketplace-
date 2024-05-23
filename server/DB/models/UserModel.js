const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true }
})


userSchema.path('email').validate(async function (email) {

    const isEmailExist = await mongoose.model('User').findOne({ email: email })

    if (isEmailExist) {
        throw new Error('email already exists')
    }
})

userSchema.virtual('rePassword').set(function (value) {
    if (value !== this.password) {
        throw new Error('Password mismatch');
    }
})


userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash
})


const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
