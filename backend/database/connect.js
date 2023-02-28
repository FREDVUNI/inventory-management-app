const mongoose = require("mongoose")

const connectDB = () =>{
    try{
        mongoose.connect(process.env,MONGO_URI,{
            useUnifiedTopology:true,
            useCreateIndex:true,
            useNewUrlParser:true
        })
        console.log('connected to database.')
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = connectDB