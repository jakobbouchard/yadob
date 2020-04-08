# Why YADOB?

## What makes this bot special?
Honestly, nothing really. I just wanted to learn Discord’s API as well as how to make a bot. The COVID-19 quarantine makes us do lots of stuff. I would like this bot (or at least its core) to be *as lightweight as possible*. For that, I’ll try using the least dependencies possible to make everything work. Currently, the only dependency is [Discord.js](https://discord.js.org) (obviously). Archiver is listed in the dev dependencies because I use it to zip my releases.

However, since I’m making a bot, might as well go all in. Here are some of the features I want the bot to have at some point:

- **Music player** - Like countless other bots, this bot should be able to play music from YouTube, SoundCloud and maybe other sources too. However, that is not in my priorities currently.
- **Search** - A Google search command could be pretty useful too, why not try it.
- **Voice commands** - I would REALLY like to try myself at voice commands.
- **Avatar and username change** - Using the same file as the customizable embed system, I’d like to have a command to change the avatar and username of the bot. Obviously only useable by the owner.
- **D&D dice rolls**

## What features does it have?

- **Easily extendable command set** - An easy, hopefully automated, way to add commands to the bot. Ideally, the bot should detect all commands in a folder, and make them easily accessible to the help command.
- **Color logging to file and console** - I created a simple, light logging system that doesn’t use any third-party modules to do its work. It has timestamps, colors with tags and it logs to a file!
- **Customizable embed system** - The embeds that the bot sends are fully customizable, from the use of the footer and author, to the color of it.
- **Reload support** - No need to restart the bot each time, just reload it using the `reload` command!
- **Reaction roles\*** - It can give roles to people based on their reaction on the message!

\* Currently broken, [see below](#reaction-role).

# How to install

## Requirements

- [Node.js](https://nodejs.org/en/download/) (12.16.1 and up)

## Setup

1. Unzip the file in the directory where you want to run the bot.
2. Create a copy of `config.example.js` and rename it to `config.js`, then edit it how you want :
    ```js
    {
      prefix: "!", // You can change the prefix to whatever you want
      token: "Your-Bot-Token"
    }
    ```
3. Optionally, customize `custom.js` to your likings too.
4. Open a terminal with admin/sudo rights and navigate to the bot’s folder.
5. Install the dependencies by running `npm install --production`.
6. Start the bot in one of two ways:
   1. **(Windows only)** Double-click the bundled executable batch file.
   2. Run `npm start` in a terminal.

# List of current commands

## About
### Usage: `about`

About the bot.

## Help
### Usage: `help [command]`

Outputs a list of all command or information about the specified command.

## Nickname
### Usage: `nickname <nickname | clear>`

Changes or clears the bot’s nickname.

## Ping
### Usage: `ping`

Outputs the bot’s latency to Discord’s servers.


## Reaction Role
### Usage: `reactionrole`

Creates a message with an embed using the specified settings in `reactionrole.json`.
> [Known bug](https://github.com/jakobbouchard/yadob/issues/3): The reaction role doesn’t work after the bot shuts down. For now, you will need to recreate a reaction role each time you restart the bot. Which loses the reaction numbers. I am working on this.

## Reload
### Usage: `reload`

Reloads commands and customization.

## Support
### Usage: `support`

Links to this website as well as the issue form on GitHub.
