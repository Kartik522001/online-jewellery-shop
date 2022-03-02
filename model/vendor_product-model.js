const mongoose = require("mongoose")

const vendorProductSchema = new mongoose.Schema({

    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    vendorDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendordetails"
    },
    qty: {
        type: Number,
    },
    price: {
        type: Number,
    }
})

const vendorProductModel = mongoose.model("vendorProduct", vendorProductSchema)

module.exports = vendorProductModel