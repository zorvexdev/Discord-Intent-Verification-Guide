# 12 — Pre-Submission Checklist

Use this against the production build, not just a prototype. An unchecked item is a reason to pause and investigate.

## Product necessity

- [ ] I can name a shipped, user-facing feature for every requested intent.
- [ ] Each feature is mapped to the exact event, field, or endpoint it uses.
- [ ] I tested interactions and targeted API alternatives where relevant.
- [ ] I can explain the exact capability missing from every alternative I rejected.
- [ ] I removed intents that are only convenient or intended for future features.
- [ ] I do not promise or imply that any template guarantees approval.

## Guild Members

- [ ] I identified whether I need add, update, remove, thread-member, search, or list behavior.
- [ ] I explained why a selected-user interaction or targeted lookup does not meet the real requirement.
- [ ] I documented roster/lookup frequency, limits, cache behavior, and rate limits where applicable.
- [ ] I identified fields collected, storage, access, and deletion.

## Guild Presences

- [ ] I named the actual presence transition/fields and resulting product action.
- [ ] I checked whether an aggregate count or explicit interaction is enough.
- [ ] I documented who can see presence-derived results.
- [ ] I do not silently retain behavior history beyond what the feature needs.

## Message Content

- [ ] I listed the exact fields and message types required.
- [ ] I distinguished arbitrary guild messages from DMs, mentions, own messages, and selected context-menu messages.
- [ ] I evaluated slash commands, context commands, modals, buttons, and select menus.
- [ ] I documented raw content flow, temporary cache/log behavior, storage, providers, retention, and deletion.
- [ ] I reviewed the current Developer Policy restrictions on AI/ML training with message content.

## Portal and runtime

- [ ] The Developer Portal settings match the intended product feature set.
- [ ] The runtime Identify flags match the portal configuration and current authorization.
- [ ] Every shard, worker, staging deployment, and production process is consistent.
- [ ] All processes reconnect after a configuration change.
- [ ] I can distinguish `4013` from `4014`.
- [ ] I tested each feature with the privileged flag absent where that test is possible.

## Privacy and policy

- [ ] The privacy notice accurately describes actual data practices.
- [ ] Logs, crash reports, caches, analytics, queues, and provider requests have been reviewed.
- [ ] Data is not repurposed for unrelated uses.
- [ ] Secrets are not logged or included in screenshots.
- [ ] Deletion and issue-reporting paths are clear and operational.
- [ ] Access is limited to services/staff who need it.

## Evidence packet

- [ ] The app's purpose is described in plain language.
- [ ] Each intent is tied to a real feature and specific data.
- [ ] Alternative approaches and their precise limitations are documented.
- [ ] Evidence shows trigger, behavior, and user-visible outcome.
- [ ] Screenshots/video do not expose tokens, private keys, or unrelated personal data.
- [ ] All claims match the production build and privacy notice.

## Timing and process

- [ ] I checked the current Developer Portal notification and deadline.
- [ ] If notified, I am tracking the 90-day submission window shown by Discord.
- [ ] Annual reapplication is tracked separately from app verification.
- [ ] The source register was checked against current official pages.
- [ ] A responsible team member can answer follow-up questions with implementation facts.
