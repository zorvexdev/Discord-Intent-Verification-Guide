// Minimal discord.js Gateway configuration for ZorveX intent auditing.
// This sample intentionally avoids privileged intents. Add one only after
// identifying a real feature need and checking portal authorization.
const { Client, GatewayIntentBits } = require('discord.js');

if (!process.env.DISCORD_BOT_TOKEN) {
  throw new Error('Set DISCORD_BOT_TOKEN in the environment first.');
}

const intents = [
  GatewayIntentBits.Guilds,
  // Add only if the audited feature needs it and access is authorized:
  // GatewayIntentBits.GuildMembers,
  // GatewayIntentBits.GuildPresences,
  // GatewayIntentBits.MessageContent,
];

const client = new Client({ intents });

client.once('ready', () => {
  console.log(`Connected as ${client.user.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
