const mongoose = require("mongoose");

const trackeeSchema = mongoose.Schema({
    ip: String,
    origin: String,
    path: String    
}, {
    timestamps: {
        createdAt: "created_at"
    }
});

module.exports = mongoose.model("Trackee", trackeeSchema);