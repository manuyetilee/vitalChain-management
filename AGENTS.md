# Repository Guidelines

## Project Structure & Module Organization
This repository is documentation-focused and acts as the source of truth for the VitalChain-Medical project.
- `overview.md`: core product definition, goals, workflow, and open questions.
- `documentation/`: source materials such as `documentation/conversation.md`.
- `development/`: home for detailed feature specs and implementation planning.
- `research/`: home for technical research (for example, DocuSign or Stripe notes).
- `README.md`: placeholder for a high-level project summary.
If code is added later, introduce a clear separation such as `src/` for application code and `tests/` for automated tests, and update this guide accordingly.

## Build, Test, and Development Commands
No build, test, or run commands are defined today. When tooling is added, document the exact commands and expected outputs in this section (for example, `npm test` for unit tests or `make build` for packaging).

## Coding Style & Naming Conventions
All content is Markdown.
- Use sentence-case headings and keep sections short and task-focused.
- Prefer ASCII characters unless non-ASCII is required by the content.
- Name files by purpose (for example, `overview.md`, `requirements-v1.md`).
As features are defined, create new files in `development/` and document research in `research/`.
If code is introduced, add language-specific formatting rules, indentation preferences, and any formatter/linter commands here.

## Testing Guidelines
No test framework is configured. If tests are introduced, specify:
- Test location (for example, `tests/` or `__tests__/`).
- Naming conventions (for example, `*.test.ts` or `*_spec.rb`).
- How to run the test suite and any coverage expectations.

## Commit & Pull Request Guidelines
The Git history currently contains a single commit (`first commit`), so no established convention exists yet.
- Use clear, imperative commit messages (for example, `Add requirements overview`).
- For PRs, include a concise summary, links to relevant docs, and screenshots when visual artifacts are added.

## Agent-Specific Instructions
- Start with `overview.md` for the most complete project summary.
- Use `documentation/conversation.md` for the original client context.
- Add feature specs in `development/` and research notes in `research/`.
- Update `GEMINI.md` once development begins to include tech stack, build, and testing details.

## Security & Configuration Tips
Do not include real patient data or PHI. Use redacted or synthetic examples in documentation and any future datasets.
