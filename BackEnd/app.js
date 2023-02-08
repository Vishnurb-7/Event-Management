const express = require('express')
const mongoose = require('mongoose')

const path = require('path')
const cors = require('cors')

const dbconfig = require('./config/dbConfig')

const userRouter = require('./router/userRouter')
const providerRouter = require('./router/providerRouter')
const adminRouter = require('./router/adminRouter')

const app = express()

app.use(cors());

dbconfig()

app.use(function(req,res,next){
    res.set(
        "Cache-Control",
      "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
    );
    next();
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
                  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();

})

app.use("/",userRouter);
app.use("/provider",providerRouter);
app.use("/admin",adminRouter);

app.get("*",(req,res,next)=>{
    res.send("ALL DONE !!!");
})

app.listen(8080,()=>{
    console.log("listening to port 8000");
})