const express = require("express");
const router = express.Router();

const { viewRecord, insertRecord, updateRecord, deleteRecord } = require("../Controller/registationController");
const { checkEmail, checkNumber, checkName, checkPassword } = require("../Middleware/middleware");


router.get('/', viewRecord);
router.post('/', checkEmail, checkNumber, checkName, checkPassword, insertRecord);
router.put('/', checkName, updateRecord)
router.delete('/', deleteRecord)


module.exports = router;