const router = require('express').Router();
const rateLimit = require('express-rate-limit');
const userService = require('../services/userService');
const { auth } = require('../middlewares/authMiddleware');

//login limit requests
const loginLimitRequest = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 30,
    message: { error: 'Too many login, attempts please try again later.' },
})
//register limit requests
const registerLimitRequest = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 30,
    message: { error: 'Too many register, attempts please try again later.' },
})



router.post('/login', loginLimitRequest, async (req, res) => {
    try {
        const userData = req.body
        console.log(userData)
        const token = await userService.login(userData)

        res.cookie('token', token.token)
        res.status(201).send({ message: 'login successful', data: token, user: 'user' })
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
})

router.post('/register', registerLimitRequest, async (req, res) => {
    try {
        const userData = req.body

        await userService.register(userData)

        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ error: errors });

    }
})


router.get('/logout', async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: 'Logout failed' });
    }
})





module.exports = router;