const allowCors = require("./mw/cors.js");

const handler = (req, res) => {    
    try{
        const {email} = req.body;

        res.status(200).json({
            success: `Email of '${email}' added.`
        }); 
        return;
    }catch(e){
        res.status(400).json({
            details: e
        });
        return;
    }
}

module.exports = allowCors(handler);