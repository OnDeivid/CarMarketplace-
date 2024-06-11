const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    price: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    description: { type: String },
    currency: { type: String, required: true },
    fuel: { type: String, required: true },
})

const CarModel = mongoose.model('Cars', carSchema);

module.exports = CarModel;