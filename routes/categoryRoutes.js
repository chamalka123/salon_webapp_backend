const router = require("express").Router();
const category = require("../models/categoryModel");


router.route("/add").post((req, res)=>{
    const {name} = req.body;

    const newCategory = new category({
        name
    })
    newCategory.save(function(err){
        if(!err){
            res.send("sucessfully added.");
        }else{
            res.send(err);
        }
    })
})

router.route("/").get((req,res)=>{

    category.find().then((category)=>{
        res.json(category)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {name} =req.body;

    const updatecategory = {
        name
    }

    const update = await category.findByIdAndUpdate(userId,updatecategory)
    .then(() => {
    res.status(200).send({status: "Category update"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await category.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await categroy.findById(userId)
    .then((category) => {
        res.status(200).send({status: "Category fetched", category});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get data",error: err.message});
    })
})
module.exports = router;