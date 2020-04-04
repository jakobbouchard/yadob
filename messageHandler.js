const {prefix} = require('./config.js');

module.exports = message => {
  const normalizedMessage = message.content.toLowerCase();
  let client = message.client;

  if(message.channel.type === "dm") return;
  if(message.author.bot) return;
  if (!normalizedMessage.startsWith(prefix)) return; 

  let command = normalizedMessage.split(' ')[0].slice(prefix.length);
  let params = normalizedMessage.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd(client, message, params);
    // cmd.run(client, message, params);
    // console.log("Command: /" + cmd.help.name)
    // console.log("Guild: " + message.guild.name)
  }
};