const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("dotenv").config()
const connectDB = require("./config/connectDB.js")
const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')


const port = process.env.PORT || 4000;

const app = express()
// const allowedOrigin = ['https://chandigarh-info.netlify.app']

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin: 'https://chandigarh-info.netlify.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  };
  app.use(cors(corsOptions));




//routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)



//db connection
connectDB()


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

