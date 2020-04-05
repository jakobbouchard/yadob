const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(0xFFFF00)
    .addField('About The Bot', `YADOB is a bot created and maintained by Jakob Bouchard. It is written with Discord.js.`)
    .setFooter(`© YADOB by Jakob Bouchard`);

  message.channel.send({ embed }).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: 'about',
  description: 'About the bot.',
  usage: 'about'
};