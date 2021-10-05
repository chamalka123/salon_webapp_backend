const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();


const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//database

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useFindAndModify: false,
    //useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection sucessful.");
})

//import expense route
const expenseRouter = require("./routes/expenseRoutes.js");
app.use("/expense", expenseRouter);
//import employee route
const employeeRouter = require("./routes/employeeRoutes.js");
app.use("/employee", employeeRouter);



//import product route
const productRouter = require("./routes/productRoutes.js");
app.use("/product", productRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


