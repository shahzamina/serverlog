const mongoose = require('mongoose');

const form = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  partDescription: { type: String, required: true },
 
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ser', form);
