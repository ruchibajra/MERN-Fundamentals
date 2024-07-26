const User = require('../models/authUserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); /** used for token -> such as login identification of users*/
const dotenv = require('dotenv');

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email }); /**napayesamma wait gara, and find user with unique email*/

    if (user) {
      return res.status(400).json({ msg: 'User already exists' }); /**400 status code: Bad request*/
    }

    user = new User({
      name, /**name:name */
      email, /**email:email */
      password, /**password:password */

      // name : name  (left is database field, right is data k airako value)
    });

    await user.save();

    // payload is object, user is field
    const payload = {
      user: {
        id: user.id,
      },
    };

    // sign is used for token sign. it is a function. 
    jwt.sign(
      payload,
      process.env.JWT_SECRET, /**makes the pw secret */
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }


    const payload = {
      user: {
        id: user.id,
      },
    };

    // generates token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ msg: "user logged in successfully", token: `Bearer ${token}`, user: user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  registerUser,
  loginUser,
};