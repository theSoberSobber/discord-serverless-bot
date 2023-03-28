# Getting Started app for Discord

This project contains a basic discord bot that runs serverlessly and hence saves up on computing costs.
It doesn't need to be listening always and is triggered with the help of a webhook from the application and is verified using the Public key and the discord signature hash.

[<img src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix-button.svg" width="175px" />](https://glitch.com/edit/#!/import/github/theSoberSobber/discord-serverless-bot)

## Project structure
Below is a basic overview of the project structure:

```
├── abstractions    -> short classes to make app making easier!
│   ├── app.js  -> final code
│   ├── button.js
│   ├── command.js
│   ├── modal.js
│   ├── selectMenu.js
├── .env.sample -> sample .env file for people wanting to reproduce
├── app.js      -> main entrypoint for app
├── commands.js -> slash command payloads + helpers
├── game.js     -> logic specific to RPS
├── utils.js    -> utility functions and enums
├── package.json
└── .gitignore
```

## Running app locally

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app and Bot](https://discord.com/developers/applications) with the proper permissions:
- `applications.commands`
- `bot` (with Send Messages enabled)

### Setup project

First clone the project:
```
git clone https://github.com/theSoberSobber/discord-serverless-bot.git
```

Then navigate to its directory and install dependencies:
```
cd discord-serverless-bot
npm install
```
### Get app credentials

Fetch the credentials from your app's settings and add them to a `.env` file (see `.env.sample` for an example). You'll need your app ID (`APP_ID`), bot token (`DISCORD_TOKEN`), and public key (`PUBLIC_KEY`).

### Install slash commands

The commands for the example app are set up in `commands.js`. All of the commands in the `ALL_COMMANDS` array at the bottom of `commands.js` will be installed when you run the `register` command configured in `package.json`:

```
npm run register
```

### Run the app

After your credentials are added, go ahead and run the app:

```
node app.js
```