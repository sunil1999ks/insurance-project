const express = require('express');
const router = express.Router();

const { createClaim, getUserClaims, updateClaimStatus } = require('../controllers/claimController');
const verify_token = require('../middlewares/verification');
const isAdmin = require('../middlewares/isAdmin');

router.post('/createClaim', verify_token, createClaim);
router.get('/listClaims', verify_token, getUserClaims);
router.put('/:claimId/status', verify_token, isAdmin, updateClaimStatus);

module.exports = router;
