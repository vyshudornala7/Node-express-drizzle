
import express from "express"; // module import
// const express = require("express"); // comonjs import
import dotenv from "dotenv"; //loads environment variables from a .env file into process.env
import coursesRouter from "./routers/coursesRouter.js";
import lessonsRouter from "./routers/lessonsRouter.js";
import authRouter from "./routers/authRouter.js";
import cookieParser from "cookie-parser";


dotenv.config(); //TODO:  resolve the issue with path inside config

const PORT = process.env.PORT;

const app = express();


app.use(express.json())  // to accept the body from every req
app.use(cookieParser())  // accept the cookies from every req

app.get("/health",(req, res,next) => {
    res.status(200).json ({
        success:true,
        data:null,
        message:"server is healthy!"
    })
})

// add all the routers to the middleware (app.use())
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/courses",coursesRouter)
app.use("/api/v1/lessons",lessonsRouter)


app.listen (PORT, () => {
    console.log("HTTP server has been started! at port:",PORT)
})