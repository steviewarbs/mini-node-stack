
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: true,
    maxlength: 3,
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
});

const Person = mongoose.model("Person", personSchema);

exports.personSchema = personSchema;
exports.Person = Person;
