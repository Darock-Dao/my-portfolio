---
name: code-review
description: Use this skill when reviewing code changes, validating pull requests, or conducting a security and quality audit.
---

# Code Review Skill

Review the implementation against the original requirements, approved
implementation plan, project rules, and existing code patterns.

## Review Process

1. Understand the intended behavior and scope of the change.
2. Inspect all modified files and relevant surrounding code.
3. Verify the implementation satisfies the requested requirements.
4. Check for regressions or unintended behavior.
5. Evaluate code quality using the checklist below.
6. Verify the implementation has been appropriately tested.
7. Report findings with clear severity and recommended actions.

## Review Checklist

1. **Requirements**
   - Does the implementation satisfy the requested feature?
   - Does it follow the approved implementation plan?
   - Were any requirements missed or changed without approval?

2. **Correctness**
   - Check for logic errors, null/undefined handling, off-by-one errors,
     invalid state, and improper exception/error handling.
   - Verify that existing functionality remains intact.

3. **Edge Cases**
   - Consider invalid input, empty states, unexpected values, and failure
     conditions relevant to the feature.

4. **Code Quality**
   - Follow existing project patterns and conventions.
   - Prefer simple, readable implementations.
   - Identify unnecessary duplication, complexity, or abstractions.
   - Avoid unrelated refactoring.

5. **Performance**
   - Identify unnecessary computation, excessive rendering, inefficient
     queries, memory leaks, or other relevant performance issues.
   - Only flag performance concerns that are meaningful for the project.

6. **Security**
   - Check input validation, data exposure, unsafe dependencies, injection
     risks, and other security concerns relevant to the implementation.

7. **Testing**
   - Verify relevant tests were added or updated when appropriate.
   - Verify the project builds successfully.
   - Verify relevant tests and validation steps pass.

8. **Responsive Design**
  For frontend changes:

- Verify desktop, tablet, and mobile layouts.
- Check for horizontal overflow.
- Check for clipped, overlapping, or inaccessible elements.
- Verify navigation and interactive elements remain usable on smaller screens.``

9. **Documentation**
   - Verify that user-facing or technically significant behavior is
     documented when appropriate.

## Feedback

- Prioritize findings by severity.
- Be specific about the affected file, component, or code.
- Explain why an issue matters, not just what is wrong.
- Suggest a concrete fix when possible.
- Do not request changes based solely on personal preference.
- Distinguish between required fixes and optional improvements.

## Severity

- **Critical** — Security vulnerability, data loss, or severe breakage.
- **High** — Significant functional defect or regression.
- **Medium** — Bug, maintainability issue, or missing requirement that should
  be addressed.
- **Low** — Minor issue or improvement that does not affect functionality.