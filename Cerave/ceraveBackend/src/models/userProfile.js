const mongoose = require('mongoose');

//destructure Schema from mongoose
const {Schema} = mongoose;
// const schema = mongoose.Schema();

const userProfileSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        role:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('UserProfile', userProfileSchema);
// const UserProfile = mongoose.model('UserProfile', userProfileSchema);
// model.exports = UserProfile;