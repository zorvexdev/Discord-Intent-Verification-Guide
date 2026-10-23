# Contributing to the ZorveX Intent Review Playbook

Thanks for helping improve the handbook. This project is about accurate, responsible use of Discord Gateway data, so accuracy matters more than making a request sound persuasive.

## Before opening a change

1. Identify the statement that needs correction and link the current official Discord page.
2. Separate official requirements from implementation guidance and personal inference.
3. Include the date checked for fast-changing review rules.
4. Do not add claims that a phrase, screenshot, or application pattern guarantees approval.
5. Do not include bot tokens, private keys, private user data, or screenshots containing unrelated personal information.

## Writing standards

- Use plain, precise language and original explanations.
- Name the exact intent, feature, events or fields, data purpose, and retention controls.
- Prefer examples that minimize data access.
- Add alternatives before recommending a privileged intent.
- Keep code examples small and safe; read credentials from environment variables.
- Mark non-official conclusions as practical guidance rather than Discord policy.

## Updating official facts

For threshold, deadlines, review status, and annual reapplication, check the official [review guide](https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review) first. For event behavior and fields, use the official [Gateway documentation](https://docs.discord.com/developers/events/gateway). If two Discord pages appear inconsistent, document the conflict and prioritize the more current dedicated review guide for the review workflow.

## Pull request checklist

- [ ] All links resolve or are clearly marked as external resources.
- [ ] Claims about Discord requirements link to an official source.
- [ ] The proposed intent set is no broader than the feature needs.
- [ ] Examples contain no real credentials or private data.
- [ ] The text does not promise review approval.
- [ ] Any material changes to the data lifecycle are reflected in the privacy checklist.
