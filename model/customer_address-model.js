const mongoose = require("mongoose")


const CustomerAddressScheme = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    address: {
        type: String,
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "states"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cities"
    },
    pincode: {
        type: String,
    }

})

const CustomerAddressModel = mongoose.model("CustomerAddress", CustomerAddressScheme);

module.exports = CustomerAddressModel;

