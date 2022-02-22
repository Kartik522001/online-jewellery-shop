// const orderDetailModel = require("../model/order-model");
const OrderDetailModel = require("../model/order_details-model");

module.exports.addOrderDetail = function (req, res) {
    let order = req.body.order;
    let user = req.body.user;
    let qty = req.body.qty;
    let price = req.body.price;
    let vendorProduct = req.body.vendorProduct;

    let orderDetail = new OrderDetailModel({
        order: order,
        user: user,
        qty: qty,
        price: price,
        vendorProduct: vendorProduct
    })

    orderDetail.save(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Order Are Save  ", data: data, status: 200 })
        }
    })
}


module.exports.getAllorderDetails = function (req, res) {

    orderDetail.find().populate("user").populate("order").populate("price").exec(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Order Are showing ", data: data, status: 200 })
        }
    })
}



module.exports.deleteorderDetail = function (req, res) {
    let orderId = req.params.orderId

    OrderDetailModel.deleteOne({ "_id": vendorId }, function (err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Order Are Delete", status: 200, data: success })
        }
    })
}

module.exports.updateorderDetails = function (req, res) {
    let orderId = req.body.orderId
    let user = req.body.user;
    let qty = req.body.qty;
    let price = req.body.price;
    let vendorProduct = req.body.vendorProduct;


    OrderDetailModel.updateOne({ _id: orderId }, { user: user, qty: qty, price: price, vendorProduct: vendorProduct }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Order Are Update", status: 200, data: data })
        }
    })
}


