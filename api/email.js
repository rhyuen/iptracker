const allowCors = require("./mw/cors.js");
const handleDB = require("./mw/db.js");
const validator = require("validator");
const Email = require("../models/email.js");

const handler = async (req, res) => {    
    try{
        if(req.method !== "POST"){
            res.status(400).json({
                details: "only POSTS are allowed at this endpoint."
            });
            return;        
        }

        const {email} = req.body;

        if(!validator.isEmail(email)){
            return res.status(400).json({
                message: `${email} is not a valid email address`
            });
        }

        const latestEmail = new Email({
            email: email,
            origin: "localhost"
        })

        const result = await latestEmail.save();

        res.status(200).json({            
            success: `Email of '${email}' added.`,
            description: result
        }); 
        return;
    }catch(e){
        res.status(400).json({
            details: e
        });
        return;
    }
}

module.exports = allowCors(handleDB(handler));