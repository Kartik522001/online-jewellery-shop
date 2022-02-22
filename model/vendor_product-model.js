const mongoose = require("mongoose")

const vendorProductSchema = new mongoose.Schema({

    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendordetails"
    },
    qty: {
        type: String,
    },
    price: {
        type: String,
    }
})

const vendorProductModel = mongoose.model("vendorProduct", vendorProductSchema)

module.exports = vendorProductModel