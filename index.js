const Discord = require('discord.js');
const client = new Discord.Client();
let {prefix, token} = require('./config.json');
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname + '/commands');
let commands = {};

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(function (file) {
    commands[file.replace('.js', '')] = require('./commands/' + file);
    console.log(`Command Loaded! ${file}`);
  });
});

client.login(token)
  .then(() => console.log(`\nLogged in successfully as ${client.user.tag}!`))
  .catch(console.error);

client.on('ready', () => {
  client.user.setActivity(`${prefix}help`, { type: 'LISTENING' })
});

client.on('message', message => {
  const commandList = Object.keys(commands);
  const normalizedMessage = message.content.toLowerCase();

  if (message.author.bot) return;
  if (!normalizedMessage.startsWith(prefix)) return;
  commandList.forEach(function(item) {
    if (normalizedMessage.startsWith(prefix + item)) {
      commands[item](message, commandList);
    }
  })
});