const paymentModel = require("../model/payment-model")

//add
module.exports.addpayment = function (req, res) {
    let totalAmount = req.body.totalAmount
    let refNum = req.body.refNum
    let isRefundprocess = req.body.isRefundprocess
    let order = req.body.order
    let user = req.body.user


    let payment = new paymentModel({
        totalAmount: totalAmount,
        refNum: refNum,
        isRefundprocess: isRefundprocess,
        order: order,
        user: user,
        mode: req.body.mode,
        status: req.body.status

    })
    payment.save(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Payment success ", status: 200, data: data })
        }
    })
}

// list 
module.exports.getAllpayments = function (req, res) {
    paymentModel.find().populate("order").populate("user").exec(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "show all payments ", status: 200, data: data })
        }
    })
}


//delete
module.exports.deletepayment = function (req, res) {
    let paymentId = req.param.paymentId

    paymentModel.deleteOne({ _id: paymentId }, function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "delete data ", status: 200, data: data })
        }
    })
}

//update
module.exports.updatepayment = function (req, res) {
    let paymentId = req.params.paymentId
    let totalAmount = req.body.totalAmount
    let isRefundprocess = req.body.isRefundprocess
    let user = req.body.user
    let order = req.body.order
    let refNum = req.body.refNum
    let mode = req.body.mode
    let status = req.body.status


    paymentModel.updateOne({ _id: paymentId }, {
        totalAmount: totalAmount, isRefundprocess: isRefundprocess, user: user, order: order, refNum: refNum,
        mode: mode,
        status: status
    }, function (err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "updated data  ", status: 200, data: data })
        }
    })
}