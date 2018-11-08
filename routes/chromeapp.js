var express = require('express');
var router = express.Router();
var discord = require('../discord');

console.log(`express chromeroute: using /api/chrome as api for setting presence`);
router.post('/chrome', function(req, res) {
    var details = req.body.details
    var state = req.body.state
    var largeImageKey =  req.body.largeImageKey
    discord.setPresence(`On page: ${details}`, state, largeImageKey);
    res.json({ message: 'Set the message' });
});

module.exports = router;