// var {lists}=require('./registationController')
// var  {flagstatuss}=require('./adminLoginController')
const fs = require('fs')

exports.loginprofile = (req, res) => {
    const { email, password } = req.body;
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)
    // res.json({msg:flagstatuss})
    // if(flagstatuss){
    for (let i in data.userdata) {
        if (data.userdata[i].email == email && data.userdata[i].password == password && data.userdata[i].status == 'confirm') {
            return res.json({ msg: "Login successful.", 'list': data.userdata[i] })
        }
        else {
            return res.json({ msg: "Your status is pending." })
        }
    }
    // }
}
exports.updateRecord = (req, res) => {
    const { name, number, email, password, bd } = req.body;
    const { id } = req.body;
    // let len=list.length
    var data = fs.readFileSync("data.json");
    var data = JSON.parse(data);
    if (data.userdata.length == 0) {
        res.json({ msg: "List is empty!!!" });
    } else {
        let flag = true;
        for (let i = 0; i < data.userdata.length; i++) {
            if (data.userdata[i].id == id && data.userdata[i].status == 'confirm') {
                data.userdata[i].name = name;
                data.userdata[i].bd = bd;
                data.userdata[i].number = number;
                data.userdata[i].email = email;
                data.userdata[i].password = password;
                var data = JSON.stringify(data);
                fs.writeFileSync("data.json", data);
                return res.json({ msg: "Your data is successfully updated." });
            }
            // if(list[i].id==id){
            //     for(let j in list[i]){
            //         list[i].j=j;
            //     }
            //     return res.json({msg:"Your data is successfully updated."})
            // }
        }
        if (flag) {
            res.json({ msg: "Please enter valid number or email or password" });
        }
    }
};
exports.deleteRecord = (req, res) => {
    // const{name,number,email,password,bd}=req.body;
    const { id } = req.body;
    // let len=list.length;
    var data = fs.readFileSync("data.json");
    var data = JSON.parse(data);
    for (let i in data.userdata) {
        if (data.userdata[i].status == 'confirm') {
            if (data.userdata.length == 0) {
                res.json("List is empty");
            } else {
                let flag = true;
                for (let i = 0; i < data.userdata.length; i++) {
                    if (data.userdata[i].id == id) {
                        data.userdata.splice(i, 1);
                        var data = JSON.stringify(data);
                        fs.writeFileSync("data.json", data);
                        return res.json({ msg: "Successfully Deleted." });
                    }
                }
                if (flag) {
                    return res.json({ msg: "Please enter valid id." });
                }
            }
        }
        else {
            return res.json({ msg: "Your status is pending" })
        }
    }
};