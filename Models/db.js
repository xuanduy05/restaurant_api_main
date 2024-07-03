let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'restaurant_api'
});
connection.connect(function(err) {
    if (err){
        console.log(err);
        //throw err;
    } else {
        console.log('DB connected :)');
    }
});
module.exports=connection;
//
// module.exports={
//     connection,
//     insertData: function(sql,param,callback){
//         console.log(param);
//         if(param==null)
//         {
//             connection.query(sql,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//
//         }
//         else
//         {
//             connection.query(sql,param,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//         }
//
//     },
//     getAllData: function(sql,callback){
//
//         connection.query(sql,function(error,result){
//             if(error)
//             {
//
//                 callback(null);
//
//             }
//             else
//             {
//                 callback(result);
//             }
//         });
//     },
//     getData : function(sql,param,callback){
//         if(param==null)
//         {
//             connection.query(sql,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//
//         }
//         else
//         {
//             connection.query(sql,param,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//         }
//
//     },
//
//
//     deleteData : function(sql,param,callback){
//
//         if(param==null)
//         {
//             connection.query(sql,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//
//         }
//         else
//         {
//             connection.query(sql,param,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//         }
//
//     },
//     updateData : function(sql,param,callback){
//         if(param==null)
//         {
//             connection.query(sql,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//         }
//         else
//         {
//             connection.query(sql,param,function(error,result){
//                 if (error) {
//                     callback(null);
//                 }
//                 else
//                 {
//                     callback(result);
//                 }
//             });
//         }
//     }
// };
