module.exports = (message) => {
  let params = message.content.toLowerCase().split(' ').slice(1).toString();
  let nicknameEmbed = {
    color: 0x18bc9c,
    title: 'Nickname',
    author: {
      name: 'YADOB',
      icon_url: 'https://i.imgur.com/wSTFkRM.png',
      url: 'https://yadob.jakobbouchard.dev',
    }
  };
  if (params.length <= 32) {
    message.guild.me.setNickname(params)
      .then(nicknameEmbed.description = `Nickname changed to ${params}!`)
      .catch(console.error)
  } else if (params == 'clear') {
    message.guild.me.setNickname()
      .then(nicknameEmbed.description = `Nickname cleared!`)
      .catch(console.error)
  } else if (params.length > 32) {
      nicknameEmbed.description = `A nickname must be between 1 and 32 characters.`;
  } else {
    nicknameEmbed.description = `Please enter a nickname or \`clear\` to remove the nickname.`;
  };

  message.channel.send({ embed: nicknameEmbed }).catch(e => console.log(e));
}