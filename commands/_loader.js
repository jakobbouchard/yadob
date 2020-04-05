const { Collection } = require(`discord.js`);
const fileSystem = require(`fs`);
const log = require(`../util/log.js`);

module.exports = client => {
  client.commands = new Collection();
  client.aliases = new Collection();

  fileSystem.readdir(__dirname, (err, files) => {
    if (err) {
      return log.error(`Unable to scan directory: ${err}`);
    }

    const commandFiles = files.filter(file => (file.split(`.`).pop() === `js` && file != `_loader.js`))
    if (commandFiles.length <= 0) {
      return log.error(`No commands were found.`)
    }

    commandFiles.forEach(async file => {
      try {
        const command = await require(`${__dirname}\\${file}`)
        if (command.settings.enabled) {
          await client.commands.set(command.help.name, command)
          log.success(`Command loaded - ${command.help.name}`)
        } else {
          log.warn(`Command is disabled - ${command.help.name}`)
        }
      } catch (err) {
        log.error(`Couldn't load ${file}: ${err}`)
      }
    })
  })
}