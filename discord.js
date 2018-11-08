var config = require('./config.json');
var client = require('discord-rich-presence')(`${config.clientId}`);

console.log(`discord: added setpresence function`);
function setPresence(details, state, largeImageKey) {
    client.updatePresence({
        details: details,
        state: state,
        largeImageKey: largeImageKey
    });
    if (largeImageKey) console.log(`Set activity as: On page: ${details}, ${state}, ${largeImageKey}`);
    else console.log(`Set activity as: On page: ${details}, ${state}`);
}

console.log(`discord: added setpresence interval`);
setInterval(function(){
    setPresence("N/A", "N/A");
}, 60000);

module.exports.setPresence = setPresence;