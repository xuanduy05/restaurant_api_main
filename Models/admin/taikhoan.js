let db = require('../db');
let TaiKhoan = function (task) {
    console.log(task);
    this.name = task.name;
    this.HoTen = task.HoTen;
    this.email = task.email;
    this.password = task.password;
    this.SDT = task.SDT;
    this.gioitinh = task.gioitinh;
};

TaiKhoan.list = function list(result) {
    db.query("SELECT * FROM users", (err, res) => {
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
TaiKhoan.them = function them(newTask, result){
    db.query("INSERT INTO users set ?", newTask, function (err, res) {

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
TaiKhoan.listbyId = function (id,result){
  db.query("SELECT * FROM users WHERE id = ?",[id],function (err,res){
      if(err) {
          console.log("error: ", err);
          result(null, err);
      }
      else{
          result(null, res);
      }
  });
};
TaiKhoan.updateById = function (id, task, result){
    db.query("UPDATE users SET name = ?,HoTen = ?,email = ?,password = ?,SDT = ?,gioitinh = ? WHERE id = ?", [task.name,task.HoTen,task.email,task.password,task.SDT,task.gioitinh, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
TaiKhoan.has = function (id,result){
    db.query("SELECT * FROM users WHERE id = ?",[id],function (err,res){
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
TaiKhoan.remove = function (id,result){
    db.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};


// module.exports={
//     list: (callback)=>
//     {
//         let sql='SELECT * FROM users';
//
//         db.getAllData(sql,(result)=>{
//             if(result.length==0 || result==null)
//             {
//                 callback(false);
//             }
//             else
//             {
//                 callback(result);
//             }
//         });
//     },
//     edit: (data, callback)=>{
//         let sql = 'SELECT * FROM users WHERE id =?';
//         let param = [data.id];
//
//         db.getData(sql,param,(result)=>{
//             if(result.length==0 || result==null)
//             {
//                 callback(false);
//             }
//             else
//             {
//                 callback(result);
//             }
//         });
//     },
//     new : (data,callback)=>{
//         let sql = "INSERT INTO `users`( `name`, `HoTen`, `email`, `password`, `SDT`, `gioitinh`) VALUES (?,?,?,?,?,?)";
//         let param = [
//             data.name,
//             data.HoTen,
//             data.email,
//             data.password,
//             data.SDT,
//             data.gioitinh
//         ];
//         db.insertData(sql,param,(result)=>{
//             if(result.length==0 || result==null)
//             {
//                 callback(false);
//                 console.log(sql);
//             }
//             else
//             {
//                 console.log(sql);
//                 callback(true);
//             }
//         });
//     }
// }
module.exports = TaiKhoan;