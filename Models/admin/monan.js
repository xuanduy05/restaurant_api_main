let db = require('../db');
let MonAn = function (task) {
    console.log(task);
    this.Ten_monan = task.Ten_monan;
    this.Mo_ta = task.Mo_ta;
    this.Hinhanh = task.Hinhanh;
    this.Gia = task.Gia;
    //this.idDanhMuc = task.idDanhMuc;
};

MonAn.list = function list(result) {
    db.query("SELECT * FROM monan", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
MonAn.them = function them(newTask, result){
    db.query("INSERT INTO monan set ?", newTask, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

MonAn.listbyId = function (id,result){
    db.query("SELECT * FROM monan WHERE id = ?",[id],function (err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
MonAn.updateById = function (id, task, result){
    db.query("UPDATE users SET Ten_monan = ?,Mo_ta = ?,Hinhanh = ?, Gia = ? WHERE id = ?", [task.Ten_monan,task.Mo_ta,task.Hinhanh,task.Gia, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
MonAn.has = function (id,result){
    db.query("SELECT * FROM monan WHERE id = ?",[id],function (err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tasks : ', res);
            result(null,res);
        }
    });
};
MonAn.remove = function (id,result){
    db.query("DELETE FROM monan WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};
MonAn.search = function (ten,result){
    let ten1 = '%'+ten+'%';
    db.query("SELECT * FROM monan WHERE Ten_monan LIKE ?",[ten1],function (err,res){
        // console.log(item+" "+ten+" "+task);
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tasks : ', res);
            result(null,res);
        }
    });
}
module.exports = MonAn;