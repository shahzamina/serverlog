const mongoose = require("mongoose");

const partSchema = new mongoose.Schema({
  partNumber: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  modality: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  modal: {
    type: String,
    required: false, // optional
  },
  image: {
    type: String,
    required: true, // optional (URL or filename)
  },
}, { timestamps: true });

module.exports = mongoose.model("Part", partSchema);
