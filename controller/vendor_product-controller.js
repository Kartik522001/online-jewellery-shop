const vendorProductController = require('../model/vendor_product-model');

module.exports.addvendorProduct = function (req, res) {

    let product = req.body.product;
    let vendorDetail = req.body.vendorDetail;
    let qty = req.body.qty;
    let price = req.body.price;

    let vendorProduct = new vendorProductController({
        product: product,
        vendorDetail: vendorDetail,
        qty: qty,
        price: price
    })

    vendorProduct.save(function (err, success) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Something went wrong", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "category added", status: 200, data: success })
        }

    })

}

module.exports.getAllvendorProducts = function (req, res) {
    vendorProductModel.find().populate("product").populate("vendorDetail").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }
    })
}

module.exports.deletevendorProduct = function (req, res) {
    let vendorProductId = req.params.vendorProductId;


    vendorProductController.deleteOne({ "_id": vendorProductId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: data })
        }
    })

}


module.exports.updatevendorProduct = function (req, res) {

    let vendorProductId = req.body.vendorProductId;
    let product = req.body.product;
    let vendorDetail = req.body.vendorDetail
    let qty = req.body.qty;
    let price = req.body.price;

    vendorProductController.updateOne({ _id: vendorProductId }, { product: product, vendorDetail: vendorDetail, qty: qty, price: price }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })

}

module.exports.getById = function (req, res) {

    let id = req.params.vendorproductId;

    vendorProductModel.findById({ _id: id }).populate('product').populate('vendor').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "vendor products...", status: 200, data: data });
        }
    })
}