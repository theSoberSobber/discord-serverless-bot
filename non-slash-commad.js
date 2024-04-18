import "dotenv/config";
import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import {
  VerifyDiscordRequest,
  getRandomEmoji,
  DiscordRequest,
} from "./utils.js";
import { getShuffledOptions, getResult } from "./game.js";

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

import {Client, GatewayIntentBits} from 'discord.js';

let channelId=["1043560865980497985"];

app.get("/cron", async function (req, res) {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  client.login(process.env.DISCORD_TOKEN);
  client.on('ready', () => {
    for(let i in channelId){
      client.channels.fetch(`${channelId[i]}`).then(channel => {
        channel.send("okay");
      });
    }
  });
  res.send("kar diya");
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
