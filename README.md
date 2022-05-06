# pong-elo-bot

Steps to run:
- [Create bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
- [Add bot to server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link)
- Create `config.json` file with the following:
```
{
	"clientId": "[YOUR CLIENT ID HERE]",
	"guildId": "[YOUR GUILD ID HERE]",
	"token": "[YOUR BOT TOKEN HERE]"
}
```
- `node deploy-commands.mjs` to deploy commands
- `node index.mjs` to run bot
