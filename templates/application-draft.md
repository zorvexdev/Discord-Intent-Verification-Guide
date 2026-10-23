# Privileged Intent Review — Working Draft

> Internal worksheet only. Replace every placeholder with facts from the production application. Do not submit as-is.

## Application overview

- **Application name:** [name]
- **Primary purpose:** [one or two factual sentences]
- **Install context:** [server install / user install / both, as applicable]
- **Support/privacy links:** [public URLs]
- **Current product version/date:** [version/date]

## Intent request 1

- **Intent:** [Guild Members / Guild Presences / Message Content]
- **Feature name:** [shipped feature]
- **Trigger:** [actual event, operation, or input]
- **Exact fields/data:** [enumerate only what is used]
- **User-visible result:** [what happens]
- **Why the data category is needed:** [specific technical dependency]
- **Alternatives tested:** [slash/context command, component, modal, REST lookup, etc.]
- **Why the alternative is insufficient:** [exact missing capability]
- **Processing flow:** [receive → process → result]
- **Storage and retention:** [raw and derived data, actual duration]
- **External providers:** [provider, purpose, fields shared, or none]
- **Security/access:** [who can access, safeguards]
- **Deletion/reporting:** [how requests/issues are handled]
- **Evidence:** [video/screenshot reference]

## Repeat per intent

Do not combine three intents in a single vague justification. Give each one its own feature/data dependency and its own alternative analysis.

## Reviewer-friendly evidence plan

1. Start with the real application and the relevant feature entry point.
2. Show the actual trigger or a clearly labelled test condition.
3. Show the product's visible result.
4. Show the relevant settings or controls where necessary.
5. Redact bot tokens, application secrets, private conversations, and unrelated personal data.

## Final factual review

- [ ] All statements reflect the production build.
- [ ] No functionality is described as shipped when it is only planned.
- [ ] Every claimed alternative was actually evaluated.
- [ ] Data retention and providers match code/configuration.
- [ ] Privacy notice matches real behavior.
- [ ] Each requested intent has a specific necessity explanation.
- [ ] Official policy and the portal notice were checked on the submission date.
