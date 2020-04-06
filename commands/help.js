const { MessageEmbed } = require(`discord.js`);
const { prefix } = require(`../config.js`);
const log = require(`../util/log.js`);

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(`#18bc9c`)
    .setTitle(`Help`)
    .setAuthor(`YADOB`, `https://i.imgur.com/wSTFkRM.png`, `https://yadob.jakobbouchard.dev`)
    .setDescription(`Here are all the commands you can use.
                     You can also [access the documentation](https://yadob.jakobbouchard.dev).
                     \u200b`);

  function listAllCommands() {
    let result = ``;
    client.commands.each(command => {
      result += `**${prefix+command.info.name}** - ${command.info.description}\n`;
    });
    return result;
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
    embed.addField(`Commands`, listAllCommands());
  }

  message.channel.send(embed).catch(err => log.error(err));
};

exports.settings = {
  enabled: true,
  dmUse: true
};

exports.info = {
  name: `help`,
  description: `You’re already here... (Can also give info about other commands)`,
  usage: `help [command]`
};
