const fs = require("fs");
// var data = fs.readFileSync('data.json')
// var data = JSON.parse(data)
// if (data.userdata == null) {
//     const list = [];
// }
// else {
//     const list = data.userdata
// }


var data = fs.readFileSync("data.json")
// JSON.parse(data)
if (JSON.parse(data).userdata.length == 0) {
    var list = { counter: 1 };
}
else {
    data = JSON.parse(data)
    var lastElement = [...data.userdata].pop()

    // res.json({ msg: data.userdata.counter })
    var list = { counter: lastElement.counter }
}


// let status='pending';

// localStorage.setItem('list',JSON.stringify(list))

exports.viewRecord = (req, res) => {
    // return res.json({'list':list})
    var data = fs.readFileSync("data.json");
    var data = JSON.parse(data);
    return res.json({ list: data.userdata });
};

exports.insertRecord = (req, res) => {
    // res.json({ msg: "in insert" })
    const { name, number, email, password, bd } = req.body
    // let len=list.length
    var data = fs.readFileSync("data.json");
    var data = JSON.parse(data);
    res.json({ msg: list })
    // res.json({ msg: data.userdata.length })
    if (data.userdata.length == 0) {
        list.id = list.counter++
        list.name = name
        list.number = number
        list.email = email
        list.password = password
        list.status = "pending"
        list.bd = bd
        // data.userdata.id = list.counter++;
        // data.userdata.status = "pending";
        // list.push(data.userdata);
        // data.userdata.name = name
        // data.userdata.number = number
        // data.userdata.email = email
        // data.userdata.password = password
        // data.userdata.bd = bd
        // res.json({ msg: "in firts condition" })
        data.userdata.push(list)
        var data = JSON.stringify(data);
        fs.writeFileSync("data.json", data);
        return res.json({ msg: "Successfully data inserted." });
    }
    else {
        let flag = true;
        for (let i = 0; i < data.userdata.length; i++) {
            // for (let j = 0; j < data.userdata.length; j++) {
            // res.json({ msg: "in for loop" })
            if (data.userdata[i].email == email || data.userdata[i].number == number) {
                return res.json({ msg: "Try differnt number or email." });
            }
            // }
        }
        if (flag) {
            // id++;
            // list.push({name,number,email,bd,id,status})
            // for (let i = 0; i < data.userdata.length; i++) {
            list.name = name
            list.number = number
            list.email = email
            list.password = password
            list.bd = bd
            list.id = list.counter++
            list.status = "pending"
            // data.userdata[i].name = name
            // data.userdata[i].number = number
            // data.userdata[i].email = email
            // data.userdata[i].password = password
            // data.userdata[i].bd = bd
            // data.userdata[i].id = counter++;
            // data.userdata[i].status = "pending";
            // }
            data.userdata.push(list)
            var data = JSON.stringify(data);
            fs.writeFileSync("data.json", data);
            return res.json({ msg: "Successfully data inserted." });
        }
    }
    // localStorage.setItem('list',JSON.stringify(list))
};
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
            if (data.userdata[i].id == id) {
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
};

// exports.lists = list;
