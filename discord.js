var config = require('./config.json');
var client = require('discord-rich-presence')(`${config.clientId}`);

function setPresence(details, state, largeImageKey) {
    client.updatePresence({
        details: details,
        state: state,
        largeImageKey: largeImageKey
    });
}

setInterval(function(){
    setPresence("N/A", "N/A");
}, 60000);

module.exports.setPresence = setPresence;