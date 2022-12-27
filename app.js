const express=require('express');
const bodyParser=require("body-parser");
var app=express();
 
app.use(bodyParser.json());

const registration = require('./Rounting/registartionRouting');
const adminlogin=require('./Rounting/adminloginRouting');
const userlogin=require('./Rounting/userloginRouting')

app.use('/Registration',registration)
app.use('/AdminLogin',adminlogin)
app.use('/UserLogin',userlogin)
app.listen(3000,()=>{
    console.log("SERVER START")
})

