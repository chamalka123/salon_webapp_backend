const router = require("express").Router();
const expense = require("../models/expenseModel");

router.route("/add").post((req, res)=>{
    const {date, income_category, description, amount} = req.body;

    const newExpense = new expense({
        date,
        income_category,
        description,
        amount
    })
    newExpense.save().then(() => {
        res.json("new expense added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    expense.find().then((expense)=>{
        res.json(expense)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {date, income_category, description, amount} =req.body;

    const updateexpense = {
        date,
        income_category,
        description,
        amount
    }

    const update = await expense.findByIdAndUpdate(userId,updateexpense)
    .then(() => {
    res.status(200).send({status: "Expense update"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await expense.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User delete"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await expense.findById(userId)
    .then((expense) => {
        res.status(200).send({status: "Expense fetched", expense});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get expense",error: err.message});
    })
})
module.exports = router;