const router = require('express').Router();

const { auth } = require('../middlewares/authMiddleware');

const carService = require('../services/carService');

router.get('/home', auth, async (req, res) => {
    try {
        const data = await carService.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
})


router.post('/create', async (req, res) => {
    try {
        const carData = req.body

        await carService.create(carData)
        res.status(201).send({ create: 'Car created successfully' });


    } catch (error) {
        res.status(400).send({ error: error })
    }
})


router.get('/myCars', auth, async (req, res) => {
    const userId = res.locals.userId;
    try {
        if (!userId) {
            return res.status(400).json({ error: 'no Cars yet!' });
        }
        const myCars = await carService.getMyCars(userId);
        res.status(200).json(myCars);

    } catch (errors) {
        return res.status(500).json({ error: errors });
    }
});


router.post('/filterBy', async (req, res) => {
    const filter = req.body;

    try {
        const filteredData = await carService.filterBy(filter)
        res.status(200).json(filteredData);
    } catch (error) {
        return res.status(500).json({ error: error });
    }

})

router.get('/getHeart', auth, async (req, res) => {
    const userId = res.locals.email;
    try {
        if (!userId) {
            return res.status(400).json({ error: 'User Email not found' });
        }
        const hearts = await carService.getHearts(userId);
        res.status(200).json(hearts);
    } catch (errors) {
        console.error('Error fetching liked cars:', errors);
        return res.status(500).json({ error: errors });
    }
});


router.post('/like/:id', auth, async (req, res) => {
    const carId = req.params.id
    const userId = res.locals.email
    try {
        const updatedLikedCars = await carService.likeCar(carId, userId)
        res.status(200).json(updatedLikedCars);
    } catch (errors) {
        return res.status(400).json({ error: errors });
    }
})


router.get('/likedCars', auth, async (req, res) => {
    const userId = res.locals.email;
    try {
        if (!userId) {
            return res.status(400).json({ error: 'User Email not found' });
        }
        const likedCars = await carService.getLikedCars(userId);
        res.status(200).json(likedCars);
    } catch (error) {
        console.error('Error fetching liked cars:', error);
        return res.status(500).json({ error: error });
    }
});


module.exports = router;