// create a simple nodejs express server
var express = require('express');
var app = express();
// create a simple router
var router = express.Router();
// create a simple route
router.get('/', function(req, res) {
    res.send('Hello World!');
    });
