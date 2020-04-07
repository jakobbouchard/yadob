const { MessageEmbed } = require(`discord.js`);
const custom = require(`../custom.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`Support`)
    .setDescription(`Bot reloaded!`);

  if (custom.embed.useAuthor) {
    embed.setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website);
  }
  if (custom.embed.useFooter) {
    embed.setFooter(custom.embed.footer);
  }

  await client.commands.each(command => {
    delete require.cache[require.resolve(`./${command.info.name}.js`)];
  });
  delete require.cache[require.resolve(`../custom.js`)];
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
