const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const cors = require("cors")
const connectDB = require('./database/connect')
const errorHandler = require("./middleware/errorsMiddleware")
const cookieParser = require("cookie-parser")
const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
dotenv.config({path:".env"})

app.use("/api/users",require("./routes/userRoutes"))

const PORT = process.env.PORT || 9000

app.use(errorHandler)
connectDB()

app.listen(PORT,() =>{
    console.log(`server started on http://localhost:${PORT}`)
})