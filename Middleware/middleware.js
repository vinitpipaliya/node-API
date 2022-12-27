const { lists } = require("../Controller/registationController");
const fs = require('fs');
const { json } = require("express");

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
var passw = /^[A-Za-z]\w{7,14}$/;

exports.displayy = (req, res, next) => {
    return res.json({ 'list': lists });

}

exports.checkEmail = (req, res, next) =>  //create
{
    const { email } = req.body;
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)
    // for(let i=0;i<data.userdata.length;i++){
    if (email.match(validRegex)) {
        // res.json({ msg: "in checkemail" })
        next();
    }
    else {
        return res.status(403).send({ message: "Email plz enter proper.." });
    }
    // }
}
exports.checkNumber = (req, res, next) => {
    const { number } = req.body;
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)
    // for(let i=0;i<data.userdata.length;i++){
    // return res.json({data:data})
    // res.json({ msg: number.match(re) })
    if (number.match(re)) {
        // res.json({ msg: "in checknumber" })
        next();
    }
    else {
        return res.status(404).send({ message: "Please enter proper number." })
    }
    // }
}
exports.checkName = (req, res, next) => {
    const { name } = req.body;
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)
    // for (let i = 0; i < data.userdata.length; i++) {
    if (name.length >= 3) {
        // res.json({ msg: "in checkname" })
        next();
    }
    else {
        return res.status(405).send({ message: "Please enter upto 3 character in name." })
    }
    // }
}
exports.checkPassword = (req, res, next) => {
    const { password } = req.body;
    // var data = fs.readFileSync('data.json')
    // var data = JSON.parse(data)
    // for(let i=0;i<data.userdata.length;i++){
    // res.json({ msg: password })
    if (password.match(passw)) {
        // res.json({ msg: "in checkpassword" })
        next();
    }
    else {
        return res.status(406).send({ message: "Please enter valid password and upto 6 character." })
    }
    // }
}
// exports.checkAdmin=(req,res,next,flagLogin)=>{
//     const{userName,password}=req.body;
//     if(userName=='admin' && password=='admin'){
//         flagLogin=true
//         next(flagLogin);
//     }
//     else{
//         return res.status(407).send({message:"Please enter valid username and password"})
//     }
// }