// @ts-check

import config from "./config.json" assert { type: "json" };
import { Client, Intents } from "discord.js" 
import ranking from "./ranking.mjs";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let commands = {
  record: (interaction) => {
    let winner = interaction.options.getUser("winner");
    let loser = interaction.member;
    if (winner.id == loser.id) {
      interaction.reply({
        content: "You cannot play against yourself!",
        ephemeral: true,
      });
      return;
    }
    if (winner.bot) {
      interaction.reply({
        content: "You cannot play against a bot!",
        ephemeral: true,
      });
      return;
    }
    ranking.record(winner.id, loser.id);
    interaction.reply(`Recorded game: ${winner} beats ${loser}`);
  },
};

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName in commands) {
    commands[interaction.commandName](interaction);
  }
});

client.login(config.token);
