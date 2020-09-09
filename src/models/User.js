const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: Object
    }
})

module.exports = {users: mongoose.model('Member', UserSchema)};