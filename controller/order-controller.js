const OrderController = require('../model/order-model');

module.exports.addOrder = function (err, data) {

    let user = req.body.user;
    let total = req.body.total;
    let status = req.body.status;
    let address = req.body.address;

    let order = new OrderController({
        user: user,
        total: total,
        status: status,
        address: address
    })

    order.save(function (err, success) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Something went wrong", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Order added", status: 200, data: success })
        }
    })
}

module.exports.getAllOrders = function (req, res) {
    OrderController.find().populate("status").populate("user").populate("address").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "show your list ", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.deleteOrder = function (req, res) {
    let OrderId = req.params.OrderId


    OrderController.deleteOne({ "_id": OrderId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: data })
        }
    })
}

module.exports.updateOrder = function (req, res) {

    let OrderId = req.body.OrderId;
    let user = req.body.user;
    let total = req.body.total;
    let status = req.body.status;
    let address = req.body.address;

    OrderController.updateOne({ _id: OrderId }, { user: user, total: total, status: status, address: address }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })

}