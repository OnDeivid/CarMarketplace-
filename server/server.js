const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit');

const { register, login } = require('./DB/service/UserService')
const { create, getAll } = require('./DB/service/CarService')

const connectDB = require('./DB/connectDB')

const app = express()

const corsOption = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

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

//connect to the DB
connectDB()

app.use(express.json())
app.use(cors(corsOption))


app.get('/home', async (req, res) => {
    try {
        const data = await getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }

})

app.post('/login', loginLimitRequest, async (req, res) => {
    try {
        const userData = req.body

        const token = await login(userData)
        res.status(201).send({ message: 'login successful', data: token, user: 'user' })
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
})

app.post('/create', async (req, res) => {
    try {
        const carData = req.body

        await create(carData)
        res.status(201).send({ create: 'Car created successfully' });


    } catch (error) {
        res.status(400).send({ error: error })
    }
})

app.post('/register', registerLimitRequest, async (req, res) => {
    try {
        const userData = req.body

        await register(userData)
        console.log('da have new acc')

        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ error: errors });

    }
})

app.listen(3000, () => console.log('Server is working...'))
