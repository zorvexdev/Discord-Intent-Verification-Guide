# 03 — Guild Presences Intent

`GUILD_PRESENCES` is the category to assess when a feature truly needs individual presence updates, including online status and activity information included in the current payload schema.

## Identify the exact signal

Do not start with “we need online members.” Describe the actual state change and what the product does with it. For example, a defined workflow might react when a user becomes available to start a user-requested activity. This example only helps explain the structure; it does not establish that any particular app qualifies for access.

## Alternatives and boundaries

- If an approximate count is enough for a dashboard, review whether the guild resource's approximate presence count is sufficient. Confirm the current field behavior against Discord's docs.
- If the app is showing its own status or activity, that is not the same as observing every other user's presence.
- If a user can explicitly start an action with a slash command or button, do not observe their presence merely as a proxy for consent.
- If the product genuinely needs individual real-time presence changes, explain exactly why an aggregate count or interaction cannot provide that signal.

Use the official [Gateway docs](https://docs.discord.com/developers/events/gateway#gateway-intents) and [alternative guide](https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent) for current capabilities and limitations.

## Privacy-sensitive design

Presence can reveal routines, availability, game/activity choices, or platform usage. Keep the design explicit and restrained:

- collect only the fields that trigger the stated behavior;
- avoid creating a permanent timeline unless the feature demonstrably requires it and policy permits it;
- define which audiences can see presence-derived results;
- document how long raw and derived data remains;
- provide server-level off switches or configuration where appropriate; and
- do not repurpose presence data for advertising, hidden profiling, or unrelated behavioral analytics.

## Build an evidence trail

A useful recording or screenshot should make the entire relationship understandable:

1. show where the feature is enabled and who can configure it;
2. show a presence transition or a safely simulated test condition;
3. show the actual user-visible behavior triggered by that transition;
4. show controls, if the feature can be disabled;
5. avoid including real user data that is unnecessary for the demonstration.

A static screenshot of an online counter does not, by itself, prove the feature requires individual presence updates.

## Drafting pattern

> The **[feature]** uses **[specific presence transition/fields]** to **[user-visible action]**. An aggregate figure or explicit command cannot replace it because **[precise limitation]**. We process the signal for **[defined scope]**, retain **[what]** for **[how long]**, restrict access to **[who]**, and delete it using **[mechanism]**. The attached evidence shows **[specific production behavior]**.

If your explanation cannot describe the transition and resulting action in plain language, revisit whether the intent is needed.
