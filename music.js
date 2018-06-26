const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client(); //replace client with what you want your Discord Client to be.
const settings = require('./settings.json'); //Load the token, prefix, and other info from a JSON file.

client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

// A random, empty map.
// This will contain the data for the prefixs.
// Note this has to be a map.
var mapper = new Map();
// A valid set of data needs an id and prefix in the object.
let mprop = {
  id: "387727240047230976",
  prefix: "click"
}
// Set the data into the map.
// Change be changed latter with the set command.
mapper.set('387727240047230976', mprop);

Music.start(client, {
  youtubeKey: "AIzaSyDWE7m3F-p4CUT2lv7oudtY5r2ryPNehXE",        // The youtube api key.
  prefix: "!",            // Prefix for the commands. Will be used for deafult prefix's for servers.
  botAdmins: ["294155759741304833"],  // List of ID's for admins (bypasses all permissions).
  advancedMode: {                     // The advancedMode object.
    enabled: true,                    // Master toggle for advancedMode.
    multiPrefix: true,                // multiple prefix toggle.
    serverPrefixs: mapObj             // Map object for server prefixs.
  }
});

client.login(process.env_BOT_TOKEN);
