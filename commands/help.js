module.exports = (message, commandList) => {
  const {prefix} = require('../config.json');
  const helpEmbed = {
    color: 0x18bc9c,
    title: 'Help',
    author: {
      name: 'YADOB',
      icon_url: 'https://i.imgur.com/wSTFkRM.png',
      url: 'https://yadob.jakobbouchard.dev',
    },
    description: `Here are all the commands you can use.
                  You can also [access the documentation](https://yadob.jakobbouchard.dev)
                  \u200b`,
    fields: [
      {
        name: 'Commands',
        value: listCommands(),
      },
    ]
  }
  
  function listCommands() {
    let result = '';
    commandList.forEach(function(item) {
      result += `**${prefix+item}**\n`;
    })
    return result;
  }
  message.channel.send({ embed: helpEmbed }).catch(e => console.log(e));
}