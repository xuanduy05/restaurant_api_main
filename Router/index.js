let express = require('express');
let resRouter = express.Router();
const admin = require.main.require('./controllers/admin/index');
const taikhoan = require.main.require('./controllers/admin/TaikhoanControllers');
const monan = require.main.require('./controllers/admin/MonAnControllers');
const danhmuc = require.main.require('./controllers/admin/DanhMucControllers');
// resRouter.get('/admin',admin.index);
// resRouter.get('/admin/dstaikhoan',taikhoan.index);
// resRouter.get('/admin/suataikhoan/:id?',taikhoan.sua);
// resRouter.post('/admin/suataikhoan/:id?',taikhoan.suapost);
// resRouter.get('/admin/themtaikhoan',taikhoan.them);
// resRouter.post('/admin/themtaikhoan',taikhoan.thempost);
resRouter.route('/admin')
    .get(admin.index);
resRouter.route('/admin/dstaikhoan')
    .get(taikhoan.index);
// resRouter.route('/admin/themtaikhoan')
//     .get(taikhoan.them)
//     .post(taikhoan.thempost);
resRouter.route('/admin/themtaikhoan')
    .get(taikhoan.them)
    .post(taikhoan.thempost);
resRouter.route('/admin/suataikhoan/:id')
    .get(taikhoan.sua)
    .put(taikhoan.suapost)
    .delete(taikhoan.xoa);


resRouter.route('/admin/dsmonan')
    .get(monan.index);
resRouter.route('/admin/themmonan')
    .get(monan.them)
    .post(monan.thempost);
resRouter.route('/admin/suamonan/:id')
    .get(monan.sua)
    .put(monan.suapost)
    .delete(monan.xoa);
resRouter.route('/admin/search/:name')
    .get(monan.search);

resRouter.route('/admin/dsdanhmuc')
    .get(danhmuc.index);
module.exports = resRouter;