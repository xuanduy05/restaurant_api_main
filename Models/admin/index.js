let db = require('../db');

module.exports={
    productlist: (callback)=>
    {
        let sql='SELECT * FROM product';

        db.getAllData(sql,(result)=>{
            if(result.length==0 || result==null)
            {
                callback(false);
            }
            else
            {
                callback(result);
            }
        });
    },
}