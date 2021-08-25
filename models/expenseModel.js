const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    income_category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        Types: Number,
        required: true
    }
  });

const expense = mongoose.model("expense",expenseSchema);

module.exports = expense;