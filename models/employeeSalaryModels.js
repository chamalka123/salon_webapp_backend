const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSalarySchema = new Schema({

    empId : {
        type : String,
        required: true
    },
    empName : {
        type: String,
        required: true
    },
    jobTitle : {
        type: String,
        required: true
    },
    basicSalary: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },

    payOTRate : {
        type: String,
        required: true
    },
    payOTHours : {
        type: String,
        required: true
    },
    deductions: {
        type: String,
        required: true
    },
    totalSalary : {
        type: String,
        required: true
    }
    

}); 

const employeeSalary = mongoose.model("employeeSalary",employeeSalarySchema);

module.exports = employeeSalary;