# 13 — Reusable Templates

These templates are scaffolding for your own audit. They must be filled with real production details and must not be submitted unchanged.

## Intent-to-feature mapping

Use `../templates/intent-audit-matrix.csv` to inventory each intent. One row per feature/intent relationship is easier to review than one row per bot.

## One-paragraph feature description

> **Product purpose:** [What the application does and who uses it.]  
> **Feature:** [Name and trigger.]  
> **Intent:** [Exact privileged intent.]  
> **Data used:** [Events, fields, or endpoint.]  
> **Result:** [What the application does with the data.]  
> **Alternative analysis:** [Approaches evaluated and exact missing capability.]  
> **Data lifecycle:** [Receive, process, store/transmit, retain, delete.]  
> **Controls:** [Access, opt-out/configuration, privacy notice, reporting.]  
> **Evidence:** [Link to a current screenshot/video or internal record prepared for submission.]

## Alternative-analysis note

For each approach, fill in:

- Alternative tested:
- Test environment and date:
- Expected result:
- Actual result:
- Why this is or is not sufficient:
- Evidence/reference:
- Product redesign that would avoid the intent:

## Evidence plan

A practical evidence list might include a short walkthrough showing the app context, the user-visible feature, the trigger, the result, and relevant settings. Capture only what a reviewer needs. Never include a real token, secret, private user conversation, or unrelated personally identifying data.

## Submission hygiene

- Remove these instructions and bracketed placeholders before submitting.
- Never claim that data is not stored until logs, caches, telemetry, and third-party integrations have been checked.
- Do not say an alternative was tested if it was only discussed.
- Do not list every intent in the request “just in case.”
- Do not use approval of another app as proof yours qualifies.
