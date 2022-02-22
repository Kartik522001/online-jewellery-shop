const mongoose = require("mongoose")

const vendorDetailSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contactNumber: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "states"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cities"
    }


})

const vendorDetailModel = mongoose.model("vendorDetail", vendorDetailSchema)

module.exports = vendorDetailModel