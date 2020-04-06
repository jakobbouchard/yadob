const { MessageEmbed } = require(`discord.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`About the bot`)
    .setDescription(`[YADOB](https://yadob.jakobbouchard.dev) is a Discord.js bot created and maintained by [Jakob Bouchard](https://jakobbouchard.dev).`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`)
    .setFooter(`YADOB © Jakob Bouchard ${new Date().getFullYear()}`);

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
