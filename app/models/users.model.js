const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    tou: String,
    email: String,
    password: String,
    capd: String,
    capm: String,
    mat: String,
    loc: String,
    tod: String,
    train: String
});

module.exports = mongoose.model('User', UserSchema);
