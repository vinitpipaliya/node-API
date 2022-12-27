// var {lists} = require('./registationController');

// var {statu}=require('./registationController');

const fs = require('fs')
var flagLogin = false;
var flagstatus = false;

// exports.lists = list;

exports.viewData = (req, res) => {
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)
    if (flagLogin == false) {
        return res.json({ 'msg': 'Plz Login First.' });
    }
    return res.json({ 'list': data.userdata })
}

exports.loginApi = (req, res) => {
    // const{userName,password}=req.body;
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)

    if (data.admindata.userName == 'admin' && data.admindata.password == 'admin') {
        flagLogin = true;
        return res.json({ 'list': data.userdata })
    }
    else {
        return res.json({ 'msg': 'Enter correct userName and password.' })
    }
    // if(flagLogin==false)
    // {
    //     return res.json({'msg':'Plz Login First.'});
    // }
    // return res.json({'list':lists})
}

exports.changeStatus = (req, res) => {
    var { status, id } = req.body;
    var data = fs.readFileSync('data.json')
    var data = JSON.parse(data)
    if (flagLogin) {
        // status='confirm';
        // lists.statu='confirm'
        for (let i in data.userdata) {
            if (data.userdata[i].id == id) {
                // res.json({msg:'in for loop'})
                data.userdata[i].status = 'confirm'
                flagstatus = true;
                // res.json({msg:flagstatus})
            }
        }
        // status='confirm'
        var data = JSON.stringify(data)
        fs.writeFileSync('data.json', data)
        // res.json({ msg: "in condition " })
        return res.json({ 'list': data.userdata });
    }
    else {
        return res.json({ msg: "Login karo pehla" })
    }
}

exports.deleteRecord = (req, res) => {
    // const{name,number,email,password,bd}=req.body;
    const { id } = req.body;
    // let len=list.length;
    var data = fs.readFileSync("data.json");
    var data = JSON.parse(data);
    if (flagLogin == false) {
        return res.json({ msg: "Please login first" })
    }
    else {
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
};
exports.flagstatuss = flagstatus;