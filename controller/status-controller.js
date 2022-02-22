const StatusModel = require("../model/status-model")

//db insert state
module.exports.addStatus = function (req, res) {
    // console.log(req.body.stateName);

    let state = new StatusModel({
        status: req.body.status
    })
    state.save(function (err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Status added", status: 200, data: success })

        }
    })
}


module.exports.getAllStatus = function (req, res) {
    StatusModel.find(function (err, States) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "status...", status: -1, data: States })
        }
    })
}

module.exports.deleteStatus = function (req, res) {
    let statusId = req.params.statusId;

    StatusModel.deleteOne({ "_id": statusId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Status Delete...", status: -1, data: data })
        }
    })
}


module.exports.updateStatus = function (req, res) {

    let statusId = req.params.statusId
    let status = req.body.status

    StatusModel.updateOne({ _id: statusId }, { status: status }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "status Update...", status: 200, data: data })
        }
    })
}