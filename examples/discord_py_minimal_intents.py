"""Minimal discord.py Gateway configuration for ZorveX intent auditing.

This example intentionally avoids privileged intents. Add a privileged flag only
when a production feature genuinely needs it and the application is authorized.
"""
import os
import discord

intents = discord.Intents.none()
intents.guilds = True
intents.guild_messages = True

# Uncomment only after a feature-level audit and required portal authorization:
# intents.members = True
# intents.presences = True
# intents.message_content = True

client = discord.Client(intents=intents)


@client.event
async def on_ready() -> None:
    print(f"Connected as {client.user}")


if __name__ == "__main__":
    token = os.environ.get("DISCORD_BOT_TOKEN")
    if not token:
        raise SystemExit("Set DISCORD_BOT_TOKEN in the environment first.")
    client.run(token)
