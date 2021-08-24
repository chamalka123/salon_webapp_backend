const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    income_category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    amount: {
        Types: Number,
        required: true
    }
  });

const expense = mongoose.model("expenses",expenseSchema);

module.exports = expense;