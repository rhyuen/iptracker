const allowCors = require("./mw/cors.js");

const handler = (req, res) => {    
    try{
        const {email} = req.body;

        res.status(200).json({
            success: `Email of '${email}' added.`
        }); 
    }catch(e){
        res.status(400).json({
            details: e
        });
    }
}

module.exports = allowCors(handler);