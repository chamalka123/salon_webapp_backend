const Service = require("../models/serviceReportModel");
//add new service
exports.addServicereport = async (req, res) => {
 
    //constant variables for the attributes
    const {serviceName, price,date,count,totalPrice} = req.body;
   
    //object
    const newServicereport= new Service({
      //initializing properties
      serviceName,
      price,
      date,
      count,
      totalPrice
    })
   
    //saving the object to the db 
    newServicereport.save().then(() => {
      res.status(200).json({ status: "New onr Added" });
    }).catch((error) => {
      res.status(500).json({message:"Fail to Add Item",error:error.message})
    })
  }

  
//view 
exports.viewServicereport= async (req, res) => { 
 
    //calling Service model
    Service.find().then((serviceReport) => {
      res.status(200).json(serviceReport)
    }).catch((error) => {
      res.status(500).json({ message: "Error with fetching", error: error.message });
    })
  }