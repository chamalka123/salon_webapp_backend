const router = require("express").Router();
let payment = require('../models/paymentModel');

router.route("/add").post((req,res)=>{

    console.log("request", req.body);
    
    const paymentId = req.body.paymentId;
    const discount =Number(req.body.discount);
    const paymentType =req.body.paymentType;
    const customername = req.body.customername;
    const amount =Number(req.body.amount);
    const date =Date(req.body.date);
    const appointmentID =req.body.appointmentID;

    const newpayment = new payment({
        
        paymentId, 
        discount,
        paymentType,
        customername,
        amount,
        date,
        appointmentID
    })

    console.log("newPayment", newpayment);
    newpayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{
    console.log("get all payment")
    payment.find().then((payment)=>{
        res.json(payment)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    const Id =req.params.id;
    console.log("paymentID",Id);
    console.log("dataaa", req.body);
    const{paymentId,discount,paymentType,customername,amount,date,appointmentID} = req.body;
    
    const updatePayment ={
        paymentId,
        discount,
        paymentType,
        customername,
        amount,
        date,
        appointmentID
    }
    
const update = await payment.findOneAndUpdate({paymentId: Id},updatePayment)
.then(()=>{
    res.status(200).send({status: "Updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data", error: err.massage});
})
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId =req.params.id;

    await payment.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with deleting data", error: err.massage});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id;
    const user= await Payment.findById(userId).then(()=>{
        res.status(200).send({status: "fetched", payment:payment})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with getting data", error: err.massage});
    })
})
module.exports = router;


