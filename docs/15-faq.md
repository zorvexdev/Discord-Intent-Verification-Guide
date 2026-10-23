# 15 — Frequently Asked Questions

### Does adding `Administrator` remove the need for a privileged intent?

No. Normal guild permissions and Gateway data authorization are different systems. A bot can have administrative permissions in a server and still be unable to request a privileged intent.

### Is the old 100-server rule still the current privileged-intent threshold?

No. Discord's dedicated review guide, updated in June 2026, describes a threshold based on unique users with access to the application across installed servers. Follow the current portal notice, not an old tutorial.

### If the portal toggle is enabled, why does the bot receive empty message content?

The live client must also request the flag in Identify, and your scenario may be subject to the documented exceptions. Test ordinary non-mention guild messages separately from DMs, mentions, own messages, and selected message-context interactions.

### Does every prefix-command bot need Message Content?

A legacy prefix handler commonly depends on it. But if commands can be migrated to slash commands or other interactions, the need may disappear. Audit actual functionality before requesting broad content access.

### Does a request automatically get approved if the bot has a large user base?

No. Scale may trigger review requirements; it does not prove that each requested intent is necessary or compliant.

### Should I request all three intents to avoid future changes?

No. Future or hypothetical functionality is not a current product dependency. Request only the categories that are needed and supported by real evidence.

### Can a message context-menu command read any message in the server?

No. It acts on the selected message exposed through the interaction; that does not grant arbitrary message history access.

### If access is denied, can I route the same data through another API or a user account?

Do not attempt to bypass Discord's controls. Rebuild the feature around permitted alternatives or prepare a truthful, specific request that addresses the notice.

### Does intent review replace app verification?

No. They are separate processes and should be tracked separately.

### Is this playbook official Discord guidance?

No. It is an independent ZorveX Development guide. Official Discord policy, API docs, and the app's own portal notice control.
