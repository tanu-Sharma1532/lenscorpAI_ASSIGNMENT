const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/Auth");
const { createemployee, getemployee } = require("../controllers/getemployee");
const {auth} = require('../middlewares/auth')

router.post("/signup",signup);
router.post("/login",login);
router.post("/addemp" ,auth,createemployee);
router.get("/employee",auth,getemployee);

module.exports = router;