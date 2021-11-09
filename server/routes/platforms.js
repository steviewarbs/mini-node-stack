const {Platform, validate} = require('../models/platform');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

    let platform = new Platform({ name: req.body.name });
    platform = await platform.save();

    res.send(platform);
});

module.exports = router;