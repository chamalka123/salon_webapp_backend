const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    empId : {
        type : String,
        required: true
    },
    empName : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    jobTitle : {
        type: String,
        required: true
    },
    billableHours: {
        type: Number,
        required: true
    },
    availablehours : {
        type: Number,
        required: true
    }
    

}); 

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;