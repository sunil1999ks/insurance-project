const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verify_token = async (req, res, next) => {
  let authHeader = req.header('Authorization');

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      let payload = jwt.verify(token, process.env.JWT_SECRET);
      let user = await User.findById(payload.id);
      if (!user) return res.status(404).send("User not found");

      req.user = { id: user._id, role: user.role };
      next();
    } catch (err) {
      console.error(err);
      res.status(401).send('Invalid Token Access!');
    }
  } else {
    res.status(401).send('No Access!');
  }
};

module.exports = verify_token;
