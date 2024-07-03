// let user = require.main.require('./models/admin/taikhoan');
// module.exports={
//     index: (req,res)=>{
//         // res.render('./Admin/TaiKhoan/DanhSachTaiKhoan',{});
//         user.list((result)=>{
//             res.json(result);
//            // return res.render('./TaiKhoan/DanhSachTaiKhoan',{
//            //     TaiKhoan : result
//            // });
//         });
//     },
//     sua: (req,res)=>{
//         let data ={id: req.params.id} ;
//         user.edit(data, (result)=>{
//             return res.render('./Admin/TaiKhoan/SuaTaiKhoan',{
//                TaiKhoan: result
//             });
//         });
//     },
//     suapost: (req,res)=>{
//         let data ={id: req.params.id} ;
//         user.edit(data, (result)=>{
//             return res.render('./Admin/TaiKhoan/SuaTaiKhoan',{
//                 TaiKhoan: result
//             });
//         });
//     },
//     them: (req,res)=>{
//       res.render('./Admin/TaiKhoan/ThemTaiKhoan');
//     },
//     thempost: (req,res)=>{
//         let data = {
//             name: req.body.name,
//             HoTen: req.body.HoTen,
//             email: req.body.email,
//             password: req.body.password,
//             SDT: req.body.SDT,
//             gioitinh: req.body.gioitinh
//         };
//         console.log(data);
//         user.new(data,(result)=>{
//             if(result){
//                 res.redirect('/admin/dstaikhoan');
//             }
//         });
//     }
//     // about: (req,res)=>{
//     //     res.render('./Client/gioithieu',{});
//     // },
//
// };

let TaiKhoan = require.main.require('./models/admin/taikhoan');

module.exports.index = (req, res)=> {
    TaiKhoan.list((err, task)=> {

        console.log('controller')
        if (err)
            res.json(err);
        console.log('res', task);
        // res.json(task);
        return res.render('./TaiKhoan/DanhSachTaiKhoan',{
            TaiKhoan : task
        });
    });
};

module.exports.them = (req,res)=> {
    return res.render('./TaiKhoan/ThemTaiKhoan',{
    });
};
module.exports.thempost = (req,res)=>{
        let new_task = new TaiKhoan(req.body);
        //handles null error
        if(!new_task.name || !new_task.HoTen || !new_task.email || !new_task.password || !new_task.SDT || !new_task.gioitinh){
            // res.json(new_task);
            res.status(400).send({ error:true, message: 'Please provide task/status' });
        }
        // else{
        //     res.json(new_task);
        // }
        else{
            TaiKhoan.them(new_task, function(err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        }
};
module.exports.sua = (req,res)=> {
    TaiKhoan.listbyId(req.params.id, function (err,task){
        return res.render('./TaiKhoan/SuaTaiKhoan',{
            TaiKhoan : task
        });
    });
};
module.exports.suapost = (req,res)=>{
    let new_task = new TaiKhoan(req.body);
    //handles null error
    if(!new_task.name || !new_task.HoTen || !new_task.email || !new_task.password || !new_task.SDT || !new_task.gioitinh){
        // res.json(new_task);
        res.status(400).send({ error:true, message: 'Please provide task/status' });
    }
        // else{
        //     res.json(new_task);
    // }
    else{
        TaiKhoan.updateById(req.params.id,new_task, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};

module.exports.xoa = function (req,res){
    TaiKhoan.has(req.params.id,function (err,task){
       if(task.length<=0){
           res.status(400).send({ error:true, message: 'Invalid id user' });
       }
        TaiKhoan.remove( req.params.id, function(err, task) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' ,task: task});
        });
    });

};


// module.exports.suapost = (req,res)=>{
//     TaiKhoan.updateById(req.params.id, new TaiKhoan(req.body), function(err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
//     // if(!TaiKhoan.updateById(req.params.id,req.body)){
//     //     res.statusCode = 500;//internal server error
//     //     return res.json({
//     //         message: 'failed to update info'
//     //     });
//     // }
//     // return res.json({
//     //     message:'update info successful'
//     // });
// };

