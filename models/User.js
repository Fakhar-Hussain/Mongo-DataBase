const mongoose = require("mongoose");

const boxSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Box" , boxSchema)


