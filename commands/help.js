const { MessageEmbed } = require(`discord.js`);
const { prefix } = require(`../config.js`);
const custom = require(`../custom.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(custom.embed.color)
    .setTitle(`Help`)
    .setDescription(`Here are all the commands you can use.
                     You can also [access the documentation](https://yadob.jakobbouchard.dev).
                     \u200b`);

  if (custom.embed.useAuthor) {
    embed.setAuthor(custom.botInfo.name, custom.botInfo.logo, custom.botInfo.website);
  }
  if (custom.embed.useFooter) {
    embed.setFooter(custom.embed.footer);
  }

  function listAllCommands() {
    let result = ``;
    client.commands.each(command => {
      result += `**${prefix+command.info.name}** - ${command.info.description}\n`;
    });
    return result;
  };

  function listCommandsPerCategory() {
    const categories = {};
    const orderedCategories = {};
    client.commands.each(command => {
      let commandDescription = `**${prefix+command.info.name}** - ${command.info.description}\n`;
      if (command.info.category in categories) {
        if (!command.info.category.length) {
          categories[`Misc`] += commandDescription;
        } else {
          categories[command.info.category] += commandDescription;
        }
      } else {
        if (!command.info.category.length) {
          categories[`Misc`] = commandDescription;
        } else {
          categories[command.info.category] = commandDescription;
        }
      }
    });

    Object.keys(categories).sort().forEach(key => {
      orderedCategories[key] = categories[key];
    });

    Object.keys(orderedCategories).forEach(categoryName => {
      embed.addField(categoryName, orderedCategories[categoryName]);
    });
  };

  if (args.length > 0) {
    if (args.length > 1) {
      embed.setDescription(`Please only specify one command at a time!`);
    } else {
      const command = args.toString();
      if (client.commands.has(command)) {
        cmd = client.commands.get(command);
        embed
          .setTitle(`Help - ${cmd.info.name}`)
          .setDescription(`**Usage:** \`${cmd.info.usage}\`
                          ${cmd.info.description}`);
      } else {
        embed.setDescription(`This command doesn’t exist or has been disabled!`);
      }
    }
  } else {
    // embed.addField(`Commands`, listAllCommands());
    listCommandsPerCategory();
  }

  message.channel.send(embed).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `help`,
  category: `Core`,
  description: `You’re already here... (Can also give info about other commands)`,
  usage: `help [command]`
};
