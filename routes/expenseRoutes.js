const router = require("express").Router();
const expense = require("../models/expenseModel");

//getting current date
/*let day = Date.now();

let date_ob = new Date(day);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// YYYY-MM-DD format
let currentDate = year + "-" + month + "-" + date;*/


router.route("/add").post((req, res)=>{
    const {date, income_category, description, amount} = req.body;

    const newExpense = new expense({
        date,
        income_category,
        description,
        amount
    })
    newExpense.save(function(err){
        if(!err){
            res.send("sucessfully added a new expense.");
        }else{
            res.send(err);
        }
    })
})

/*router.route("/").get((req,res)=>{

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
})*/
module.exports = router;