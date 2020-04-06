const { MessageEmbed } = require(`discord.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`Support`)
    .setDescription(`Commands reloaded!`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`);

  await client.commands.each(command => {
    delete require.cache[require.resolve(`./${command.info.name}.js`)];
  });
  await client.commands.clear();
  await require(`./_loader.js`)(client);

  message.channel.send(embed).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `reload`,
  description: `Reloads the commands.`,
  usage: `reload`
};
