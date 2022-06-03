const mongoose = require("mongoose");
const creditSchema = new mongoose.Schema({
    amount:{
        type: String,
        required: true 
    },
    profiletype:{
        type: String,
        required: true 
    },
    customerId:{
        type: String,
        required: true 
    },
    date:{ 
        type : String,
        required: true 
    }
})

module.exports = mongoose.model("credit" , creditSchema)
