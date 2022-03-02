const mongoose = require("mongoose")

const orderDetailSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    vendorProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendorProducts",
    }
})

const OrderDetailModel = mongoose.model("orderDetail", orderDetailSchema)

module.exports = OrderDetailModel