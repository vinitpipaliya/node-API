const express = require("express")
const router = express.Router();

const { loginprofile } = require('../Controller/userLoginController')
const { checkName, checkEmail, checkNumber, checkPassword } = require('../Middleware/middleware')
const { updateRecord, deleteRecord } = require('../Controller/registationController')

router.post('/login', loginprofile)
router.put('/', checkName, checkEmail, checkNumber, checkPassword, updateRecord)
router.delete('/', deleteRecord)


module.exports = router