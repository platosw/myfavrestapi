const express = require('express');
const router = express.Router();
const dancer = require('../models/dancer');

//get all dancers
router.get('/', async (req, res) => {
    try {
        const dancers = await dancer.find();
        res.json(dancers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// get one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

// create one
router.post('/', async (req, res) => {
    const dancer = new dancer({
        name: req.body.name,
        crew: req.body.crew,
        country: req.body.country,
        description: req.body.country,
        strYoutube: req.body.strYoutube,
        registeredDate: req.body.registeredDate
    });

    try {
        const newDancer = await dancer.save();
        res.status(201).json(newDancer);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// update one
router.patch('/:id', (req, res) => {

});

// delete one
router.delete('/:id', (req, res) => {

});


module.exports = router;