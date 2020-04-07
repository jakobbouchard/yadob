const { Collection } = require(`discord.js`);
const fs = require(`fs`);
const log = require(`../util/log.js`);

module.exports = async client => {
  client.commands = new Collection();

  fs.readdir(__dirname, (err, files) => {
    if (err) {
      return log.error(`Unable to scan directory: ${err}`);
    }

    const commandFiles = files.filter(file => (
      file.split(`.`).pop() === `js` && file != `_loader.js`
    ));
    if (commandFiles.length <= 0) {
      return log.error(`No commands were found.`);
    }

    commandFiles.forEach(async file => {
      try {
        const command = await require(`${__dirname}/${file}`);
        if (command.settings.enabled) {
          await client.commands.set(command.info.name, command);
          log.success(`Command loaded - ${command.info.name}`);
        } else {
          log.warn(`Command is disabled - ${command.info.name}`);
        }
        if (command.preload) {
          command.preload(client);
        }
      } catch (err) {
        log.error(`Couldn’t load ${file}: ${err}`);
      }
    });
  });
};
