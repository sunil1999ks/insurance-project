// src/models/Policy.js
const mongoose = require('mongoose');


// Define the schema for the Policy model
const policySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coverageType: {
    type: String,
    enum: ['Health', 'Car', 'Bike', 'Life'],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  premiumAmount: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
