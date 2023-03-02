const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URI,{
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