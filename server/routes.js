const router = require('express').Router();

const userController = require('./src/controllers/userController')
const carController = require('./src/controllers/carController')


router.use('/users', userController);
router.use('/data', carController)

module.exports = router;