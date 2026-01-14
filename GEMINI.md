# GEMINI Project Guide

This guide provides instructional context for the AI agent interacting with the **VitalChain-Medical** repository.

## Directory Overview

This repository contains the initial product and requirements documentation for an internal tool for **Alex Medical Supply**, a medical supply distribution company. The goal is to replace a complex and error-prone Excel-based workflow with a robust, web-based application.

## Project Status

*   **Phase:** Conceive
*   **Analysis:**
    *   Codex overview analysis: Complete
    *   Comparison with human overview: Started
*   **Roles:**
    *   **Gemini:** Researches and develops detailed technical specifications.
    *   **Codex:** Oversees the project, assesses progress, and makes high-level decisions.
*   **Documentation:** Initial gathering of documentation is complete.

## Key Files

*   **`overview.md`**: The core product definition document. It outlines the problem statement, goals, core features (the "what"), justification (the "why"), high-level workflow, and a detailed list of ambiguities and open questions that need to be resolved. This is the most important file for understanding the project's scope.
*   **`documentation/conversation.md`**: A transcript of the initial conversation between "Alex" (the founder) and "Camila" (the product manager). It provides the raw, unfiltered vision and pain points from the client's perspective.
*   **`features/`**: This directory will likely contain detailed specifications for individual features as they are defined.
*   **`specResearch/`**: This directory may be used for research related to technical specifications, such as API documentation for third-party services like DocuSign or Stripe.
*   **`README.md`**: Currently empty, but will likely contain a high-level summary of the project and instructions for new contributors.
*   **`GEMINI.md`**: This file, providing context and instructions for the AI agent.

## Usage

The contents of this directory are intended to be used as the single source of truth for the **VitalChain-Medical** project. As the project progresses from planning to development, this directory will be updated with more detailed specifications, technical designs, and eventually, source code.

**Instructions for the AI agent:**

*   **Familiarize yourself with `overview.md` first.** It contains the most comprehensive summary of the project.
*   **Refer to `documentation/conversation.md` for the original client context.**
*   **As new features are defined, create new files in the `features/` directory.**
*   **When research is conducted, document the findings in the `specResearch/` directory.**
*   **Once development begins, this `GEMINI.md` file should be updated** to include information about the project's tech stack, build commands, and testing procedures.