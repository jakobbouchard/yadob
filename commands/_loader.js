const Discord = require('discord.js');
const fileSystem = require('fs');

module.exports = client => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
  fileSystem.readdir(__dirname, (err, files) => {
    if (err) {
      return console.error('[ERROR] Unable to scan directory: ' + err);
    }
  
    let commandFiles = files.filter(file => file.split(".").pop() === "js")
    if(commandFiles.length <= 0) {
      return console.log("[LOG] No commands were found.")
    }

    commandFiles.forEach((file) => {
      if (file != '_loader.js') {
        let command = require(`${__dirname}\\${file}`);
        client.commands.set(file.replace('.js', ''), command);
        console.log(`[LOG] Command loaded - ${file}`);
      }
    })
  })
}