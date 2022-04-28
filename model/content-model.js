const mongoose = require("mongoose")

//schema

let ContentSchema = new mongoose.Schema({
    Name: {
        type: String
    },

    email: {
        type: String
    },

    Description: {
        type: String
    }

})

//model

let ContentModel = mongoose.model("contactus", ContentSchema)
module.exports = ContentModel