const { Person, validate } = require("../models/person");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let person = new Person({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address
  });
  person = await person.save();

  res.send(person);
});


router.get('/', async (req, res) => {
  try {
   const person = await Person.find()
   res.json(person);
  } catch (err) {
   res.json({ error: err.message || err.toString() });
  }
 });


module.exports = router;
