const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
    .connect("mongodb://localhost:27017/apartmentLifeSubmit", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error(err, "Could not connect to MongoDB..."));

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));