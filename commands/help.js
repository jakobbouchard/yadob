module.exports = (message, commandList) => {
  const Discord = require('discord.js');
  const {prefix} = require('../config.json');
  const helpEmbed = new Discord.MessageEmbed()
  .setColor('#18bc9c')
  .setTitle('YADOB Help')
	.setDescription('You can access the documentation here: https://yadob.jakobbouchard.dev')
  .addField('Commands', listCommands())
  .setTimestamp()
  .setFooter('YADOB');
  
  function listCommands() {
    let result = '';
    commandList.forEach(function(item) {
      result += `**${prefix+item}**\n`;
    })
    return result;
  }
  message.channel.send(helpEmbed).catch(e => console.log(e));
}