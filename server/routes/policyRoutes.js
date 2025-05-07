const express = require('express');
const { createPolicy, getUserPolicies, getPolicyById, deletePolicy } = require('../controllers/policyController');
const verify_token = require('../middlewares/verification');
const authorizeRoles = require('../middlewares/authorizeRoles');

const router = express.Router();


router.post('/createPolicy', verify_token, authorizeRoles('user', 'admin'), createPolicy);


router.get('/getUserPolicies', verify_token, authorizeRoles('user', 'admin'), getUserPolicies);


router.get('/:policyId', verify_token, authorizeRoles('user', 'admin'), getPolicyById);


router.delete('/:policyId', verify_token, authorizeRoles('admin'), deletePolicy);

module.exports = router;
