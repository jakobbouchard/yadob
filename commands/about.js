const { MessageEmbed } = require(`discord.js`);
const custom = require(`../custom.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`About the bot`)
    .setDescription(`This bot is based on [YADOB](https://yadob.jakobbouchard.dev), a Discord.js bot created and maintained by [Jakob Bouchard](https://jakobbouchard.dev).`)
    .setThumbnail(custom.botInfo.thumbnail);

  if (custom.embed.useAuthor) {
    embed.setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website);
  }
  if (custom.embed.useFooter) {
    embed.setFooter(custom.embed.footer);
  }

  message.channel.send({ embed }).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `about`,
  category: `Core`,
  description: `About the bot.`,
  usage: `about`
};
