const { MessageEmbed } = require(`discord.js`);
const custom = require(`../custom.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`Support`)
    .setDescription(`Need help? You can either [access the documentation](https://yadob.jakobbouchard.dev) or [create an issue on GitHub](https://github.com/jakobbouchard/yadob/issues/new/choose).`);

  if (custom.embed.useAuthor) {
    embed.setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website);
  }
  if (custom.embed.useFooter) {
    embed.setFooter(custom.embed.footer);
  }

  message.channel.send(embed).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `support`,
  category: `Core`,
  description: `Links the documentation as well as the issue form on GitHub.`,
  usage: `support`
};
