const mongoose = require('mongoose');

const form = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  part: { type: String, required: true },
  modality: { type: String, required: true },
  manufacturer: { type: String, required: true },
  partDescription: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('services', form);
