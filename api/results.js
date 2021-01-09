const mongoose = require("mongoose");
const allowCors = require("./mw/cors.js");
const Trackee = require("../models/trackee.js");

async function handler(req, res){
    try{
        const {db} = process.env;
        await mongoose.connect(db, {
            useNewUrlParser:true, 
            useUnifiedTopology: true
        });

        const result = await Trackee.find({});

        res.status(200).json({
            path: "/results",
            count: result.length,
            data: result
        });
        return;
    }  catch(e){
        res.status(400).json({
            path: "/results",
            error: e
        });
        return;
    }
}


module.exports = allowCors(handler);