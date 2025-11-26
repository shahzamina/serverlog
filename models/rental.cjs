const mongoose = require('mongoose');

const rental = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  rentalService: { type: String, required: true },
  partDescription: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('rental', rental);
