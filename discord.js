var config = require('./config.json');
var client = require('discord-rich-presence')(`${config.clientId}`);

console.log(`discord: added setpresence function`);
function setPresence(details, state, largeImageKey) {
    client.updatePresence({
        details: details,
        state: state,
        largeImageKey: largeImageKey
    });
}

console.log(`discord: added setpresence interval`);
setInterval(function(){
    setPresence("N/A", "N/A");
}, 60000);

module.exports.setPresence = setPresence;