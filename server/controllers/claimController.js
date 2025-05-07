const Claim = require('../models/Claim');
const Policy = require('../models/policy');

const createClaim = async (req, res) => {
  const { policyId, claimAmount, description } = req.body;
  const userId = req.user.id;

  try {
    const policy = await Policy.findOne({ _id: policyId, user: userId });
    if (!policy) {
      return res.status(400).json({ message: 'Invalid policy for this user' });
    }

    const newClaim = new Claim({
      policy: policyId,
      claimAmount,
      description,
    });

    await newClaim.save();
    res.status(201).json({ message: 'Claim created successfully', claim: newClaim });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating claim' });
  }
};

const getUserClaims = async (req, res) => {
  const userId = req.user.id;
  try {
    const claims = await Claim.find()
      .populate({
        path: 'policy',
        match: { user: userId },
      });

    const userClaims = claims.filter(claim => claim.policy !== null);

    if (!userClaims.length) {
      return res.status(404).json({ message: 'No claims found' });
    }

    res.json(userClaims);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching claims' });
  }
};

const updateClaimStatus = async (req, res) => {
  const { claimId } = req.params;
  const { status } = req.body;

  try {
    const claim = await Claim.findById(claimId);
    if (!claim) {
      return res.status(404).json({ message: 'Claim not found' });
    }

    claim.status = status;
    await claim.save();

    res.json({ message: 'Claim status updated', claim });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating claim status' });
  }
};

module.exports = { createClaim, getUserClaims, updateClaimStatus };
