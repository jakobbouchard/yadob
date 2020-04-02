import { Client } from 'discord.js';
const client = new Client();
import { prefix, token } from './config.json';

client.login(token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content == `${prefix}ping`) {
    message.reply("Pong!");
  }
});