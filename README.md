[![YADOB](docs/assets/images/logo-header.png "Yet Another Discord Open Bot")](https://yadob.jakobbouchard.dev)

<div style="text-align: center;">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built With Love">
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made With JavaScript">
  <img src="https://forthebadge.com/images/badges/contains-technical-debt.svg" alt="Contains Technical Debt">
  <br>
  <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/jakobbouchard/yadob/discord.js?style=for-the-badge">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/jakobbouchard/yadob?style=for-the-badge">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/jakobbouchard/yadob?style=for-the-badge">
  <a href="https://gitpod.io/#https://github.com/jakobbouchard/yadob" title="Gitpod Ready-to-code">
    <img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=for-the-badge" alt="Gitpod Ready-to-code">
  </a>
</div>

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
