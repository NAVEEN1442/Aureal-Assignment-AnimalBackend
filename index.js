// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const animalRoutes = require("./routes/animals");
const database = require("./config/database")
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());


// Routes
app.use("/api/v1", animalRoutes);
database.connect();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
