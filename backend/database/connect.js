const mongoose = require("mongoose")

const connectDB = () =>{
    try{
        mongoose.set('strictQuery',false);
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useCreateIndex:true,
            // useFindAndModify:false,
        })
        console.log('connected to database.')
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = connectDB