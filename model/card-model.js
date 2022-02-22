const mongoose = require("mongoose")


let cardSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },

    vendorProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendorProduct"
    },
    qty: {
        type: String,
    }
})

let cardModel = mongoose.model("card", cardSchema);

module.exports = cardModel;