const Discord = require('discord.js');
const fileSystem = require('fs');
const log = require('../util/log.js');

module.exports = client => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
  fileSystem.readdir(__dirname, (err, files) => {
    if (err) {
      return log.error(`Unable to scan directory: ${err}`);
    }
  
    let commandFiles = files.filter(file => file.split('.').pop() === 'js')
    if(commandFiles.length <= 0) {
      return log.warn('No commands were found.')
    }

    commandFiles.forEach((file) => {
      if (file != '_loader.js') {
        let command = require(`${__dirname}\\${file}`);
        client.commands.set(file.replace('.js', ''), command);
        log.info(`Command loaded - ${file}`);
      }
    })
  })
}