const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategories"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brands"
    },
    basePrice: {
        type: String,
    }
})

const ProductModel = mongoose.model("product", ProductSchema)

module.exports = ProductModel