const { MessageEmbed } = require(`discord.js`);
const custom = require(`../custom.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`Pong!`)
    .setDescription(`Pinging...`)

  if (custom.embed.useAuthor) {
    embed.setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website);
  }
  if (custom.embed.useFooter) {
    embed.setFooter(custom.embed.footer);
  }

  message.channel.send(embed)
    .then(msg => {
      embed.setDescription(`The latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
      msg.edit(embed);
    })
    .catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `ping`,
  category: `Core`,
  description: `Outputs the bot’s latency to Discord’s servers.`,
  usage: `ping`
};
