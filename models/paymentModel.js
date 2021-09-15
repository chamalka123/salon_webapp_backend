const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
   
   paymentId: String,
   discount: Number,
   paymentType: String,
   customername:String,
   amount:Number,
   date:Date,
   appointmentID: String
    
     

});


const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;
