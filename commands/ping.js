module.exports = (client, message, params) => {
  let pingEmbed = {
    color: 0x18bc9c,
    title: 'Ping',
    description: 'Pinging...',
    author: {
      name: 'YADOB',
      icon_url: 'https://i.imgur.com/wSTFkRM.png',
      url: 'https://yadob.jakobbouchard.dev',
    }
  };
  message.channel.send({ embed: pingEmbed })
    .then((msg) => {
      let newPingEmbed = {
        color: pingEmbed.color,
        title: pingEmbed.title,
        description: `The latency is ${Date.now() - msg.createdTimestamp}ms.`,
        author: pingEmbed.author
      };
      msg.edit({ embed: newPingEmbed })
    })
    .catch(e => console.log(e))
}