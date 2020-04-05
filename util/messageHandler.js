const { prefix } = require(`../config.js`);
const log = require(`./log.js`);

module.exports = (client, message) => {
  const normalizedMessage = message.content.toLowerCase();

  if (message.author.bot) return;
  if (!normalizedMessage.startsWith(prefix)) return;

  let command = normalizedMessage.split(' ')[0].slice(prefix.length);
  let args = normalizedMessage.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else return;

  if (
    message.channel.type === `dm`
    && cmd.settings.dmUse
    || message.channel.type !== `dm`
  ) {
    cmd.run(client, message, args);
    if (message.guild) {
      log.info(`[${message.guild.name}]${message.author.tag} Command: ${cmd.help.name}`);
    } else {
      log.info(`[DM]${message.author.tag} Command: ${cmd.help.name}`);
    }
  }
}