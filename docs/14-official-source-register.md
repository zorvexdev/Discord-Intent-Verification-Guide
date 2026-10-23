# 14 — Official Source Register

**Last reviewed:** 23 October 2026. This register prioritizes Discord's own live documentation for policy, thresholds, events, and restrictions. Review links again when preparing a real submission because content and portal workflows can change.

## Required reading

| Topic | Official source | Why it matters |
|---|---|---|
| Current review process | [Getting Started with Privileged Intent Review](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review) | User-based threshold, notification window, annual review, alternatives and process |
| Intent event mappings | [Gateway — Gateway Intents](https://docs.discord.com/developers/events/gateway#gateway-intents) | Intent flags, event associations, Identify configuration and restrictions |
| Alternatives | [You Might Not Need a Privileged Intent](https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent) | Interaction-first design and specific alternatives |
| Developer Policy | [Discord Developer Policy](https://docs.discord.com/developers/policies-and-agreements/developer-policy) | Data use and developer conduct requirements |
| Developer Terms | [Discord Developer Terms of Service](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service) | Legal terms applicable to API usage |
| App commands | [Application Commands](https://docs.discord.com/developers/docs/interactions/slash-commands) | Slash commands and context-menu commands |
| Message objects | [Message Resource](https://docs.discord.com/developers/resources/message) | Exact fields affected by Message Content |
| Gateway close codes | [Gateway Close Event Codes](https://docs.discord.com/developers/events/gateway#gateway-close-event-codes) | Diagnose invalid/disallowed intent disconnects |
| Member listing | [List Guild Members](https://docs.discord.com/developers/resources/guild#get-guild-members) | Endpoint-specific intent and listing limits |

## Source priority

1. **Official policy/review page:** controls the current review process and obligations.
2. **Official API reference:** controls field names, payload behavior, endpoint requirements, and close codes.
3. **Library docs:** explain how a specific `discord.py`, `discord.js`, nextcord, or py-cord version represents the API.
4. **Community reports:** useful for troubleshooting clues, not an approval rule or policy source.

## Handling conflicting wording

Some older pages or tutorials still mention the historical 100-server threshold for intent review. Discord's dedicated review guide was updated on 10 June 2026 and describes the privileged-intent review trigger based on unique users who can see the app across installed servers. If older wording conflicts with the current dedicated review guide, do not repeat the older threshold as current. Confirm the application's own notice and the current official page before acting.

## Policy statements are summaries

This handbook summarizes the sources in its own words. It is not a substitute for opening and reading the full policies, their incorporated terms, or a notice sent directly to the application owner.
