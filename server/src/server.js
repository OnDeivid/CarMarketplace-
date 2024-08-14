const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors')

const routes = require('./routes')
const connectDB = require('./config/connectDB');

const app = express()

const corsOption = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
}

connectDB()

app.use(express.json())
app.use(cors(corsOption));
app.use(cookieParser())

app.use(routes)

app.listen(3000, () => console.log('Server is working...'))
