let MonAn = require.main.require('./models/admin/monan');
module.exports.index = (req, res)=> {
    console.log('controller')
    MonAn.list((err, task)=> {

        console.log('controller')
        if (err)
            res.json(err);
        console.log('res', task);
        res.json(task);
        // return res.render('./MonAn/DanhSachMonAn',{
        //     MonAn : task
        // });
    });
};
module.exports.them = (req,res)=> {
    return res.render('./MonAn/ThemMonAn',{
    });
};
module.exports.thempost = (req,res)=>{
    let new_task = new MonAn(req.body);
    //handles null error
    if(!new_task.Ten_monan || !new_task.Mo_ta || !new_task.Gia || !new_task.Hinhanh){
        // res.json(new_task);
        res.status(400).send({ error:true, message: 'Please provide task/status' });
    }
    //     else{
    //         res.json(new_task);
    // }
    else{
        MonAn.them(new_task, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};
module.exports.sua = (req,res)=> {
    MonAn.listbyId(req.params.id, function (err,task){
        return res.render('./MonAn/SuaMonAn',{
            MonAn : task
        });
    });
};
module.exports.suapost = (req,res)=>{
    let new_task = new MonAn(req.body);
    //handles null error
    if(!new_task.Ten_monan || !new_task.Mo_ta || !new_task.Gia || !new_task.Hinhanh){
        // res.json(new_task);
        res.status(400).send({ error:true, message: 'Please provide task/status' });
    }
        // else{
        //     res.json(new_task);
    // }
    else{
        MonAn.updateById(req.params.id,new_task, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};

module.exports.xoa = function (req,res){
    MonAn.has(req.params.id,function (err,task){
        if(task.length<=0){
            res.status(400).send({ error:true, message: 'Invalid id user' });
        }
        MonAn.remove( req.params.id, function(err, task) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' ,task: task});
        });
    });

};
module.exports.search = function (req,res){
    // let item1 = req.body.label;
    let tensearch = req.params.name;
    // let newtask = req.body.task;
    // console.log(tensearch+" "+newtask);
    MonAn.search(tensearch,function (err,task){
        if (err)
            res.json(err);
        console.log('res', task);
        res.json(task);
        // return res.render('./MonAn/DanhSachMonAn',{
        //     MonAn : task
        // });
    });
}