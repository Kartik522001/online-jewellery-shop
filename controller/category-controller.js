const CategoryModel = require("../model/category-model")


module.exports.addCategories = function (req, res) {
    //db insert role

    console.log(req.body.categoryName);


    let category = new CategoryModel({
        categoryName: req.body.categoryName,
        img: req.body.img
    })

    category.save(function (err, success) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Something went wrong", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "category added", status: 200, data: success })
        }
    })

}

module.exports.getAllCategories = function (req, res) {
    //REST 
    CategoryModel.find(function (err, category) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "categories...", status: 200, data: category })

        }

    })

}

module.exports.deleteCategory = function (req, res) {
    let categoryId = req.params.categoryId


    CategoryModel.deleteOne({ "_id": categoryId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: data })
        }
    })

}


module.exports.updateCategory = function (req, res) {


    let categoryId = req.body.categoryId
    let categoryName = req.body.categoryName
    let img = req.body.img

    CategoryModel.updateOne({ _id: categoryId }, { categoryName: categoryName, img: img }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}

module.exports.getById = function (req, res) {
    let id = req.params.categoryId;

    CategoryModel.findById({ _id: id }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    });
};

module.exports.updateById = function (req, res) {
    let id = req.params.categoryId;
    let categoryName = req.body.categoryName;
    let img = req.body.img

    CategoryModel.findByIdAndUpdate(
        { _id: id },
        { categoryName: categoryName, img: img },
        function (err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err });
            } else {
                res.json({ msg: "users...", status: 200, data: data });
            }
        }
    );
};