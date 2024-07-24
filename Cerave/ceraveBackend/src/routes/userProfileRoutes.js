// 3rd Step

const express = require('express');
const userProfile = require('../controllers/userProfileControllers');
const app = express();

app.post('/userProfile', userProfile)

module.exports = app;