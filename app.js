var express = require('express');
const bodyParser = require('body-parser');
const rpcMethods = require('./routes/api');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const PORT = 9776;
const ACCOUNT = "kbpark";
const ID_STRING = "kigacoin_id";
const headers = {
    "content-type": "text/pliain;"
};

app.use("/", rpcMethods);

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/stop', function (req, res) {  
    res.render('stop');
});
  
app.post('/stop_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"stop","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

    callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.send(data);
    }};
    
    request(options, callback);
});

app.listen(3000, function() {
    console.log("kigacoin API Tutorial is running apt http://localhost:3000/");
});
