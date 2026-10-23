# 08 — Privacy, Security, and the Data Lifecycle

Privileged-intent approval, if granted, is not permission to use all available data for any purpose. The data path must remain consistent with Discord's Developer Policy and Terms.

Official references: [Developer Policy](https://docs.discord.com/developers/policies-and-agreements/developer-policy) and [Developer Terms of Service](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service).

## Draw the lifecycle, not just the database schema

For each data category, document:

`Receive → Validate → Process → Act → Retain or discard → Delete`

At each step, answer:

- which exact fields are used;
- whether raw payloads are written to logs;
- whether a cache or queue retains the data;
- whether a third-party service receives it;
- who can query or export it;
- how long it remains; and
- how deletion propagates to backups and derived records.

“No database” does not mean “no retention” if payloads appear in logs, crash reports, queue snapshots, analytics, or provider observability.

## Minimization controls

### Member data

Do not persist a complete member roster if the feature needs only a current lookup or a derived count. If a roster sync is necessary, bound its schedule, fields, and retention, and document access and deletion.

### Presence data

Avoid creating a persistent behavioral timeline for a feature that needs only a current transition. Restrict visibility and keep any retained history proportionate to the stated function.

### Message data

State whether content, embeds, attachments, components, or poll fields are read. Treat attachments and external provider transfers as separate data-flow decisions. Avoid collecting raw content if a decision result or minimal evidence record is enough.

## Security controls worth naming

- environment-managed secrets; never commit bot tokens or application secrets;
- least-privilege roles for operational access;
- TLS for transport and appropriate encryption for persisted data;
- redacted logs and limited audit trails;
- controlled third-party processors and documented transfer boundaries;
- retention policies that are implemented rather than merely promised;
- a process for user/server deletion requests and abuse reports; and
- incident response if credentials or personal data are exposed.

## AI and external processing

Before sending API data to an external model, moderation service, analytics provider, or logging platform, review the live policy and provider terms. Discord's Developer Policy includes a restriction on using message content received through Discord's APIs to train AI/ML models, including LLMs, without Discord's express permission. Do not assume that a feature described as moderation automatically creates an exception.

Document the actual provider, purpose, payload fields, region/retention setting where known, access boundary, and deletion path. Do not make blanket claims about what a provider trains on unless its terms and configuration support that claim.

## User-facing transparency

Your privacy notice should say what the application collects, the reason, where it is processed, how long it is retained, who can access it, and how the user/server can report concerns or request applicable deletion. Keep the notice aligned with the code and review response.

## Review consistency test

Compare the same feature across product descriptions, code, database models, logs, privacy notice, service configuration, and recorded evidence. If one says “raw messages are discarded immediately” while another stores message bodies for 30 days, resolve the discrepancy before submission.
