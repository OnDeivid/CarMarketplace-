const express = require('express')
const cors = require('cors')
const connectDB = require('./DB/connectDB')
const { register, login } = require('./DB/service/UserService')
const { create, getAll } = require('./DB/service/CarService')
const { object } = require('webidl-conversions')

const app = express()

const corsOption = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

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

app.post('/login', async (req, res) => {
    try {
        const data = await login(req.body)
        res.status(201).send({ message: 'login successful', data, user: 'user' })
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
})

app.post('/create', async (req, res) => {
    try {
        await create(req.body)
        res.status(201).send({ create: 'Car created successfully' });

    } catch (error) {
        res.status(400).send({ error: error })
    }
})

app.post('/register', async (req, res) => {
    try {
        await register(req.body)
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        const validationErrorMessage = error.errors.email.properties.message
        res.status(400).send({ error: validationErrorMessage });

    }
})

app.listen(3000, () => console.log('Server is working...'))
