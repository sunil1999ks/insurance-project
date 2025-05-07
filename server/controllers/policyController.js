const Policy = require('../models/policy');




// Create a new policy
const createPolicy = async (req, res) => {
  const { name, coverageType, startDate, endDate, premiumAmount } = req.body;
  const userId = req.user.id; // Assuming user is authenticated

  try {
    const newPolicy = new Policy({
      name,
      coverageType,
      startDate,
      endDate,
      premiumAmount,
      user: userId,
      
    });

    await newPolicy.save();

    res.status(201).json({ message: 'Policy created successfully', policy: newPolicy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating policy' });
  }
};

// Get all policies for a user
const getUserPolicies = async (req, res) => {
  const userId = req.user.id; // Assuming user is authenticated

  try {
    const policies = await Policy.find({ user: userId });

    if (!policies.length) {
      return res.status(404).json({ message: 'No policies found' });
    }

    res.json(policies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching policies' });
  }
};

// Get a specific policy by ID
const getPolicyById = async (req, res) => {
  const { policyId } = req.params;

  try {
    const policy = await Policy.findById(policyId);

    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }

    res.json(policy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching policy' });
  }
};

// Delete a policy
const deletePolicy = async (req, res) => {
  const { policyId } = req.params;

  try {
    const policy = await Policy.findByIdAndDelete(policyId);

    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }

    res.json({ message: 'Policy deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting policy' });
  }
};

module.exports = { createPolicy, getUserPolicies, getPolicyById, deletePolicy };
