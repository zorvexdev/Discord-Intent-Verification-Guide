# 00 — Start Here: Make the Data Decision First

A privileged-intent application is not an essay contest. Your task is to show what the product actually does, why a particular category of data is required, and how you keep the access proportionate.

## The five-question triage

Answer these in order for every feature:

1. **What user-facing result exists?** Name the shipped feature, not a roadmap item.
2. **What exact information drives it?** Identify Gateway events, message fields, member fields, or presence signals.
3. **Can a user initiate the operation?** Try a slash command, context-menu action, button, select menu, modal, or targeted lookup.
4. **What is the minimum collection footprint?** Decide whether data is only processed in memory, cached temporarily, or persisted.
5. **What proof can demonstrate the dependency?** Capture a reproducible workflow from trigger to result.

If you cannot answer one of these, do not immediately request more access. Inspect the feature design first.

## The four layers that often get confused

| Layer | Question it answers | Example |
|---|---|---|
| Product necessity | Does the shipped feature need the data? | A join-event automation needs to detect a new member. |
| Portal authorization | Has the app been configured and, where required, reviewed? | A privileged toggle is enabled and access is approved when required. |
| Gateway request | Does the live client ask Discord for the intent? | The client's Identify payload includes the relevant bit. |
| Normal permissions | May the bot act in a particular server/channel? | `VIEW_CHANNEL` or `SEND_MESSAGES` controls a different permission surface. |

These layers are related but not interchangeable. Administrator permissions do not replace intent access, and an enabled portal toggle does not mean the product has a valid need.

## Choose a path

- If no real feature uses an intent, remove it.
- If the feature acts on a selected user/message or structured user input, prototype an interaction-based replacement.
- If the feature needs a complete stream of otherwise unavailable data, document that precise gap and the narrowest viable use case.
- If the reason is only “future features,” “the library recommends it,” or “it is convenient,” pause the request.

## Keep a living audit

Maintain an intent inventory in version control. Revisit it whenever the product adds a command, new event listener, logging provider, AI service, data table, or third-party analytics tool. A once-correct request can become inaccurate when data flows change.

Continue to [Intent access explained](./01-intent-access-explained.md), then read only the intent-specific pages that match the product.
