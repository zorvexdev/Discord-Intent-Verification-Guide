# 02 — Guild Members Intent

`GUILD_MEMBERS` is relevant when a product feature depends on member lifecycle events or operations that enumerate/find members beyond the information already provided in an interaction.

## What may depend on it

Depending on the Gateway/API operation, this category can be relevant to:

- member join, update, and removal events;
- certain thread-membership updates involving other users;
- Request Guild Members operations, including roster or chunk retrieval; and
- HTTP endpoints such as listing guild members where the API requires the intent.

Always check the current [Gateway event reference](https://docs.discord.com/developers/events/gateway#gateway-intents) and [List Guild Members endpoint](https://docs.discord.com/developers/resources/guild#get-guild-members). Avoid claiming that enabling the intent guarantees unlimited access to all member data; request sizes, pagination, rate limits, and operation-specific rules still apply.

## Match the intent to a real feature

| Feature requirement | Questions to answer |
|---|---|
| Welcome/onboarding when someone joins | Does the feature need to react to every join in real time? Which fields are used? |
| Member update automation | What update is relevant, and what action follows it? |
| Leave tracking | Is a real-time leave event required, and how long is the result kept? |
| Reconcile a full roster with a role/access system | Why must the roster be complete? How often is reconciliation run? Can the result be computed without retaining every member? |
| `/userinfo` for a selected user | Could a user option, mention, context command, or targeted lookup deliver the needed target? |

## Alternatives to test

- **User option or context menu:** when a human deliberately selects the target member.
- **Mention:** when the operation concerns a person the command invoker has identified.
- **Targeted endpoint:** when the application already has a user ID and only needs that member's current resource.
- **Search endpoint:** when the use case requires finding a small set of members matching a bounded query, within the endpoint's current limits.
- **Data supplied in interaction:** the invoking user/member details are often already present for the relevant interaction context.

An on-demand lookup cannot replace a real-time event requirement if the app must notice every join or leave without being asked. Explain the difference rather than writing “REST does not work.”

## What a reviewer needs to understand

State:

1. the exact event or endpoint;
2. whether you need every member event, a subset, or a full roster;
3. the feature action triggered by the data;
4. why an interaction or targeted request falls short;
5. the number/frequency of queries or scans, if relevant;
6. which fields are read and whether they are persisted;
7. who can access results and how deletion works.

## Design risks

A full-member cache may be a framework convenience, not a product requirement. Review whether each subsystem really needs member objects to remain cached. Avoid repeated whole-server enumeration where an event, selected ID, or small lookup would do. Document retention for join/leave logs, moderation evidence, or member-derived analytics, and do not keep personal data “just in case.”

## Drafting pattern

> Our **[feature name]** responds to **[member event/operation]** by **[specific outcome]**. The workflow needs **[all events / a complete roster / selected member fields]** because **[technical reason]**. We evaluated **[user option / targeted lookup / search / other alternative]**, but it does not provide **[specific missing capability]**. We process **[fields]** for **[scope]**, store **[nothing / derived fields]** for **[retention period]**, and delete it through **[mechanism]**. Access is limited to **[service/role]**.

This is a structure, not ready-made evidence. Replace every bracket with facts from your own production app.
