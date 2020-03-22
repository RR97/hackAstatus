const express = require('express');
let router = express.Router();

const mongoose = require('mongoose');
require('../models/shop');
const Shop = mongoose.model('shops');

router.post('/create', async (req, res) => {
  new Shop(req.body).save((error) => {
    if (error) res.status(400).send(error);
    res.status(200).send('Registration successful!');
  });
});

router.get('/all', async (req, res) => {
  Shop.find({}, function (err, shops) {
    if (err) {
      res.send("Something went wrong! " + err)
    }
    res.json(shops);
  });
});

module.exports = router;
