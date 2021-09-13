const mongoose = require('mongoose');

const budgetPlanSchema = new mongoose.Schema({

    month: String,
    description: String,
    estimate: String,
    actual: String,
    total: Number,
    balance: Number
  });


const budgetPlan = mongoose.model("budgetPlan",budgetPlanSchema);

module.exports = budgetPlan;