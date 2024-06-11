const CarModel = require('../models/CarModel');

exports.create = async (data) => await CarModel.create(data);

exports.getAll = async () => await CarModel.find({});