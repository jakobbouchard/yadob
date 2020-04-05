const { MessageEmbed } = require(`discord.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`Ping`)
    .setDescription(`Pinging...`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`)

  message.channel.send(embed)
    .then((msg) => {
      embed.setDescription(`The latency is ${Date.now() - msg.createdTimestamp}ms.`)
      msg.edit(embed)
    })
    .catch(err => log.error(err))
}

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `ping`,
  description: `Outputs the bot's latency to Discord's servers.`,
  usage: `ping`
};