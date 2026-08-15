---
description: Feature Development
---

# Feature Development Pipeline

Execute the following sequential phases whenever implementing a feature or complex change.

## Phase 1: Planning
- Persona: Read [.agents/agents/planner.md](file:///c:/Users/ab-2/Documents/projects/IEH/FX/Software/.agents/agents/planner.md)
- Goal: Research the codebase and create an `implementation_plan.md` artifact.
- Gate: Stop and wait for user approval before modifying any code.

## Phase 2: Implementation
- Persona: Read [.agents/agents/implementer.md](file:///c:/Users/ab-2/Documents/projects/IEH/FX/Software/.agents/agents/implementer.md)
- Goal: Implement the changes step-by-step according to the approved plan. Build and verify test suites.

## Phase 3: Review & Audit
- Persona: Read [.agents/agents/reviewer.md](file:///c:/Users/ab-2/Documents/projects/IEH/FX/Software/.agents/agents/reviewer.md)
- Skill: Activate [.agents/skills/code-review/SKILL.md](file:///c:/Users/ab-2/Documents/projects/IEH/FX/Software/.agents/skills/code-review/SKILL.md)
- Goal: Inspect modified files against the 7-point review checklist and summarize findings in `walkthrough.md`.

## Step 4 — Human gate

If the reviewer approves, summarize the changes for the user.

If changes are requested, present the findings and allow
the implementation agent to address them.

Never merge or deploy without explicit human approval.