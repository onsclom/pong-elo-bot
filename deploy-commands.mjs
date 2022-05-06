// @ts-check

import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import config from "./config.json" assert { type: "json" };

const commands = [
  new SlashCommandBuilder()
    .setName("record")
    .setDescription("Record a loss")
    .addUserOption((option) =>
      option
        .setName("winner")
        .setDescription("Winner of the match")
        .setRequired(true)
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(config.token);

rest
  .put(Routes.applicationCommands(config.clientId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
