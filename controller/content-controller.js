const ContactusModel = require("../model/content-model")


module.exports.addMessage = function (req, res) {
    //db insert role

    console.log(req.body.Name);
    console.log(req.body.email);
    console.log(req.body.Description);

    let contactus = new ContactusModel({
        Name: req.body.Name,
        email: req.body.email,
        Description: req.body.Description,
        // Date: req.body.Date,
    })

    contactus.save(function (err, success) {
        if (err) {
            // console.log(err)
            res.json({ msg: "Some Error!!!", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Your Query added", status: 200, data: success })
        }
    })

}

module.exports.getAllMessage = function (req, res) {
    //REST 
    ContactusModel.find(function (err, contactus) {
        if (err) {

            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Messages are..", status: 200, data: contactus })

        }

    })

}

module.exports.deleteMessage = function (req, res) {
    let contactusId = req.params.contactusId


    ContactusModel.deleteOne({ "_id": contactusId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: data })
        }
    })

}


module.exports.updateMessage = function (req, res) {


    let contactusId = req.body.contactusId
    let Name = req.body.Name
    let email = req.body.email
    let Description = req.body.Description



    ContactusModel.updateOne({ _id: contactusId }, { Name: Name, email: email, Description: Description }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Your query updated...", status: 200, data: data })
        }
    })

}