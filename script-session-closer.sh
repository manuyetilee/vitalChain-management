#!/bin/bash

# This script helps you wrap up your day.

# 1. Get session summary
echo "Enter a one-line summary for the git commit message:"
read commit_summary

echo "Enter a detailed summary for session-summary.md (press Ctrl+D when done):"
detailed_summary=$(cat)

# 2. Update session-summary.md
echo "## $(date)" >> session-summary.md
echo "$detailed_summary" >> session-summary.md
echo "" >> session-summary.md

# 3. Remind to update context files
echo "Reminder: Read GEMINI.md and sync to AGENTS.md. Ensure both files are identical."

# 4. Commit to git
git add .
git commit -m "End of day: $commit_summary"

echo "Changes committed. You can now run 'git push'."
