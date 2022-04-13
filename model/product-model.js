const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brands"
    },
    img: {
        type: String
    },
    basePrice: {
        type: Number,
    }
})

const ProductModel = mongoose.model("product", ProductSchema)

module.exports = ProductModel