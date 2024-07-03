let DanhMuc = require.main.require('./models/admin/danhmuc');

module.exports.index = (req, res)=> {
    DanhMuc.list((err, task)=> {

        console.log('controller')
        if (err)
            res.json(err);
        console.log('res', task);
        // res.json(task);
        return res.render('./DanhMuc/DanhSachDanhMuc',{
            TaiKhoan : task
        });
    });
};

module.exports.them = (req,res)=> {
    return res.render('./DanhMuc/ThemDanhMuc',{
    });
};
module.exports.thempost = (req,res)=>{
    let new_task = new DanhMuc(req.body);
    //handles null error
    if(!new_task.Ten_danhmuc ){
        // res.json(new_task);
        res.status(400).send({ error:true, message: 'Please provide task/status' });
    }
        // else{
        //     res.json(new_task);
    // }
    else{
        DanhMuc.them(new_task, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};