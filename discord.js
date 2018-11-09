var config = require('./config.json');
var RPClient = require('discord-rich-presence')(`${config.RPClientId}`);
var Discord = require('discord.js');
var DClient = new Discord.Client();

// RPC Stuff
console.log(`discord: added setpresence function`);
function setPresence(details, state, largeImageKey) {
    RPClient.updatePresence({
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

// discord.js stuff
if (config.BotClientToken == "") return console.log(`discord: no BotClientToken so not using discord bot`);
if (!config.BotClientToken) return console.log(`discord: no BotClientToken so not using discord bot`);
DClient.on('ready', () => {
    console.log(`discord: logged bot in as ${DClient.user.tag}`);
});
DClient.on('message', msg => {
    if (msg.author.tag == `nobody#0384`) {
        if (msg.deletable == true) {
            msg.channel.send(msg.content);
            msg.delete();
        }
    }
});
DClient.login(config.BotClientToken);