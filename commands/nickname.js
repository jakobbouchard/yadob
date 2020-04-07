const { MessageEmbed } = require(`discord.js`);
const custom = require(`../custom.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const nickname = args.join(` `);
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`Nickname`);

  if (custom.embed.useAuthor) {
    embed.setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website);
  }
  if (custom.embed.useFooter) {
    embed.setFooter(custom.embed.footer);
  }

  if (!nickname.length) {
    embed.setDescription(`Please enter a nickname.`);
  } else if (nickname.length > 32) {
    embed.setDescription(`A nickname must be between 1 and 32 characters.`);
  } else if (nickname === `clear`) {
    try {
      await message.guild.me.setNickname(``);
      embed.setDescription(`Nickname cleared!`);
      log.info(`Nickname cleared in guild ${message.guild}`);
    } catch (err) {
      log.error(err);
    }
  } else {
    try {
      await message.guild.me.setNickname(nickname);
      embed.setDescription(`Nickname changed to '${nickname}'!`);
      log.info(`Nickname changed to '${nickname}' in guild ${message.guild}`);
    } catch (err) {
      log.error(err);
    }
  }

  message.channel.send(embed).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: false
};

exports.info = {
  name: `nickname`,
  category: `Guild`,
  description: `Changes or clears the bot’s nickname.`,
  usage: `nickname <nickname | clear>`
};
