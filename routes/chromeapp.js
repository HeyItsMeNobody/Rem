var express = require('express');
var router = express.Router();
var discord = require('../discord');

router.post('/chrome', function(req, res) {
    var details = req.body.details
    var state = req.body.state
    var largeImageKey =  req.body.largeImageKey
    discord.setPresence(`On page: ${details}`, state, largeImageKey);
    res.json({ message: 'Set the message' });
    console.log(`Set activity as: On page: ${details}, ${state}, ${largeImageKey}`)
});

module.exports = router;