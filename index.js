const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const { prefix, token } = require('./config.js');
require('./commands')(client)

client.login(token)
  .then(() => console.log(`[LOG] Logged in successfully as ${client.user.tag}!`))
  .catch(error => console.error(`[ERROR] ${error}`));

client.on('ready', () => {
  client.user.setActivity(`${prefix}help`, { type: 'LISTENING' })
});

client.on('error', error => {console.error(`[ERROR] ${error}`)});

client.on('message', message => {require('./messageHandler')(message)})

// client.on('message', message => {
//   const commandList = Object.keys(commands);
//   const normalizedMessage = message.content.toLowerCase();

//   if (message.author.bot) return;
//   if (!normalizedMessage.startsWith(prefix)) return;
//   commandList.forEach(function(item) {
//     if (normalizedMessage.startsWith(prefix + item)) {
//       commands[item](message, commandList, client);
//     }
//   })
// });