//const express = require("express")

import express from "express";
import notes_routes from "./routes/notes_routes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rate_limiter from "./middleware/rate_limiter.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001

//middleware
app.use(express.json());
app.use(rate_limiter);

app.use((req, res, next) => {
    console.log(`Req method ${req.method} & Req URL ${ReadableByteStreamController.url}`);
    next();
})



app.use("/api/notes", notes_routes)
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT ", PORT);

    });
});
