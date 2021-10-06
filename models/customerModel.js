const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({

    custId : {
        type : String,
        required: true
    },

    name : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    sex : {
        type : String,
        required: true
    },
    Date_of_birth : {
        type : String,
        required: true
    },
    Phone_number : {
        type : Number,
        required: true
    },
    Email_address : {
        type : String,
        required: true
    }

})

const customer = mongoose.model("customer",CustomerSchema);

module.exports = customer;

