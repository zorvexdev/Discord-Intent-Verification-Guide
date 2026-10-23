# 09 — Portal and Runtime Configuration

Intent configuration is a two-sided contract between your application settings and the client connection. Treat it as a release-controlled setting, not a local developer preference.

## Release procedure

1. Inventory every event listener, framework extension, job, and shard that touches the relevant data.
2. Map each listener to an actual feature and data fields.
3. Remove unused privileged flags from the runtime configuration.
4. Open **Developer Portal → application → Bot → Privileged Gateway Intents**.
5. Enable only what the product needs and ensure any required grant is present.
6. Make the live client request the same exact intent set.
7. Restart/reconnect all application processes so they send the updated Identify payload.
8. Test each dependent feature, including the “intent off” case.

Use Discord's live guide for exact UI labels: [Getting Started with Privileged Intent Review](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review).

## `discord.py` example

The example below requests non-privileged events only. Add `members`, `presences`, or `message_content` only when a real feature needs it and you have configured authorization appropriately.

```python
import os
import discord

intents = discord.Intents.none()
intents.guilds = True
intents.guild_messages = True
# Only enable these after a feature audit and required portal authorization:
# intents.members = True
# intents.presences = True
# intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f"Ready as {client.user}")

client.run(os.environ["DISCORD_BOT_TOKEN"])
```

Install and run with a current supported `discord.py` version. Store the token in a secret/environment variable; never hardcode it into a public example.

## `discord.js` example

```js
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    // Add only after a feature audit and required portal authorization:
    // GatewayIntentBits.GuildMembers,
    // GatewayIntentBits.GuildPresences,
    // GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Ready as ${client.user.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
```

The code names depend on the installed library version. Consult that version's official docs rather than copying enum names from another release.

## Keep shards and services consistent

A mixed configuration often produces confusing partial failure. Record the effective flags for every shard, worker, test/staging client, and deployment. Do not accidentally run unapproved flags in an alternate process or hide them behind a framework default.

## Gateway vs. HTTP API

A Gateway flag affects event data and connection behavior. Some REST endpoints also have privileged-intent requirements independently of the Identify bitfield. Review the endpoint-specific documentation instead of assuming that omitting an intent from Gateway makes every REST call unrestricted.
