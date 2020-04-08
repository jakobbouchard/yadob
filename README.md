[![YADOB](docs/assets/images/logo-header.png "Yet Another Discord Open Bot")](https://yadob.jakobbouchard.dev)

![Built With Love](https://forthebadge.com/images/badges/built-with-love.svg "Built With Love")
![Made With JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg "Made With JavaScript")
![Contains Technical Debt](https://forthebadge.com/images/badges/contains-technical-debt.svg "Contains Technical Debt")

[![discord.js dependency version](https://img.shields.io/github/package-json/dependency-version/jakobbouchard/yadob/discord.js?style=for-the-badge "discord.js Homepage")](https://discord.js.org/)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jakobbouchard/yadob?style=for-the-badge "Download the repository")](https://github.com/jakobbouchard/yadob/archive/master.zip)
[![package.json version](https://img.shields.io/github/package-json/v/jakobbouchard/yadob?style=for-the-badge "Go to latest release")](https://github.com/jakobbouchard/yadob/releases/latest)
[![Gitpod Ready-to-code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=for-the-badge "Gitpod Ready-to-code")](https://gitpod.io/#https://github.com/jakobbouchard/yadob)

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
