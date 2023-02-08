const mongoose = require ('mongoose')

const db = async()=>{
    try{
        const connection = await mongoose.connect('mongodb://0.0.0.0:27017/eventManagement',{
            useNewUrlParser :true,
            useUnifiedTopology:true
        })
        console.log('Mongodb connected successfully');
    }
    catch(error){
        console.log('====>', error);
    }
}

module.exports = db;










