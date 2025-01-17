require('dotenv').config({Path: './.env'})
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express()

( async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error)=>{
        console.log("ERRR:", error);
        throw error
    })
    app.listen(process.env.PORT, ()=> {
        console.log(`app is listening on ${process.env.PORT}`);
    })
}
catch(error){
    console.log("Error:", error)
    throw err
}

})()