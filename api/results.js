const allowCors = require("./mw/cors.js");
const handleDB = require("./mw/db.js");
const Trackee = require("../models/trackee.js");

async function handler(req, res){
    try{        
        const result = await Trackee.find({});

        res.status(200).json({
            path: "/results",
            count: result.length,
            data: result
        });
        return;
    }  catch(e){
        console.log(e);
        res.status(400).json({
            path: "/results",
            error: e
        });
        return;
    }
}


module.exports = allowCors(handleDB(handler));