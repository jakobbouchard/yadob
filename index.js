const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix, token} = require('./config.json');
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname + '/commands');
let commands = {};

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  files.forEach(function (file) {
    commands[file.replace('.js', '')] = require('./commands/' + file);
  });
});

bot.login(token);

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  const commandList = Object.keys(commands);
  const normalizedMessage = message.content.toLowerCase();

  if (message.author.bot) return;
  if (!normalizedMessage.startsWith(prefix)) return;
  commandList.forEach(function(item) {
    if (normalizedMessage == prefix + item) {
      commands[item](message, commandList);
    }
  })
});