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
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true }

})

const CarModel = mongoose.model('Cars', carSchema);

carSchema.pre('save', function (next) {
    this.model = this.model.toUpperCase();
    next();
});

module.exports = CarModel;