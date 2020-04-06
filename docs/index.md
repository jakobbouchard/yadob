# What makes this bot special

Honestly, nothing really. I just wanted to learn Discord’s API as well as how to make a bot. The COVID-19 quarantine makes us do lots of stuff.

However, since I’m making a bot, might as well go all in. Here are some of the features I want the bot to have at some point:

- **Easily extendable command set** - An easy, hopefully automated, way to add commands to the bot. Ideally, the bot should detect all commands in a folder, and make them easily accessible to the help command.
- **Music player** - Like countless other bots, this bot should be able to play music from YouTube, SoundCloud and maybe other sources too. However, that is not in my priorities currently.
- **Search** - A Google search command could be pretty useful too, why not try it.
- **Voice commands** - I would REALLY like to try myself at voice commands.

Now to contradicting myself, I would like this bot (or at least its core) to be *as lightweight as possible*. For that, I’ll try using the least dependencies possible to make everything work.

# List of current commands

## About
### Usage: `about`

About the bot.

## Help
### Usage: `help`

Outputs a list of all command or information about the specified command.

## Nickname
### Usage: `nickname <nickname | clear>`

Changes or clears the bot’s nickname.

## Ping
### Usage: `ping`

Outputs the bot’s latency to Discord’s servers.
> [Known bug](https://github.com/jakobbouchard/yadob/issues/5): Apparently, sometimes it outputs a negative latency. I’m not sure what is causing this.


## Reaction Role
### Usage: `reactionrole`

Creates a message with an embed using the specified settings in `reactionrole.json`.
> [Known bug](https://github.com/jakobbouchard/yadob/issues/3): The reaction role doesn’t work after the bot shuts down. For now, you will need to recreate a reaction role each time you restart the bot. Which loses the reaction numbers. I am working on this.

## Reload
### Usage: `reload`

> ⚠️ Broken as of now. Disabled by default.

Reloads commands.

## Support
### Usage: `support`

Links to this website as well as the issue form on GitHub.
