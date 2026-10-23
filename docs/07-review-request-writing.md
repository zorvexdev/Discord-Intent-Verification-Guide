# 07 — Writing a Clear Privileged-Intent Request

The goal is not to guess special wording. The goal is to make the real product behavior easy to verify.

## Recommended answer structure

For each intent requested, answer in this order:

1. **Feature:** Name the shipped feature and the person it helps.
2. **Trigger:** What causes processing (a Gateway event, scheduled reconcile, or incoming message)?
3. **Exact data:** Name the event, field, or endpoint and fields actually used.
4. **Outcome:** What happens that a user can see or rely on?
5. **Alternatives:** Which interaction/API approaches were evaluated, and what precise capability is missing?
6. **Data flow:** What is processed, where does it go, what gets stored, and what is discarded?
7. **Safeguards:** Access controls, retention, deletion, service providers, and user/server controls.
8. **Evidence:** A screenshot or short video showing the claim in a real test path.

## Replace vague statements

| Vague statement | Stronger direction |
|---|---|
| “The bot needs all intents.” | Request only the specific intent and link it to a live feature. |
| “We need members for commands.” | Identify the command and test user options, mentions, and targeted lookups. |
| “We use message content for moderation.” | State which messages and fields, what rules are run, what happens on a match, and why unprompted observation is required. |
| “We track presence for analytics.” | Define the user-facing action and explain why individual real-time status, rather than an aggregate count, is essential. |
| “It is secure; we do not store anything.” | Specify processing, logs, temporary caches, telemetry, provider boundaries, and actual deletion behavior. |
| “The intent improves the bot.” | State the capability and why it does not work without that data. |

## Evidence packet design

A reviewer should be able to follow the sequence without private access to your codebase:

- short product overview;
- intent-to-feature matrix;
- specific alternative analysis;
- real feature demonstration;
- concise data lifecycle diagram or paragraph;
- privacy policy/support information; and
- a note describing which privileged flag is enabled for the demonstration.

Use only information you are permitted to share. Remove tokens, internal endpoints, private messages, unrelated user IDs, and data not necessary to prove the use case. Do not stage fake user activity and present it as production evidence.

## Evidence should demonstrate necessity, not only existence

A screenshot showing a setting is on proves only that a setting exists. A video showing a moderator manually selects a message may support a context-command design rather than prove the need for arbitrary message access. Demonstrate the missing capability in a way that honestly reflects the feature.

## Don't promise approval

No wording pattern guarantees acceptance. Applications are evaluated individually, and policy fit, clarity, completeness, and technical evidence all matter. A high-quality template can improve communication; it cannot make an unnecessary intent necessary.

Use [the reusable application template](../templates/application-draft.md) to draft your own response. Delete every instruction and replace every bracket with verifiable facts before submission.
