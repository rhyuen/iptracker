const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
    email: String,
    origin: String    
}, {
    timestamps: {
        createdAt: "created_at"
    }
});

module.exports = mongoose.model("Email", emailSchema);