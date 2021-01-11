
const allowCors = require("./mw/cors.js");
const handleDB = require("./mw/db.js");
const Trackee = require("../models/trackee");
const validator = require("validator");

const handler = async (req, res) => {    
    try{        
        console.log(req.headers["x-forwarded-for"]);        

        let visitorIPAddress = req.headers["x-forwarded-for"];
        if(!validator.isIP(visitorIPAddress, 4)){
            console.log(`${visitorIPAddress} is not a valid ip address`);            
            visitorIPAddress = "0.0.0.0";
        }

        const latest = new Trackee({
            ip: visitorIPAddress,
            origin: "arbitrary"
        })

        const result = await latest.save();
        
        console.log(result);

        return res.status(200).json({
            proxy: req.headers["x-forwarded-for"],
            ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress || "nope",
            payload: req.headers.host            
        });           
    }catch(e){
        console.error(e);
        return res.status(400).json({
            error: e
        });        
    }
}

module.exports = allowCors(handleDB(handler));