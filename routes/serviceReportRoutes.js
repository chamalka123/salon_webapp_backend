const router = require("express").Router();
const { addServicereport,viewServicereport} = require('../controllers/servicereportcontroller.js')
 
//add new product
router.post('/add', addServicereport);
//view product
router.get('/', viewServicereport);

module.exports = router;