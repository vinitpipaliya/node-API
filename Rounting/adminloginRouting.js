const express=require("express");
const router = express.Router();

const{viewData, loginApi,changeStatus}=require('../Controller/adminLoginController');
const{deleteRecord}=require('../Controller/registationController')
const { checkAdmin } = require("../Middleware/middleware");

router.get('/',viewData);
router.post('/login',loginApi)
router.put('/',changeStatus)
router.delete('/',deleteRecord)
// router.post('/',insertData);
module.exports=router;