
async function handler(req, res){
    try{               
        return res.status(200).json({
           message: "hi"
        });        
    }  catch(e){
        console.log(e);
        return res.status(400).json({
            message: "error"            
        });        
    }
}


module.exports = handler;