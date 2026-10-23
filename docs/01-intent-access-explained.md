# 01 — Intent Access Explained

## What a Gateway intent means

Gateway intents tell Discord which groups of events and data a connected client wants to receive. Some intents are privileged because they expose broader or more sensitive information about server members and messages. The three privileged categories currently documented by Discord are Guild Members, Guild Presences, and Message Content.

An intent is not a Discord role permission. `MANAGE_MESSAGES`, `VIEW_CHANNEL`, and `ADMINISTRATOR` govern what a bot may do in server resources; they do not authorize privileged data access.

## The three categories at a glance

| Intent | Typical data or behavior | First alternative to evaluate |
|---|---|---|
| `GUILD_MEMBERS` | Member add/update/remove events, thread-member data in relevant cases, and member-list retrieval operations | User option, targeted REST lookup, member search, or on-demand fetch |
| `GUILD_PRESENCES` | `PRESENCE_UPDATE` information such as online status and activities | Aggregate presence count or an explicit user action, if adequate |
| `MESSAGE_CONTENT` | Content-bearing message fields, including `content`, `embeds`, `attachments`, `components`, and `poll` | Slash commands, message/user context commands, buttons, selects, modals, or a focused interaction |

Use the [official Gateway intent table](https://docs.discord.com/developers/events/gateway#gateway-intents) for current event associations and caveats. `MESSAGE_CONTENT` differs from the other two: it affects data in relevant payloads rather than subscribing to a standalone event.

## Portal toggle plus runtime request

The normal setup has two separate configuration points:

1. In the Developer Portal, enable only the required privileged category and ensure any required review grant is in place.
2. In the running client, request that same intent in its Gateway Identify configuration.

A mismatch can prevent connection or leave the client without the expected data. Restart/reconnect after changing the portal or runtime flags; a process does not retroactively change its Identify payload.

## Review thresholds and verified status

Discord's current dedicated [review guide](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review) describes the threshold using unique users who can see the app across installed servers, not the old 100-server shortcut. Check the current Developer Portal alert and notice for your app's exact action date. Do not build a deadline calculator from an old blog post.

App Verification and Privileged Intent Review are separate checks. Completing one should not be presented as automatically granting the other.

## Evidence standard

For every requested category, your explanation should connect these elements:

`Feature → Trigger → Exact data → Why alternatives fail → Data handling → Demonstration`

Example of a useful claim:

> When a new member joins, the onboarding workflow assigns the correct welcome path immediately. This requires receiving the join event for each member in enabled servers; a command that fetches a single known user cannot observe every new join.

That claim is still only a description of necessity, not a promise of approval. The reviewer decides based on the full submission and current requirements.
