const CarModel = require('../models/CarModel');

exports.create = async (data) => await CarModel.create(data);

exports.getAll = async () => await CarModel.find({});

exports.getMyCars = async (userId) => await CarModel.find({ userId })