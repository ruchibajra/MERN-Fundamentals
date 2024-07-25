const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); /** must install bcrypt used to bring hash in password for encryption */

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// database ma save hunu bhanda agadi yo pre function chalaune call back function yo ho
userSchema.pre('save', async (next) => {
  if (!this.isModified('password')) { /** this lai userSchema ko each value lai represent garcha, yesma chai password lai represent garcha which says if password ko value hash ma modify bhako chaina vane tala ko fn use gara */
    next();
  }
  const salt = await bcrypt.genSalt(10); /** 10 ways choti hash garni so that kasaile hack garna sakindaina password */
  this.password = await bcrypt.hash(this.password, salt); /**returns data in promise format */
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;