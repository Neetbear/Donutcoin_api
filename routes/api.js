const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const PORT = 9776;
const ACCOUNT = "parkisak";
const ID_STRING = "donutcoin_id";
const headers = {
    "content-type": "text/pliain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works"}));

router.get("/getblockcount", (req, res) => {
    var dataString = `{"jsonrpc":"1.0", "id":"${ID_STRING}", "method":"getblockcount", "params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@13.124.19.24:${PORT}`,
        method: "POST",
        headers: headers,
        body: dataString,
    };

    callback = (error, response, body) => {
        if(!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.send(data);
        } 
    };

    request(options, callback)
});

router.get("/getnetworkinfo", (req, res) => {
    var dataString = `{"jsonrpc":"1.0", "id":"${ID_STRING}", "method":"getnetworkinfo", "params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@13.124.19.24:${PORT}`,
        method: "POST",
        headers: headers,
        body: dataString,
    };

    callback = (error, response, body) => {
        if(!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.send(data);
        } 
    };

    request(options, callback)
});

router.get("/getaccountaddress", (req, res) => {
    var dataString = `{"jsonrpc":"1.0", "id":"${ID_STRING}", "method":"getaccountaddress", "params":["${ACCOUNT}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@13.124.19.24:${PORT}`,
        method: "POST",
        headers: headers,
        body: dataString,
    };

    callback = (error, response, body) => {
        if(!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.send(data);
        } 
    };

    request(options, callback)
});

router.get("/getaddressesbyaccount", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getaddressesbyaccount","params":["${ACCOUNT}"]}`;
    var options = {
      url: `http://${USER}:${PASS}@13.124.19.24:${PORT}/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
  
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
  });
  

module.exports = router;