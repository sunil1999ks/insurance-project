// // src/models/Payment.js
// const mongoose = require('mongoose');


// // Define the schema for the Payment model
// const paymentSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   policy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Policy',
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   paymentDate: {
//     type: Date,
//     default: Date.now,
//   },
//   paymentStatus: {
//     type: String,
//     enum: ['successful', 'failed', 'pending'],
//     default: 'pending',
//   },
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;



const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  policy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Policy',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  paymentStatus: {
    type: String,
    enum: ['successful', 'failed', 'pending'],
    default: 'pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
