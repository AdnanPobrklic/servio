const User = require('../models/User');
const Company = require('../models/Company');
const generateToken = require('../utils/generateToken');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }) ;
    if(!user) {
      user = await Company.findOne({ email });
    }
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Neispravni podaci za prijavu' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Greška prilikom login-a', error: err.message });
  }
};

module.exports = {login};
