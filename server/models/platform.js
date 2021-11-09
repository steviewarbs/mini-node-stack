
const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Platform = mongoose.model("Platform", platformSchema);

exports.platformSchema = platformSchema;
exports.Platform = Platform;
