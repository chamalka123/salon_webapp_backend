const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

    date: {
      type: Date,
      require: true
    },
    income_category: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    amount: {
      type: Number,
      require: true
    }
  });

const expense = mongoose.model("expense",expenseSchema);

module.exports = expense;