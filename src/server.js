import express, { request, response } from "express";
import "dotenv/config"
import { config } from "./config/app.config.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true
}))


// Main test End Point
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "End Point Work"
    })
})

app.listen(config.PORT, async () => {
    console.log(`Server is Running on Port ${config.PORT}`);    
})