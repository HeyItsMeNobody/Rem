var express = require('express');
var app = express();
var bodyParser = require('body-parser');
console.log(`express: requiring chromeRoute`);
var chromeRoute = require('./routes/chromeapp');

function expressFunc() {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.get('/', function(req, res) {
        res.json({ message: 'Front page of api? Wyd here?' });  
    });

    console.log(`express: put /api as chromeRoute`);
    app.use('/api', chromeRoute);

    app.listen(9999);
    console.log('Express api hosted at port *:9999');
}

module.exports = expressFunc;