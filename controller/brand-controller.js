const BrandModel = require("../model/brand-model")


module.exports.addBrands = function (req, res) {


    console.log(req.body.brandName);


    let brand = new BrandModel({
        brandName: req.body.brandName
    })

    brand.save(function (err, success) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Something went wrong", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Brand added", status: 200, data: success })
        }
    })

}

module.exports.getAllBrand = function (req, res) {
    //REST 
    BrandModel.find(function (err, brands) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "brands show", status: 200, data: brands })

        }

    })

}

module.exports.deleteBrand = function (req, res) {
    let brandId = req.params.brandId


    BrandModel.deleteOne({ "_id": brandId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Brand Delete", status: 200, data: data })
        }
    })

}


module.exports.updateBrand = function (req, res) {
    let brandId = req.body.brandId
    let brandName = req.body.brandName

    BrandModel.updateOne({ _id: brandId }, { brandName: brandName }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Brand Update", status: 200, data: data })
        }
    })

}

module.exports.getById = function (req, res) {

    let id = req.params.brandId;


    BrandModel.findById({ _id: id }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "roles...", status: 200, data: data });
        }
    })
}

module.exports.updateById = function (req, res) {

    let id = req.params.brandId
    let brandName = req.body.brandName

    BrandModel.findByIdAndUpdate({ _id: id }, { brandName: brandName }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "roles...", status: 200, data: data });
        }
    })
}