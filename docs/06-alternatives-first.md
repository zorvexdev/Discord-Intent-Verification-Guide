# 06 — Alternatives Before Requesting Access

The best alternative is the one that genuinely fulfills the user task, not one that makes the review paragraph shorter. Prototype alternatives and record their limits honestly.

## Alternatives matrix

| Product need | Approach to prototype | Limits to document |
|---|---|---|
| A user wants to run a structured action | Slash command and typed options | Cannot independently observe uninvoked messages; this is usually a feature, not a defect |
| A moderator selects a message to act on | Message context-menu command | Only provides the selected message, not every arbitrary message in the server |
| A moderator selects a member | User context-menu command or user option | Does not provide all member join/update/leave events |
| User submits longer custom text | Modal input | Only receives text after the user opens/submits the form |
| User chooses an operation | Button or select menu | Handles selected actions, not passive monitoring |
| Need a specific member already identified by ID | Targeted REST request | Not a substitute for every member event or complete list where those are required |
| Need search within a limited member set | Search/list endpoint where supported | API limits, rate limits, and partial-result constraints apply |
| Need coarse activity metric | Aggregate guild data where documented | Does not reveal a particular person's live presence |
| Need a web dashboard | HTTP interactions/OAuth2 only for permitted scoped tasks | OAuth scopes and privacy limits still apply; it does not grant privileged Gateway data automatically |

Official starting point: [You Might Not Need a Privileged Intent](https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent).

## How to run an alternative test

1. Define a measurable acceptance test for the feature.
2. Implement the alternative in a dev application or test server.
3. Remove the privileged flag from the runtime client.
4. Exercise normal and edge-case user journeys.
5. Record what works and exactly what fails.
6. Decide whether the remaining gap is essential to the feature or merely more convenient.

Example: If a command receives a selected `User` object and only needs to show that person's profile, a full member list is unlikely to be a minimum requirement. If a workflow must trigger for every new join without a command invocation, a targeted lookup cannot cause the app to learn that the event occurred. This difference is the type of technical specificity a reviewer can evaluate.

## Migration principles

- Prefer explicit user intent over passive observation when the task allows it.
- Make all inputs typed and validated.
- Treat context-menu payloads as the selected data, not access to an unlimited message history.
- Replace “scan the whole guild” with bounded or on-demand queries when that still meets the product objective.
- Never use user-account automation, scraping, or another route to avoid an intent denial.
- If no alternative can meet a legitimate and policy-compliant requirement, document the unmet requirement instead of exaggerating what alternatives do.

## Record alternatives in the submission

A convincing alternatives section includes the feature you tried, how you tested it, what result it produced, and the precise reason it could not deliver the same behavior. “Not suitable” is not a technical explanation.
