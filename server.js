const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

//database

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection sucessful.");
})

//import expense route
const expenseRouter = require("./routes/expenseRoutes.js");
app.use("/expense", expenseRouter);

// import category route
// const categoryRouter = require("./routes/categoryRoutes.js");
// app.use("/category", categoryRouter);
// import service route
const serviceRouter = require("./routes/serviceRouter.js");
app.use("/service", serviceRouter);

//import employee route
const employeeRouter = require("./routes/employeeRoutes.js");
app.use("/employee", employeeRouter);

//import payment route
const paymentRouter = require("./routes/paymentRoutes.js");
app.use("/payment", paymentRouter);




//import product route
const productRouter = require("./routes/productRoutes.js");
app.use("/product", productRouter);

//import customer route
const customerRouter = require("./routes/customerRoutes.js");
app.use("/customer", customerRouter);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

  
})
