const CardModel = require('../model/card-model');

module.exports.addCard = function (req, res) {
    let baseprice = req.body.baseprice
    let productName = req.body.productName
    let user = req.body.user

    let Card = new CardModel({
        baseprice: baseprice,
        productName: productName,
        user: user,
    })

    Card.save(function (err, data) {
        if (err) {
            res.json({ msg: "Card Not Add", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Card Add", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.getAllcarts = function (req, res) {
    CardModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }

    })
}

module.exports.deleteCard = function (req, res) {
    let cardId = req.params.cardId

    CardModel.deleteOne({ _id: cardId }, function (err, data) {
        if (err) {
            res.json({ msg: "Delete went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updatecart = function (req, res) {
    let cartId = req.body.cartId
    let qty = req.body.qty
    let vendorproduct = req.body.vendorproduct
    let user = req.body.user

    CardModel.updateOne({ _id: cartId }, { qty: qty, vendorproduct: vendorproduct, usre: user }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}


module.exports.total = function (req, res) {
    let total = req.body.total
    CardModel.findOne({}).exec(function (err, data) {
        if (data) {
            res.json({ msg: "updated...", status: 200, data: data })
        }
        else {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        }
    })
}

module.exports.onebyone = function (req, res) {
    let userId = req.params.userId
    CardModel.find({ user: userId }).populate('user').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }

    })
}


module.exports.getAllcartsadmin = function (req, res) {
    CardModel.find().populate('user').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }

    })
}