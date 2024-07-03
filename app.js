//Declaration
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let expressSession = require('express-session');
const path = require("path");
let port = 20466;
let resRouter = require('./router/index');
//Configure
app.set('view engine','ejs');
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json({
//     type: 'application/json'
// }));
app.use(expressSession({secret: 'My secret',resave: false,saveUninitialized: true}));

app.use(express.static(path.join(__dirname, './Asset')));

app.use('/restaurant',resRouter);
app.get('/',(req,res) =>{
    return res.redirect('/restaurant');
});
//Server setup
app.listen(port, () => {
    console.log('Server started at: 127.0.0.1:'+port);
});