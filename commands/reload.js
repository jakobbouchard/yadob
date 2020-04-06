const { MessageEmbed } = require(`discord.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`Support`)
    .setDescription(`Commands reloaded!`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`);

  await client.commands.clear();
  delete require.cache[require.resolve(`./_loader.js`)];
  await require(`./_loader.js`)(client);

  message.channel.send(embed).catch(err => log.error(err));
};

exports.settings = {
  enabled: false,
  dmUse: true
};

exports.info = {
  name: `reload`,
  description: `Reloads the commands.`,
  usage: `reload`
};
