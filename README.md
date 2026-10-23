<div align="center">

# ZorveX Development
## Discord Privileged Intent Review Playbook

**A practical field manual for auditing Gateway data access, preparing a truthful review request, and keeping production behavior aligned with Discord policy.**

![Documentation](https://img.shields.io/badge/docs-maintained-7F00FF?style=flat-square)
![Scope](https://img.shields.io/badge/scope-Discord%20Gateway%20Intents-5865F2?style=flat-square)
![Status](https://img.shields.io/badge/guide-independent-2ea44f?style=flat-square)

</div>

---

## Purpose

This handbook helps developers answer one question before sending a privileged-intent request: **what exact feature needs the data, and can the same feature be built without that intent?** It is an independently written guide from ZorveX Development, not an official Discord publication and not an approval service.

The playbook covers the three privileged Gateway intent groups:

- **Guild Members** (`GUILD_MEMBERS`): member lifecycle events and broader member retrieval.
- **Guild Presences** (`GUILD_PRESENCES`): individual presence updates and related activity/status data.
- **Message Content** (`MESSAGE_CONTENT`): content-bearing fields such as `content`, `embeds`, `attachments`, `components`, and `poll` where applicable.

Discord's own documentation is authoritative. Policies, API behavior, review dates, eligibility, and portal screens can change, so verify official links immediately before acting.

## Start here

1. Read [Intent access explained](./docs/01-intent-access-explained.md).
2. Audit only the intents your production features actually depend on.
3. Evaluate [interaction-first alternatives](./docs/06-alternatives-first.md) before applying.
4. Write down the real data flow and retention controls using the [audit worksheet](./templates/intent-audit-matrix.csv).
5. Prepare the submission with [review request writing](./docs/07-review-request-writing.md).
6. Complete the [release checklist](./docs/12-pre-submission-checklist.md).

## Documentation map

| File | Use it for |
|---|---|
| [00 — Start here](./docs/00-start-here.md) | Fast orientation and decision path |
| [01 — Intent access explained](./docs/01-intent-access-explained.md) | Privileged data vs. bot permissions, portal setting, and runtime request |
| [02 — Guild Members](./docs/02-guild-members.md) | Member events, roster retrieval, targeted lookup alternatives |
| [03 — Guild Presences](./docs/03-guild-presences.md) | Presence signals, alternatives, and privacy boundaries |
| [04 — Message Content](./docs/04-message-content.md) | Content fields, exceptions, interaction-based redesign, AI/ML restriction |
| [05 — Review timeline](./docs/05-review-timeline.md) | User threshold, 90-day notices, annual reapplication, separate verification track |
| [06 — Alternatives first](./docs/06-alternatives-first.md) | Slash commands, context commands, components, modals, REST, and HTTP interactions |
| [07 — Review request writing](./docs/07-review-request-writing.md) | How to describe necessity without vague claims |
| [08 — Privacy and data lifecycle](./docs/08-privacy-and-data-lifecycle.md) | Data minimization, disclosure, retention, access, and deletion |
| [09 — Runtime configuration](./docs/09-runtime-configuration.md) | Portal/client parity and implementation checks |
| [10 — Troubleshooting](./docs/10-troubleshooting.md) | Missing data, close codes 4013/4014, and test strategy |
| [11 — Denial and annual readiness](./docs/11-denial-and-annual-readiness.md) | Corrective action and reapplication preparation |
| [12 — Pre-submission checklist](./docs/12-pre-submission-checklist.md) | Final readiness review |
| [13 — Reusable templates](./docs/13-reusable-templates.md) | Feature audit, evidence plan, and response template |
| [14 — Official source register](./docs/14-official-source-register.md) | Current source URLs and confidence boundaries |
| [15 — FAQ](./docs/15-faq.md) | Common misunderstandings |
| [Implementation examples](./examples/) | Minimal `discord.py` and `discord.js` intent configuration |

## Current policy snapshot

**Reviewed on 23 October 2026.** Discord's current privileged-intent review guide describes the threshold using unique users who can see the application across installed servers, not the historical 100-server rule. After Discord sends a review/reapplication notice, its current guide describes a 90-day submission window; existing reviewed access is subject to annual reapplication after notice. Read [Discord's live review guide](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review) for the exact current state of your application.

The review guide also says an app can continue to grow while a timely review is pending. If you miss the submission window, access can be removed; do not rely on a summary instead of the notice in your Developer Portal.

## Optional ZIP import workflow

A manual GitHub Actions workflow is included at [`import-playbook-zip.yml`](./.github/workflows/import-playbook-zip.yml). Add that workflow to your destination repository in a separate commit first. Then upload `zorvex-discord-intent-review-playbook.zip` to the repository root and run **Actions → Import ZorveX Intent Review Playbook ZIP → Run workflow**. It validates and extracts the archive, flattens a single wrapper directory, preserves repository metadata and environment folders, removes the ZIP only after a successful extraction, then commits and pushes the result. The workflow requires repository Actions permissions to allow content writes and can be blocked by branch protection rules.

## Important boundaries

- Turning on a portal toggle does not make an intent necessary for your product.
- An intent in code does not bypass Discord authorization.
- Normal server permissions do not grant privileged Gateway access.
- App Verification and Privileged Intent Review are separate processes.
- A review request should explain real production behavior, not future ideas or a generic library requirement.
- Message Content is not just `message.content`; several content-bearing fields are affected.
- Do not disguise the same data collection after a denial. Redesign the feature or provide a truthful, specific case.

## Attribution and licensing

Original text, original examples, and templates in this project are covered by the [ZorveX Development Documentation License](./LICENSE.md). External facts and linked documentation remain governed by their respective owners and terms. Discord trademarks and policies are not owned by ZorveX Development.

## Official starting points

- [Getting Started with Privileged Intent Review](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review)
- [Gateway Intents](https://docs.discord.com/developers/events/gateway#gateway-intents)
- [You Might Not Need a Privileged Intent](https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent)
- [Discord Developer Policy](https://docs.discord.com/developers/policies-and-agreements/developer-policy)

---

<sub>Maintained by ZorveX Development. Independent community documentation; not affiliated with or endorsed by Discord. Last source review: 2026-10-23.</sub>
