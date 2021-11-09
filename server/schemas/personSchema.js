const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const personSchemaTemplate = new Schema(
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      address: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Person", personSchemaTemplate);