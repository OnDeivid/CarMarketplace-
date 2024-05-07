const exporess = require('express')
const cors = require('cors')
const connectDB = require('./DB/connectDB')

const app = exporess()

app.get('/', (req, res) => {
    res.send('requirest to Home')
})
connectDB()

app.listen(3000, () => console.log('Server is working...'))