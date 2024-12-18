const jwt=require("jsonwebtoken")
const client = require("../Models/Client")
const env = require('dotenv');
env.config();

const isAuth = async (req,res,next) =>{
    try {
        const token = req.body.headers.authorization        
        if(!token) {
            return res.status(400).send({msg:'not authorized!'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const foundClient = await client.findOne({_id: decoded._id})
        if (!foundClient){
            return res.status(400).send({msg:'not authorized!'})
        }
        req.client=foundClient
        next()
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
    module.exports = isAuth 