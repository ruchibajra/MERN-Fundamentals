const express = require('express');
const userProfile = require('../controllers/userProfileControllers');
// const userProfile = require('../controllers/UserProfileController');

const app = express();

app.post('/userProfile', userProfile);

module.exports = app;