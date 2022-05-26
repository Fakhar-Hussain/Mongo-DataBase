const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
    credit:{
        type: String,
        required: true 
    }
})

module.exports = mongoose.model("credit" , creditSchema)