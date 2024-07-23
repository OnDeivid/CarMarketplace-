const jwt = require('../utils/jwt')// Assuming jwt has a verify function
const carService = require('../services/carService')

exports.auth = async (req, res, next) => {
    const token = req.cookies['token']
    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'secret')
            req.user = decodedToken
            res.locals.userId = decodedToken._id
            res.locals.email = decodedToken.email
            next()

        } catch (error) {
            res.clearCookie('token')
        }
    }
    else {
        next()
    }
}

exports.isCreator = async (req, res, next) => {

    try {

        const userId = res.locals.userId;
        const carId = req.params.id;

        const carData = await carService.findCarById(carId);

        if (!carData) {
            return res.status(404).json({ error: 'car not found' });
        }

        if (carData.userId.toString() !== userId) {
            return res.status(403).json({ error: 'you are not authorized to modify this post!' });
        }
        next()

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }

}