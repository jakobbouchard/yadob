[![YADOB](docs/assets/images/logo-header.png "Yet Another Discord Open Bot")](https://yadob.jakobbouchard.dev)

![Built With Love](https://forthebadge.com/images/badges/built-with-love.svg "Built With Love")
![Made With JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg "Made With JavaScript")
![Contains Technical Debt](https://forthebadge.com/images/badges/contains-technical-debt.svg "Contains Technical Debt")

[![discord.js dependency version](https://img.shields.io/github/package-json/dependency-version/jakobbouchard/yadob/discord.js?style=for-the-badge "discord.js Homepage")](https://discord.js.org/)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jakobbouchard/yadob?style=for-the-badge "Download the repository")](https://github.com/jakobbouchard/yadob/archive/master.zip)
[![package.json version](https://img.shields.io/github/package-json/v/jakobbouchard/yadob?style=for-the-badge "Go to latest release")](https://github.com/jakobbouchard/yadob/releases/latest)
[![Gitpod Ready-to-code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=for-the-badge "Gitpod Ready-to-code")](https://gitpod.io/#https://github.com/jakobbouchard/yadob)

# Requirements

- [Node.js](https://nodejs.org/en/download/) (12.16.1 and up)

# Setup
1. Copy the config.example.json file and rename it to config.json, then edit it how you want :
    ```js
    {
      prefix: "!", // You can change the prefix to whatever you want it doesn't have to be - !
      token: "Your-Bot-Token"
    }
    ```
2. Install the dependencies by opening a terminal with admin/sudo rights and running `npm install --production`
3. Start the bot in one of two ways:
   1. **(Windows only)** Double-click the bundled executable batch file.
   2. Run `npm start` in a terminal.
