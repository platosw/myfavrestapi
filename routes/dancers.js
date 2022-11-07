const express = require('express');
const router = express.Router();
const Dancer = require('../models/dancer');

//get all dancers
router.get('/', async (req, res) => {
    try {
        const dancers = await Dancer.find();
        res.json(dancers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

// get one
router.get('/:id', getDancer, (req, res) => {
    res.json(res.dancer);
});

// create one
router.post('/', async (req, res) => {
    const dancer = new Dancer({
        name: req.body.name,
        crew: req.body.crew,
        country: req.body.country,
        style: req.body.style,
        strYoutube: req.body.strYoutube,
        registeredDate: req.body.registeredDate
    });

    try {
        const newDancer = await dancer.save();
        res.status(201).json(newDancer);
    } catch (err) {
        res.status(400).json({message: err.message});
    };
});

// update one
router.patch('/:id', getDancer, async (req, res) => {
    if(req.body.name != null) {
        res.dancer.name = req.body.name;
    }
    if(req.body.crew != null) {
        res.dancer.crew = req.body.crew;
    }
    if(req.body.country != null) {
        res.dancer.country = req.body.country;
    }
    if(req.body.style != null) {
        res.dancer.style = req.body.style;
    }
    if(req.body.strYoutube != null) {
        res.dancer.strYoutube = req.body.strYoutube;
    }

    try {
        const updatedDancer = await res.dancer.save();
        res.json(updatedDancer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// delete one
router.delete('/:id', getDancer, async (req, res) => {
    try {
        await res.dancer.remove();
        res.json({ message: 'Deleted dancer' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

async function getDancer(req, res, next) {
    let dancer
    try {
        dancer = await Dancer.findById(req.params.id);
        if (dancer == null) {
            return res.status(404).json({ message: 'Cannot find dancer' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    };

    res.dancer = dancer;
    next();
};


module.exports = router;