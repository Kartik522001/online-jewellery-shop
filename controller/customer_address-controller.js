const customerAddressModel = require('../model/customer_address-model');

module.exports.addcustomerAddress = function (req, res) {
    let user = req.body.user;
    let address = req.body.address
    let state = req.body.state
    let city = req.body.city
    let pincode = req.body.pincode

    let customerAddress = new customerAddressModel({
        user: user,
        address: address,
        state: state,
        city: city,
        pincode: pincode
    })

    customerAddress.save(function (req, res) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: " Customer address save ", data: data, status: 200 })
        }
    })

}

module.exports.getAllcustomerAddress = function (req, res) {
    customerAddressModel.find().populate("user").populate("states").populate("city").exec(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Address ret... ", data: data, status: 200 })
        }
    })
}

module.exports.deletecustomerAddress = function (req, res) {
    let customerAddressId = req.params.customerAddressId;

    customerAddressModel.deleteOne({ "_id": customerAddressId }, function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Address delete", data: data, status: 200 })
        }
    })

}

module.exports.updatecustomerAddress = function (req, res) {
    let customerAddressId = req.body.customerAddressId
    let user = req.body.user;
    let address = req.body.address;
    let state = req.body.state
    let city = req.body.city
    let pincode = req.body.pincode

    customerAddressModel.updateOne({ _id: customerAddressId }, { user: user, address: address, state: state, city: city, pincode: pincode }, function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Address Update ", data: data, status: 200 })
        }
    })
}

module.exports.getById = function (req, res) {

    let id = req.params.custAddressId;

    UserModel.findById({ _id: id }).populate("states").populate("city").populate('user').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    })
}

module.exports.updateById = function (req, res) {

    let id = req.params.custAddressId;
    let address = req.body.address
    let pincode = req.body.pincode
    let user = req.body.user
    let state = req.body.state
    let city = req.body.state
    // let isActive = req.body.isActive


    UserModel.findByIdAndUpdate({ _id: id }, { address: address, pincode: pincode, user: user, state: state, city: city }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    })
}