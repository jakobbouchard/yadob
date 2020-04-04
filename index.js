const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const { prefix, token } = require('./config.js');
require('./commands/_loader.js')(client)

client.login(token)
  .then(() => console.log(`[LOG] Logged in successfully as ${client.user.tag}!`))
  .catch(error => console.error(`[ERROR] ${error}`));

client.on('ready', () => {
  client.user.setActivity(`${prefix}help`, { type: 'LISTENING' })
});

client.on('error', error => {console.error(`[ERROR] ${error}`)});

client.on('message', message => {require('./messageHandler.js')(message)})