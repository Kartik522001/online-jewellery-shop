const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    total: {
        type: String,
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Status"
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "address"
    }
})

const OrderModel = mongoose.model("Order", OrderSchema)

module.exports = OrderModel