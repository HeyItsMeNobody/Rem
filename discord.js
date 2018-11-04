var client = require('discord-rich-presence')('508670321835114506');

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