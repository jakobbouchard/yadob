const log = require('../util/log.js');
module.exports = (client, message, params) => {
  params = params.toString();
  let nicknameEmbed = {
    color: 0x18bc9c,
    title: 'Nickname',
    author: {
      name: 'YADOB',
      icon_url: 'https://i.imgur.com/wSTFkRM.png',
      url: 'https://yadob.jakobbouchard.dev',
    }
  };
  if (!params.length) {
    nicknameEmbed.description = `Please enter a nickname.`;
  } else if (params.length > 32) {
    nicknameEmbed.description = `A nickname must be between 1 and 32 characters.`;
  } else if (params == 'clear') {
    message.guild.me.setNickname('')
      .then(() => {
        nicknameEmbed.description = `Nickname cleared!`;
        log.info(`Nickname cleared in guild ${message.guild}!`)
      })
      .catch(err => log.error(err))
  } else {
    message.guild.me.setNickname(params)
      .then(() => {
        nicknameEmbed.description = `Nickname changed to ${params}!`;
        log.info(`Nickname changed to ${params} in guild ${message.guild}!`)
      })
      .catch(err => log.error(err))
  };

  message.channel.send({ embed: nicknameEmbed }).catch(err => log.error(err));
}