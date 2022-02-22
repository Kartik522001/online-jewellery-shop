const vendorProductController = require('../model/vendor_product-model');

module.exports.addvendorProduct = function (req, res) {

    let product = req.body.product;
    let vendor = req.body.vendor;
    let qty = req.body.qty;
    let price = req.body.price;

    let vendorProduct = new vendorProductController({
        product: product,
        vendor: vendor,
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
    //REST 
    vendorProductController.find(function (err, categories) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Vendor Product...", status: 200, data: categories })

        }

    })

}

module.exports.deletevendorProduct = function (req, res) {
    let vendorProductId = req.body.vendorProductId;


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
    let vendor = req.body.vendor;
    let qty = req.body.qty;
    let price = req.body.price;

    vendorProductController.updateOne({ _id: vendorProductId }, { product: product, vendor: vendor, qty: qty, price: price }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })

}