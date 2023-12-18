const express = require('express')
const moragn = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./Config/connectDB')
const router = require('./Routes/userRoutes')
dotenv.config()

//database connect
connectDB()


//restapi
const app = express()




//middlewears
app.use(moragn('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/',router)

const PORT = 8000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Runinng on PORT: ${PORT}`);
})