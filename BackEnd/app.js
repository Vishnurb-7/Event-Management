const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
// const dbconfig = require('./config/dbConfig')

const userRouter = require('./router/userRouter')
const providerRouter = require('./router/providerRouter')
const adminRouter = require('./router/adminRouter')

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// dbconfig()
mongoose.set('strictQuery',false)
mongoose.connect('mongodb://localhost:27017/eventManagement')

app.use(function(req,res,next){
    res.set(
        "Cache-Control",
      "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
    );
    next();
})


// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers",
//                   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     next();

// })

app.use("/",userRouter);


app.listen(8080,()=>{
    console.log("listening to port 8080");
})