# 11 — Responding to Denial and Staying Ready for Reapplication

A review decision should trigger a product audit, not a workaround hunt. The exact notification from Discord controls what happens to current access and what deadline applies.

## First response to a denial or follow-up

1. Read the notice carefully and record any deadline or temporary access conditions.
2. Map each concern in the notice to a specific code path, user journey, data field, policy statement, or evidence gap.
3. Re-test alternatives that could remove the dependency.
4. Narrow the requested set to the intents that still serve a real, policy-consistent feature.
5. Change the implementation if the review indicates an alternative is sufficient.
6. Update the data lifecycle/privacy description to reflect what the product actually does.
7. Record new, truthful evidence that demonstrates the revised behavior.
8. Submit or resubmit following the notice and current official instructions.

Discord explains that outcomes differ: some applications may be allowed to correct/resubmit while retaining access, while others can have access removed but submit another request later. Do not assume the same grace period applies to every case.

## Response mapping

| Concern | A useful corrective action |
|---|---|
| Feature is not clearly described | Demonstrate trigger → data → visible outcome |
| Alternative can do the job | Migrate, remove the intent, and test the replacement |
| Request includes unused intents | Remove them from code and the request |
| Data retention is vague | State actual logs, caches, storage periods, and deletion behavior |
| Policy mismatch | Stop or redesign the non-compliant data use before reapplying |
| Evidence does not prove the claim | Record a real, privacy-safe test showing the need |
| Privacy notice conflicts with runtime | Fix the documentation or runtime until they match |

## Never bypass access denial

Do not attempt to circumvent a denial through a user account, scraping, alternate credentials, another endpoint that is not authorized for the data, misleading feature labels, or false evidence. Such workarounds do not establish necessity and can make the policy problem worse.

## Build an annual readiness folder

Keep these items current in a private/controlled internal location:

- one-paragraph app/product description;
- intent-to-feature matrix;
- list of relevant Gateway events and REST endpoints;
- alternatives tried and results;
- current implementation/configuration inventory;
- data-flow and retention statement;
- privacy notice and support/reporting contact;
- screenshots or a short recording with secrets removed;
- current provider/service details; and
- date when each official source was last reviewed.

When Discord notifies you to reapply, use the exact 90-day window shown in the current official guide/notice. Do not infer the date solely from an old approval email or an annual calendar entry.

## Treat approval as specific and temporary

An approval for one app, intent, or feature does not establish eligibility for a different app. Keep the feature and data use consistent with what was reviewed, and re-audit when scope changes.
