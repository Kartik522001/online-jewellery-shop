const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")

//add [ POST ]
module.exports.addUser = function (req, res) {

    let userName = req.body.userName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role


    let user = new UserModel({
        userName: userName,
        email: email,
        password: password,
        role: role
    })



    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateById = function (req, res) {

    let id = req.params.userId;
    let username = req.body.username
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role


    UserModel.findByIdAndUpdate({ _id: id }, { username: username, email: email, password: password, role: role }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    })
}

module.exports.getById = function (req, res) {

    let id = req.params.userId;


    UserModel.findById({ _id: id }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "users...", status: 200, data: data });
        }
    })
}

//delete
module.exports.deleteUser = function (req, res) {
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({ _id: userId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//login 
module.exports.login = function (req, res) {

    let param_email = req.body.email
    let param_password = req.body.password

    let isCorrect = false;

    UserModel.findOne({ email: param_email }, function (err, data) {
        if (data) {
            let ans = bcrypt.compareSync(param_password, data.password)
            if (ans == true) {
                isCorrect = true
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })

}