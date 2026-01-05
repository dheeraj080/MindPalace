//const express = require("express")

import express from "express";
import notes_routes from "./routes/notes_routes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001

connectDB()

app.use(express.json()) //middleware

app.use("/api/notes", notes_routes)

app.listen(PORT, () => {
    console.log("Server started on PORT ", PORT);

});

