let db = require('../db');
let DanhMuc = function (task) {
    console.log(task);
    this.Ten_danhmuc = task.Ten_danhmuc;

    //this.idDanhMuc = task.idDanhMuc;
};

DanhMuc.list = function list(result) {
    db.query("SELECT * FROM danhmuc", (err, res) => {
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
DanhMuc.them = function them(newTask, result){
    db.query("INSERT INTO danhmuc set ?", newTask, function (err, res) {

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
module.exports = DanhMuc;