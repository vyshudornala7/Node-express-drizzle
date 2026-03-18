
import express from "express"; // module import
// const express = require("express"); // comonjs import
import dotenv from "dotenv"; //loads environment variables from a .env file into process.env
import path from "path";
console.log(path.resolve(process.cwd(), '.env'))

dotenv.config(); //TODO
const PORT = process.env.PORT;

// console.log(process.env.PORT)
//console.log(import.meta.env) //vite react application

const app = express();
console.log("hello")



app.post("/:id/hello" , (request,response) => {
    const params = request.params;
    response.status(200).json({
        message:"Home Route Registered / POST",
        params:params
    })
})

app.get("/:id" , (request,response) => {
     const params = request.params;
    response.status(200).json({
        message:"Home Route Registered / GET",
        params:params
    })
})

app.post("/vaishnavi" , (request,response) => {
    response.status(200).json({
    message:"Home Route Registered / vaishnavi  POST",
        
    })
})

// http://localhost:8000/health-check

app.get("/health-check", (request,response) => {
    response.status(200).json({
        "message": "Welcome to backend class!"
    })
})

// responsible for starting up http server on port number:
app.listen(PORT, () => console.log("server is running at port :", PORT));


