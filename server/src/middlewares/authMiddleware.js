const jwt = require('../utils/jwt')// Assuming jwt has a verify function

exports.auth = async (req, res, next) => {
    const token = req.cookies['token']
    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'secret')
            req.user = decodedToken
            res.locals.userId = decodedToken._id
            res.locals.email = decodedToken.email
            next()

        } catch (err) {
            res.clearCookie('token')
        }
    }
    else {
        next()
    }
}