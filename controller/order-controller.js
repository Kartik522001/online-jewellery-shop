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

module.exports.getAllOrder = function (req, res) {
    //REST 
    OrderController.find(function (err, categories) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Order...", status: 200, data: categories })

        }

    })
}

module.exports.deleteOrder = function (req, res) {
    let OrderId = req.body.OrderId


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