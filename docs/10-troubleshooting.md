# 10 — Troubleshooting Intent Failures

Separate a connection problem from an access problem and from an event that the application never needed in the first place.

## Common Gateway close codes

| Code | Meaning to investigate | What to check |
|---|---|---|
| `4013` — Invalid intents | The Identify payload contains an invalid/unsupported intent combination or bitfield | Library version, constant names, effective flags, custom Gateway implementation, copied examples |
| `4014` — Disallowed intents | A privileged intent is being requested without the required portal configuration or authorization | Portal toggles, access/review status, runtime flags, every shard/worker configuration |

Official source: [Gateway close codes and intent restrictions](https://docs.discord.com/developers/events/gateway#gateway-close-event-codes). Do not try to fix a `4014` by changing unrelated server permission bits.

## Connected, but message fields are empty

Check these in order:

1. Does the feature need arbitrary guild messages, or should it be a slash/context command?
2. Is Message Content enabled in the portal if needed and allowed for the app?
3. Does the running process request the flag in Identify?
4. Does the scenario fall into a documented exception (own message, DM with the app, message mentioning the app, or selected message context command)?
5. Are you testing an ordinary non-mention guild message with a second account?
6. Does the framework/library version expose fields with behavior matching current Discord docs?

Do not assume that a received message event means its content-bearing fields will be populated.

## Welcome or leave handler not firing

- Verify the feature truly uses the relevant member event.
- Check whether `GUILD_MEMBERS` is requested and available.
- Confirm the portal setting and any review state.
- Restart/reconnect after changes.
- Test with a clean, observable join/leave in a test guild.
- Ensure the handler is registered and the process/shard serving the guild is healthy.

## Presence updates missing

- Confirm the feature depends on another user's presence rather than the bot's own presence.
- Check `GUILD_PRESENCES` at the portal and runtime layers.
- Test one intentional status transition with a second account.
- Avoid using a presence counter as proof that individual updates are available.

## Feature still depends on an old cache

Disabling an intent does not automatically redesign all code that previously depended on populated caches. Search for cache iteration, roster enumeration, member lookups, prefix parsing, `message.content` use, presence listeners, telemetry payloads, and scheduled sync jobs. Replace the data dependency before expecting the feature to work without the intent.

## Safe diagnostics

Log client/library version, shard/session identifier, feature module, requested flag names, exception/close code, and a correlation ID. Do not log tokens, interaction secrets, full message contents, attachment contents, or unnecessary user data just to debug intent access.

## Minimal test matrix

- [ ] App can start with only non-privileged intents.
- [ ] Each requested privileged feature has a known positive test.
- [ ] Each relevant feature has a test with its privileged flag disabled.
- [ ] Message-content exception cases are tested separately from arbitrary guild messages.
- [ ] Member event and targeted lookup workflows are distinguished.
- [ ] Every production shard has the same intended flags.
- [ ] Portal changes were followed by a reconnect.
