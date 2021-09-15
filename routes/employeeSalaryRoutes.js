const router = require("express").Router();

let employeeSalary = require("../models/employeeSalaryModels");

router.route("/add").post((req,res)=>{

    const empId = req.body.empId;
    const empName = req.body.empName;
    const jobTitle = req.body.jobTitle;
    const basicSalary = req.body.basicSalary;
    const month = req.body.month;
    const payOTRate = req.body.payOTRate;
    const payOTHours = req.body.payOTHours;
    const deductions = req.body.deductions;
    const totalSalary = req.body.totalSalary;
   

    const newemployeeSalary = new employeeSalary({

        empId,
        empName,
        jobTitle,
        basicSalary,
        month,
        payOTRate,
        payOTHours,
        deductions,
        totalSalary
    })

    newemployeeSalary.save().then(()=>{
        res.json("Salary infromation Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    employeeSalary.find().then((employeeSalary)=>{
        res.json(employeeSalary)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {empId, empName, jobTitle, basicSalary, month, payOTRate, payOTHours, deductions, totalSalary} =req.body;

    const updateemployeeSalary = {
        empId,
        empName,
        jobTitle,
        basicSalary,
        month,
        payOTRate,
        payOTHours,
        deductions,
        totalSalary
    }

    const update= await employeeSalary.findByIdAndUpdate(userId,updateemployeeSalary)
    .then(() => {
    res.status(200).send({status: "salary information is updated"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await employeeSalary.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Salary information is deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await employeeSalary.findById(userId)
    .then((employeeSalary) => {
        res.status(200).send({status: "salary information is fetched", employeeSalary});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;