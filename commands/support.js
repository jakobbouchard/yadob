const { MessageEmbed } = require(`discord.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`Support`)
    .setDescription(`Need help? You can either [access the documentation](https://yadob.jakobbouchard.dev) or [create an issue on GitHub](https://github.com/jakobbouchard/yadob/issues/new/choose).`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`)

  message.channel.send(embed).catch(err => log.error(err));
}

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `support`,
  description: `Links the documentation as well as the issue form on GitHub.`,
  usage: `support`
};