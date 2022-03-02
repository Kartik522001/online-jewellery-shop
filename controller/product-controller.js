const ProductModel = require('../model/product-model');

module.exports.addProduct = function (req, res) {
    let productName = req.body.productName;
    let category = req.body.category
    let subcategory = req.body.subcategory
    let brand = req.body.brand;
    let basePrice = req.body.basePrice;

    let product = ProductModel({
        productName: productName,
        category: category,
        subcategory: subcategory,
        brand: brand,
        basePrice: basePrice,
    })

    product.save(function (err, data) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Something went wrong", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Product added", status: 200, data: success })
        }
    })
}


module.exports.getAllproducts = (req, res) => {
    ProductModel.find().populate("category").populate("subcategory").populate("brand").exec(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Cities ret... ", data: data, status: 200 })
        }
    })
}



module.exports.deleteProduct = function (req, res) {
    let ProductId = req.params.ProductId;

    ProductModel.deleteOne({ "_id": ProductId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Product Delete...", status: 200, data: data })
        }
    })
}


module.exports.updateProduct = function (req, res) {

    let ProductId = req.body.ProductId;
    let productName = req.body.productName;
    let category = req.body.category;
    let subcategory = req.body.subcategory
    let brand = req.body.brand;
    let basePrice = req.body.basePrice;

    ProductModel.updateOne({ _id: ProductId }, { productName: productName, category: category, subcategory: subcategory, brand: brand, basePrice: basePrice }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Product update...", status: 200, data: data })
        }
    })

}
