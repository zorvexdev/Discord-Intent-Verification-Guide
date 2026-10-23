# 05 — Thresholds, Notifications, and Review Timeline

## Rules to verify against the live portal

As checked on **23 October 2026**, Discord's dedicated review guide describes the threshold in terms of unique users who can see the app across the servers where it is installed. It states that apps exceeding 10,000 such users need privileged-intent access review, and a notification starts a 90-day submission window. Treat the current notice in your Developer Portal as the operational source for your app's actual deadline.

Official source: [Getting Started with Privileged Intent Review](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review).

## Timeline overview

| Situation | Practical action |
|---|---|
| App is well below the threshold | Enable only necessary intents and keep an audit ready for growth. |
| App is approaching the relevant user threshold | Audit features, alternatives, data flows, and evidence before a notice arrives. |
| Discord sends a review notice | Record the notice date and the deadline shown; prepare and submit within 90 days. |
| Already reviewed for privileged access | Maintain current use-case notes and reapply annually after Discord's notice. |
| Submission is pending | Follow the current review guide for app behavior while pending; it currently says the app can continue operating with the intents under review and can continue growing. |
| Deadline is missed | Discord states current access can be removed; a request may still be made later. Do not assume access will remain. |
| Request is denied | Follow the specific notice: some cases may allow correction while current access remains, others may lose access. |

## Do not mix review with verification

App Verification and privileged-intent review answer different questions. The current review guidance is no longer based on the old “100 servers” trigger for privileged intents. Historical posts, cached screenshots, and older library guides may use the previous server threshold or merge the two processes. Check the official dedicated review page for current thresholds and instructions.

## Deadline hygiene

For each app, record:

- application name and application ID in a private/internal tracker;
- notification date;
- deadline displayed by Discord;
- requested intents;
- owner responsible for submission;
- status and any response from Discord; and
- the date the next annual reminder is expected, after confirming the actual notice.

Do not put tokens or credentials in the tracker. Use a task/reminder system that your team monitors.

## Why early auditing is cheaper

Discord's own guide recommends taking stock of real data needs before applying. Removing unnecessary intent dependencies before growth reduces future work: code no longer depends on the data, documentation becomes simpler, and your evidence packet can focus on the remaining use case.
