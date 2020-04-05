const { MessageEmbed } = require(`discord.js`);
const log = require('../util/log.js');

exports.run = async (client, message, args) => {
  const nickname = args.join(` `);
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`Nickname`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`)

  if (!nickname.length) {
    embed.setDescription(`Please enter a nickname.`);
  } else if (nickname.length > 32) {
    embed.setDescription(`A nickname must be between 1 and 32 characters.`);
  } else if (nickname === 'clear') {
    message.guild.me.setNickname('')
      .then(() => {
        embed.setDescription(`Nickname cleared!`);
        log.info(`Nickname cleared in guild ${message.guild}!`)
      })
      .catch(err => log.error(err))
  } else {
    message.guild.me.setNickname(nickname)
      .then(() => {
        embed.setDescription(`Nickname changed to ${nickname}!`);
        log.info(`Nickname changed to ${nickname} in guild ${message.guild}!`)
      })
      .catch(err => log.error(err))
  };

  message.channel.send(embed).catch(err => log.error(err));
}

exports.settings = {
  enabled: true,
  dmUse: false
};

exports.info = {
  name: `nickname`,
  description: `Changes or clears the bot's nickname.`,
  usage: `nickname <nickname | clear>`
};