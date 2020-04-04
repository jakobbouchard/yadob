const Discord = require('discord.js');
const fileSystem = require('fs');

// fs.readdir(__dirname, function (err, files) {
//   if (err) {
//     return console.error('Unable to scan directory: ' + err);
//   }
//   console.log(`Loading a total of ${files.length} commands.`);
//   files.forEach(function (file) {
//     exports[file.replace('.js', '')] = require(`${__dirname}\\${file}`);
//     console.log(`Command Loaded! ${file}`);
//   });
// });

module.exports = client => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
  fileSystem.readdir(__dirname, (err, files) => {
    if (err) {
      return console.error('[ERROR] Unable to scan directory: ' + err);
    }
  
    let commandFiles = files.filter(file => file.split(".").pop() === "js")
    if(commandFiles.length <= 0) {
      return console.log("[LOGS] No commands were found.")
    }

    commandFiles.forEach((file) => {
      let command = require(`${__dirname}\\${file}`);
      client.commands.set(file.replace('.js', ''), command);
      // command.config.aliases.forEach(alias =>{
      //   client.aliases.set(alias, command.config.name)
      // })
      console.log(`[LOG] Command loaded - ${file}`);
    })
  })
}