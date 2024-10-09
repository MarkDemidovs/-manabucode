import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import cors from 'cors';
import AccountModel from './models/accountModel.js';
import Cookies from 'js-cookie'

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send("Welcome to ManabuCode!")
    
})

app.post('/account/sign', (req,res) => {
    AccountModel.create(req.body).then(Account => res.json(Account)).catch(err => res.json(err))
})

app.post('/account/login', (req,res) => {
    const {username, password} = req.body;
    AccountModel.findOne({username: username}).then(
        username=>{
            if(username){
                if(username.password === password) {
                    res.json("Success")
                    Cookies.set("auth", `${username}${password}`, {expires: 1})
                } else {
                    res.json("Incorrect Password")
                }
            } else {
                res.json("No username found")
            }
        }
    )
})
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})

mongoose.connect(mongoDBURL).then(()=>{
    console.log("connected to database!");
    
}).catch((err)=>{
    console.log(err);
})