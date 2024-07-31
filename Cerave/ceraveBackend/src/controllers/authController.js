const User = require('../models/authUserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); /** used for token -> such as login identification of users*/
const dotenv = require('dotenv');
const UserProfile = require('../models/userProfile');
// const userProfile = require('../models/userProfile');
const { response } = require('express');

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password, role} = req.body;

  try {
    let user = await User.findOne({ email }); /**napayesamma wait gara, and find user with unique email*/

    if (user) {
      return res.status(400).json({ msg: 'User already exists' }); /**400 status code: Bad request*/
    }

    user = new User({
      name, /**name:name */
      email, /**email:email */
      password, /**password:password */
      role

      // name : name  (left is database field, right is data k airako value)
    });

    await user.save();

    // create profile for new user at the time of registration
    const newProfile = new UserProfile({user : user._id});
    await newProfile.save();

    // payload is object, user is field
    // do this if you want to redirect to dashboard after registration

    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };
    // console.log(payload);

    // sign is used for token sign. it is a function. 
    // jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET, /**makes the pw secret */
    //   { expiresIn: '1h' },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   }
    // );

    res
    .status(201)
    .json({
      msg: "User registered successfully",
      user: user,
      userProfile: newProfile,
    }); 
   } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email)
  // console.log(password)

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // console.log(user)
    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch)

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