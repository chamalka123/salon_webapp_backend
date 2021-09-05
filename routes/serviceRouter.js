
const router = require("express").Router();
const service = require("../models/serviceModel");


router.route("/add").post((req, res)=>{
    const {service_id, title, price, duration, content, images, category} = req.body;

    const newService = new service({
        service_id,
        title,
        price,
        duration,
        content,
        images,
        category
    })
    newService.save(function(err){
        if(!err){
            res.send("sucessfully added.");
        }else{
            res.send(err);
        }
    })
})

router.route("/").get((req,res)=>{

    service.find().then((service)=>{
        res.json(service)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {title, price, content, images, category} =req.body;

    const updateservice = {
        title,
        price,
        content,
        images,
        category
    }

    const update = await service.findByIdAndUpdate(userId,updateservice)
    .then(() => {
    res.status(200).send({status: "Service updated"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await service.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await service.findById(userId)
    .then((service) => {
        res.status(200).send({status: "Service fetched", service});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get data",error: err.message});
    })
})
module.exports = router;