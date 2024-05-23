const express = require('express')
const cors = require('cors')
const connectDB = require('./DB/connectDB')
const { register, login } = require('./DB/service/UserService')

const app = express()

const corsOption = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

//connect the DB
connectDB()

app.use(express.json())
app.use(cors(corsOption))


app.get('/', (req, res) => {
    res.send('data')
})

app.post('/login', async (req, res) => {
    try {
        const data = await login(req.body)
        res.status(201).send({ message: 'login successfully', data, user: 'user' })
    } catch (err) {
        res.status(400).send({ error: 'Oopsy smth is not ok' })
    }
})

app.post('/register', async (req, res) => {
    try {
        await register(req.body)
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).send({ error: 'Oopsy smth is not ok' })
    }
})

app.listen(3000, () => console.log('Server is working...'))
