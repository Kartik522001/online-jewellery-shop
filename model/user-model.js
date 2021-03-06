const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
    },
    isActive: {
        type: Boolean
    }
})


const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel 