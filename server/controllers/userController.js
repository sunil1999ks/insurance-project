const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register new user (role optional)
const register = async (req, res) => {
  try {
    const { email, name, password, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ email, name, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ error: "Server error during registration." });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { inp_email, inp_password } = req.body;

    const user = await User.findOne({ email: inp_email });
    if (!user) return res.status(400).json({ error: "User not found." });

    const isValidPWD = await bcrypt.compare(inp_password, user.password);
    if (!isValidPWD) return res.status(400).json({ error: "Invalid credentials." });

    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token , user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }});
  } catch (error) {
    res.status(500).json({ error: "Server error during login." });
  }
};




module.exports = {
  register,
  login
};
