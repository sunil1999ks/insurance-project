const express = require('express');
const router = express.Router();

const { recordPayment, getUserPayments, getAllPayments } = require('../controllers/paymentController');
const verify_token = require('../middlewares/verification');
// Optional: Admin check middleware
// const { isAdmin } = require('../middlewares/isAdmin');

// Record a new payment
router.post('/createPayment', verify_token, recordPayment);

// List all payments for a user
router.get('/listPayments', verify_token, getUserPayments);

// (Optional) List all payments for admin
// router.get('/allPayments', verify_token, isAdmin, getAllPayments);

module.exports = router;
