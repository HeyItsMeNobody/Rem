var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var discord = require('./discord');
var chromeRoute = require('./routes/chromeapp');

function expressFunc() {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.get('/', function(req, res) {
        res.json({ message: 'Front page of api? Wyd here?' });  
    });

    app.use('/api', chromeRoute);

    app.listen(9999);
    console.log('Api hosted at port *:9999');
}

module.exports = expressFunc;