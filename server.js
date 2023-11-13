import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import registerRoute from "./src/auth/register/registerRoute.js";

//Dotenv
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


const app = express();

// Middleware
app.use(express.json());

// Enable CORS for specific host
app.use(cors({
    origin: ["http://localhost:8000"]
}))

//Routes
app.use('/api/register',registerRoute);

const port = process.env.PORT 

app.listen(port, (req, res) => {
    console.log(`Server start at port ${port} and env is ${process.env.NODE_ENV}`);
})