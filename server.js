const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

//const database = require('/database');

const app = express();

//const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//database

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection sucessful.")
})

//import expense route
const expenseRoute = require('./routes/expenseRoutes');
app.use('/expense', expenseRoute);

//routes
app.use("expense", expenseRoute);

app.listen(3000, () => {
    console.log("server is running on port 3000");
})
