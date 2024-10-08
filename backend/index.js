import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'

const app = express();

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send("Welcome to ManabuCode!")
    
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})

mongoose.connect(mongoDBURL).then(()=>{
    console.log("connected to database!");
    
}).catch((err)=>{
    console.log(err);
})