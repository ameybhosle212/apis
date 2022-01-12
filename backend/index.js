const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')

mongoose.connect(process.env.Mongo_Url,{useUnifiedTopology: true}).then(()=>{
    console.log("DB CONNECTED");
})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",require("./routes/index"))
app.use("/crud",require("./routes/crud"))

app.listen(1001,()=>{
    console.log("SERVER AT 1001");
})