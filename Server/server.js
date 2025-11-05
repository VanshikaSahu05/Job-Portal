import './config/instrument.js'
import 'dotenv/config' 
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

// import connectDB from './config/db.js';

// Initialize  express

const app = express();

const dBurl = process.env.MONGODB_URI;

async function connectDB() {
    try{
        await mongoose.connect(dBurl);
        console.log("connected");
    }
    catch(err){
        console.log("err",err);
        process.exit(1);
    }
}

// connect to database
await connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/',(req,res)=>res.send("API working"))

// port 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log('Server is running on port:' + PORT);
})