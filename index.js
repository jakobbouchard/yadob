const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const {token} = require('./config.js');
const commands = require('./commands')

client.login(token)
  .then(() => console.log(`\nLogged in successfully as ${client.user.tag}!`))
  .catch(console.error);

client.on('ready', () => {
  client.user.setActivity(`${prefix}help`, { type: 'LISTENING' })
});

client.on('error', console.error);

client.on('message', message => {
  const commandList = Object.keys(commands);
  const normalizedMessage = message.content.toLowerCase();

  if (message.author.bot) return;
  if (!normalizedMessage.startsWith(prefix)) return;
  commandList.forEach(function(item) {
    if (normalizedMessage.startsWith(prefix + item)) {
      commands[item](message, commandList, client);
    }
  })
});