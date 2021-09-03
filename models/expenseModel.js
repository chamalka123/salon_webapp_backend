const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

    date: Date,
    income_category: String,
    description: String,
    amount: Number
  });

const expenses = mongoose.model("expense",expenseSchema);

module.exports = expenses;