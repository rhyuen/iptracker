const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
    email: String,
    origin: String    
}, {timeStamps: true});

module.exports = mongoose.model("Email", emailSchema);