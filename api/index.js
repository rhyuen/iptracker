
const allowCors = require("./mw/cors.js");
const Trackee = require("../models/trackee");
const mongoose = require("mongoose");

const handler = async (req, res) => {    
    try{
        const d = new Date();
        console.log(req.headers["x-forwarded-for"]);

        const {db} = process.env;

        await mongoose.connect(db, {
            useNewUrlParser:true, 
            useUnifiedTopology: true
        });

        const latest = new Trackee({
            ip: req.connection.remoteAddress,
            origin: "arbitrary"
        })

        const result = await latest.save();

        console.log(latest);
        console.log(result);

        return res.status(200).json({
            proxy: req.headers["x-forwarded-for"],
            ip: req.connection.remoteAddress || "nope",
            payload: req.headers.host, 
            date: d.toString()
        });   
    }catch(e){
        console.error(e);
        return res.status(400).json({
            error: e
        });
    }
}

module.exports = allowCors(handler);