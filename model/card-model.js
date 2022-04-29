const mongoose = require("mongoose")


let cardSchema = new mongoose.Schema({

    productName: {
        type: String,
    },
    baseprice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

let cardModel = mongoose.model("card", cardSchema);

module.exports = cardModel;