const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname);
let commands = {};

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(function (file) {
    commands[file.replace('.js', '')] = require(file);
    console.log(`Command Loaded! ${file}`);
  });
});

// const fs = require("fs")
// bot.commands = new Discord.Collection();
// bot.aliases = new Discord.Collection();

// fs.readdir("./commands/",(err,files) =>{
//     if(err) console.log(err)

//     let jsfile = files.filter(f => f.split(".").pop() ==="js")
//     if(jsfile.lenght <= 0) {
//         return console.log("[LOGS] Não foram encontrados comandos.")
//     }

//     jsfile.forEach((f,i) => {
//         let pull = require(`./commands/${f}`)
//         bot.commands.set(pull.config.name, pull);
//         pull.config.aliases.forEach(alias =>{
//             bot.aliases.set(alias, pull.config.name)
//         })
//     })
// })

module.exports = commands;
