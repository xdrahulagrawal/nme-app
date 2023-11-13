import express from "express";

const registerRoute = express.Router();

registerRoute.post('/', (req, res) => {
    console.log('register route');
})

export default registerRoute;