const SubcategoryModel = require("../model/subcategory-model")
const UserModel = require("../model/user-model")

//add
module.exports.addSubcategory = function (req, res) {

    let subcategoryName = req.body.subcategoryName
    let category = req.body.category
    let isActive = req.body.isActive
    let img = req.body.img

    let subcategory = new SubcategoryModel({
        subcategoryName: subcategoryName,
        category: category,
        isActive: isActive,
        img: img
    })
    subcategory.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })
        } else {
            res.json({ msg: "Subcategory Add", data: data, status: 200 })
        }
    })
}

//list
module.exports.getAllSubcategories = function (req, res) {
    SubcategoryModel.find().populate("category").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })
        } else {
            res.json({ msg: "subcategories ...", data: data, status: 200 })
        }
    })
}


//delete
module.exports.deleteSubcategory = function (req, res) {
    //params Subcategoryid 
    let subcategoryId = req.params.subcategoryId //postman -> userid 

    SubcategoryModel.deleteOne({ _id: subcategoryId }, function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update 

module.exports.updateSubcategory = function (req, res) {

    let subcategoryId = req.body.subcategoryId
    let subcategoryName = req.body.subcategoryName
    let isActive = req.body.isActive;
    let img = req.body.img;


    SubcategoryModel.updateOne({ _id: subcategoryId }, { img: img, subcategoryName: subcategoryName, isActive: isActive }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}

module.exports.getById = function (req, res) {

    let id = req.params.subcategoryId;


    SubcategoryModel.findById({ _id: id }).populate('category').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "SubCategories...", status: 200, data: data });
        }
    })
}

module.exports.getByCategoryId = function (req, res) {

    let id = req.params.categoryId;
    console.log(id)

    SubcategoryModel.find({ category: id }).populate('category').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "SubCategories...123", status: 200, data: data });
        }
    })
}
module.exports.updateById = function (req, res) {
    let id = req.params.subcategoryId
    let subcategoryName = req.body.subcategoryName
    let isActive = req.body.isActive
    let img = req.body.img
    SubcategoryModel.findByIdAndUpdate({ _id: id }, { img: img, subcategoryName: subcategoryName, isActive: isActive }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "roles...", status: 200, data: data });
        }
    })
}