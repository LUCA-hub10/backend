const express = require("express");
const connect = require("./ConnectToDB/Connect");
const env = require("dotenv")
const cors=require("cors");


const app = express();
env.config()
const PORT = process.env.PORT
app.listen(PORT,(error)=>{
    try {
        console.log(`server is running on PORT ${PORT}`)
    } catch (error) {
        console.error(error);
    }
})

//middleWare
app.use(express.json())
const corsOptions ={ origin:'*', credentials:true,optionSuccessStatus:200, } 
app.use(cors(corsOptions))

connect()
app.use("/api/client",require("./Routes/Client"))
app.use("/api/product",require("./Routes/Products"))  