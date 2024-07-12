const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://127.0.1:27017/CarMarketPlace')
        .then(() => console.log('db connected'))
        .catch((e) => console.log(e))
}

module.exports = connectDB
