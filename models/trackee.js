const mongoose = require("mongoose");

const trackeeSchema = mongoose.Schema({
    ip: String,
    origin: String    
}, {timeStamps: true});

module.exports = mongoose.model("Trackee", trackeeSchema);