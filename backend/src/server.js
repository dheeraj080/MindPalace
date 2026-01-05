//const express = require("express")

import express from "express";
import notes_routes from"./routes/notes_routes.js"


const app = express();

app.use("/api/notes", notes_routes)

app.listen(5001, () => {
    console.log("Server started on PORT 5001");

});
