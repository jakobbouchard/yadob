module.exports = (message) => {
  const supportEmbed = {
    color: 0x18bc9c,
    title: 'Support',
    author: {
      name: 'YADOB',
      icon_url: 'https://i.imgur.com/wSTFkRM.png',
      url: 'https://yadob.jakobbouchard.dev',
    },
    description: `Need help? You can either [access the documentation](https://yadob.jakobbouchard.dev) or [create an issue on GitHub](https://github.com/jakobbouchard/yadob/issues/new/choose).`
  }

  message.channel.send({ embed: supportEmbed }).catch(e => console.log(e));
}