const ProductModel = require('../model/product-model');
const CategoryModel = require('../model/category-model');

module.exports.addProduct = function (req, res) {
    let productName = req.body.productName;
    let category = req.body.category
    let brand = req.body.brand;
    let baseprice = req.body.baseprice;
    let img = req.body.img;

    let product = ProductModel({
        productName: productName,
        category: category,
        img: img,
        brand: brand,
        baseprice: baseprice,
    })

    product.save(function (err, success) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Something went wrong", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Product added", status: 200, data: success })
        }
    })
}


module.exports.getAllproducts1 = (req, res) => {

    ProductModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })
        } else {
            res.json({ msg: "subcategories ...", data: data, status: 200 })
        }
    })
}


module.exports.getAllproducts = (req, res) => {
    ProductModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })
        } else {
            res.json({ msg: "subcategories ...", data: data, status: 200 })
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
    let img = req.body.img
    let brand = req.body.brand;
    let baseprice = req.body.baseprice;

    ProductModel.updateOne({ _id: ProductId }, { productName: productName, img: img, category: category, subcategory: subcategory, brand: brand, baseprice: baseprice }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Product update...", status: 200, data: data })
        }
    })

}

module.exports.getById = function (req, res) {

    let id = req.params.productId;


    ProductModel.findById({ _id: id }).populate('category').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    })
}

module.exports.updateById = function (req, res) {

    let productId = req.params.productId
    let productName = req.body.productName
    let baseprice = req.body.baseprice
    let category = req.body.category
    let img = req.body.img
    let brand = req.body.brand



    ProductModel.findByIdAndUpdate({ _id: productId }, { productName: productName, img: img, baseprice: baseprice, category: category, subcategory: subcategory, brand: brand }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    })
}

module.exports.getoneproducts = (req, res) => {
    let categoryId = req.params.categoryId;
    ProductModel.find({ category: categoryId }).exec(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err.message, status: -1 })
        }
        else {
            res.json({ msg: "Cities ret... ", data: data, status: 200 })
        }
    })
}
