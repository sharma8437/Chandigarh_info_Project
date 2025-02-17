const  Jwt = require('jsonwebtoken') 
require('dotenv').config()


const userAuth = async (req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message:" Not Authorized. Login Again"})
    }

    try {

        const tokenDecode =  Jwt.verify(token, process.env.JWT_SECTRET)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({success: false, message:'Not Authorized. Login Again'})
        }
        next();
        
    } catch (error) {
        return res.json({success:false, message:`server error ${error.message}`})
        
    }
}

module.exports= userAuth;