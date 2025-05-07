const Payment = require('../models/Payment');
const Policy = require('../models/policy');

// Record a payment for a policy
const recordPayment = async (req, res) => {
  const { policyId, amount } = req.body;
  const userId = req.user.id;

  try {
    // Check if the policy exists for this user
    const policy = await Policy.findOne({ _id: policyId, user: userId });
    if (!policy) {
      return res.status(400).json({ message: 'Invalid policy for this user' });
    }

    // Create new payment
    const newPayment = new Payment({
      user: userId,
      policy: policyId,
      amount,
      paymentStatus: 'successful',  // or logic to dynamically set status
    });

    await newPayment.save();

    res.status(201).json({ message: 'Payment recorded successfully', payment: newPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error recording payment' });
  }
};

// Get all payments for the authenticated user
const getUserPayments = async (req, res) => {
  const userId = req.user.id;

  try {
    const payments = await Payment.find({ user: userId }).populate('policy');

    if (!payments.length) {
      return res.status(404).json({ message: 'No payments found' });
    }

    res.json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching payments' });
  }
};

module.exports = { recordPayment, getUserPayments };
