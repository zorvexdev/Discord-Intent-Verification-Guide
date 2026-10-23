# 04 — Message Content Intent

`MESSAGE_CONTENT` affects message data fields rather than subscribing to a single Gateway event. Discord currently documents affected fields that include `content`, `embeds`, `attachments`, `components`, and `poll`. Check the live message schema for exact details and exceptions: [Message Content Intent](https://docs.discord.com/developers/events/gateway#message-content-intent).

## The key design question

Does the feature have to inspect arbitrary user messages even when nobody intentionally invokes the app, or can the user provide the needed input through an interaction?

This distinction frequently determines whether Message Content is necessary.

## Alternatives to consider first

| User task | Interaction-based approach |
|---|---|
| Run a command with arguments | Slash command options, autocomplete, and validation |
| Apply an action to one existing message | Message context-menu command |
| Apply an action to a user | User context-menu command or user option |
| Submit free-form text by choice | Modal input |
| Pick a bounded action | Button or select menu |
| Create a report for a selected message | Context menu, followed by a modal for additional details |
| Observe every new message for moderation | May genuinely require arbitrary-message access; document scope and policy controls |

Discord documents exceptions for some content, including the app's own messages, DMs with the app, messages that mention the app, and a message selected by a message context command. Do not generalize these exceptions to arbitrary guild messages or history.

Official alternatives guide: https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent

## Potentially valid necessity patterns

A content-dependent workflow may need broad message access when the feature must operate without an explicit command, such as real-time detection of phishing or malicious links in ordinary member posts. If that is the actual feature, the explanation should state which fields are inspected, what triggers processing, how false positives are handled, and what is retained.

A legacy prefix-command handler is usually a signal to evaluate migration, not a complete long-term justification. Slash commands are explicitly recommended by Discord as an alternative when structured command input can solve the task.

## AI/ML use restriction

Discord's [Developer Policy](https://docs.discord.com/developers/policies-and-agreements/developer-policy) and relevant terms must be read directly before processing API data with external services. Discord's current policy restricts use of message content obtained through Discord APIs to train AI/ML models, including LLMs, without Discord's express permission. Do not assume that running a model through a third-party API, keeping prompts out of a database, or calling the feature “moderation” removes the need to assess this rule.

If raw content is sent to an external provider for inference, document that data path accurately and independently review all applicable policy and contract requirements. Do not claim that inference is training or non-training as a universal legal conclusion; describe what your system and provider actually do.

## Describe scope precisely

For your request, enumerate:

- where messages originate (guild channels, threads, DMs, mentions, selected messages);
- which fields are required and why;
- whether edits and deletions are processed;
- whether attachments are downloaded or only metadata is inspected;
- whether raw text is stored, logged, sent to third parties, or immediately discarded;
- the human moderation review process, if applicable; and
- retention and deletion rules.

## Drafting pattern

> **[Feature]** inspects **[defined class of messages]** when **[trigger]**. It reads **[specific fields]** to **[user-visible outcome/safety result]**. An interaction-based approach cannot cover the use case because **[specific reason broad, unprompted message coverage is required]**. Raw content is **[processed/stored/transmitted]** as follows: **[flow]**. It is retained for **[period]**, deleted by **[mechanism]**, and access is limited to **[services/roles]**. We do not repurpose it for **[prohibited/unrelated uses]**. Evidence: **[recording/link]**.

Do not submit this pattern without replacing each placeholder with real implementation details.
