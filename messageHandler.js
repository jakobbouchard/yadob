const {prefix} = require('./config.js');
const log = require(`./util/log.js`);

module.exports = message => {
  const normalizedMessage = message.content.toLowerCase();
  let client = message.client;

  if(message.channel.type === "dm") return;
  if(message.author.bot) return;
  if (!normalizedMessage.startsWith(prefix)) return; 

  let command = normalizedMessage.split(' ')[0].slice(prefix.length);
  let args = normalizedMessage.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, args);
    log.info(`[${message.guild.name}]${message.member.user.tag} Command: ${cmd.help.name}`)
  }
};