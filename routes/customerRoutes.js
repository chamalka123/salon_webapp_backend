const router = require("express").Router();
const customer = require("../models/customermodel");

router.route("/").get((req,res)=>{

    customer.find().then((customer)=>{
        res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/add").post((req,res)=>{
    console.log("requesttt", req.body);

    const custId = req.body.custId;
    const name = req.body.name;
    const age = Number(req.body.age);
    const sex = req.body.sex;
    const Date_of_birth = req.body.Date_of_birth;
    const Phone_number = Number(req.body.Phone_number);
    const Email_address = req.body.Email_address;
    const password = req.body.password

    const newCustomer = new customer({

        custId,
        name,
        age,
        sex,
        Date_of_birth,
        Phone_number,
        Email_address,
        password
    })

    newCustomer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })
    })

    router.route("/delete/:id").delete(async (req,res) => {
        let custId  = req.params.id;
    
        await customer.findByIdAndDelete(custId)
        .then(() => {
            res.status(200).send({status: "deleted"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with deleting", error: err.message})
        })
    
    })

    router.route("/update/:id").put(async (req,res) => {
        let custmId = req.params.id;
        const {custId, name, age, sex, Date_of_birth, Phone_number, Email_address,password} =req.body;
    
        const updatecustomer = {
            custId,
            name,
            age,
            sex,
            Date_of_birth,
            Phone_number,
            Email_address,
            password
        }
    
        const update = await customer.findByIdAndUpdate(custmId,updatecustomer)
        .then(() => {
        res.status(200).send({status: "User update"})
     }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
     })
    
    })

    router.route("/get/:id").get(async (req, res) => {
        let custId = req.params.id;
        const custm = await customer.findById(custId)
        .then((customer) => {
            res.status(200).send({status: "User fetched", customer});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with get user",error: err.message});
        })
    })

    router.route("/get/:email").get((req, res) => {

        let email = req.params.email;
        customer.findOne({Email_address:email})
        .then((customer1) => {
           res.status(200).send({status: " User fetched", customer1})
       }).catch(() => {
            console.log(err.message);
            res.status(500).send({status:"Error with get user" , error: err.message})
       })
   })

    router.route("/signin").post((req,res) => {
        const custId = req.body.custId;
        const name = req.body.name;
        const age = Number(req.body.age);
        const sex = req.body.sex;
        const Date_of_birth = req.body.Date_of_birth;
        const Phone_number = Number(req.body.Phone_number);
        const Email_address = req.body.Email_address;
        const password = req.body.password
        
            const newCustomer = new customer ({
                custId,
                name,
                age,
                sex,
                Date_of_birth,
                Phone_number,
                Email_address,
                password
        
            })
         if(!Email_address || !password){
             res.status(422).json({error:"Please add email or password"})
         }
          customer.findOne({Email_address:Email_address})
          .then(savedCustomer =>{
              if(!savedCustomer){
                 return  res.status(422).json({error:"Invalid Email or Password"})
        
              }
        
              customer.findOne({password:password})
              .then(savedCustomer =>{
                if(savedCustomer){
                     {/* res.json({message:"successfully signed in"}) */}
        
                     res.json(savedCustomer);
                    
                    
                  }
                  else{
                      return res.status(422).json({error:"Invalid Email or Password"})
                  }
              })
            .catch(err=>{
                console.log(err)
            })
        
          })
        })

    module.exports = router;
