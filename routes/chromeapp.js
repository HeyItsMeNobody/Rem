var express = require('express');
var router = express.Router();
var discord = require('../discord');
var config = require('../config.json');
var request = require('request');

console.log(`express chromeroute: using /api/chrome as api for setting presence`);
router.post('/chrome', function(req, res) {
    var details = req.body.details
    var state = req.body.state
    var largeImageKey =  req.body.largeImageKey
    if (details == "youtube.com") {
        if (config.YoutubeDataApiv3Key) {
            var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${state.replace("www.youtube.com/watch?v=", "")}&key=${config.YoutubeDataApiv3Key}`;
            request({url: url, json: true}, function (error, response, body) {
                if (body.items[0] == undefined) {
                    discord.setPresence(`On page: ${details}`, `N/A`, largeImageKey);
                } else {
                    var title = body.items[0].snippet.title
                    discord.setPresence(`On page: ${details}`, `Video: ${title}`, largeImageKey);
                }
            });
        } else discord.setPresence(`On page: ${details}`, `Video: No YT api key`, largeImageKey);
    } else {
        discord.setPresence(`On page: ${details}`, state, largeImageKey);
    }
    res.json({ message: 'Set the message' });
});

module.exports = router;