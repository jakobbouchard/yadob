const Discord = require(`discord.js`);
const client = new Discord.Client({ disableEveryone: true });
const { prefix, token } = require(`./config.js`);
const messageHandler = require(`./util/messageHandler.js`);
const log = require(`./util/log.js`);
require(`./commands/_loader.js`)(client);

log.info(`Starting bot on ${new Date()}`);
client.login(token)
  .then(() => log.success(`Logged in successfully as ${client.user.tag}`))
  .catch(err => log.error(err));

client.on(`ready`, () => {
  client.user.setActivity(`${prefix}help`, { type: `LISTENING` });
});

client.on(`error`, err => log.error(err));

client.on(`message`, message => messageHandler(client, message));
