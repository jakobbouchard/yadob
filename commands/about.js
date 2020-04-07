const { MessageEmbed } = require(`discord.js`);
const custom = require(`../custom.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`About the bot`)
    .setDescription(`[${custom.botInfo.name}](${custom.botInfo.website}) is based on [YADOB](https://yadob.jakobbouchard.dev), a Discord.js bot created and maintained by [Jakob Bouchard](https://jakobbouchard.dev).`)
    .setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website)
    .setFooter(custom.embed.footer);

  message.channel.send({ embed }).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `about`,
  description: `About the bot.`,
  usage: `about`
};
