# GEMINI Project Guide

This guide provides instructional context for the AI agent interacting with the **VitalChain-Medical** repository.

## Directory Overview

This repository contains the initial product and requirements documentation for an internal tool for **Alex Medical Supply**, a medical supply distribution company. The goal is to replace a complex and error-prone Excel-based workflow with a robust, web-based application.

## Project Status

*   **Phase:** Design & Architecture
*   **Analysis & Documentation:**
    *   The "Conceive" phase is complete.
    *   The initial suite of product documentation has been created, including pain points, SWOT analysis, What/Why/How, and a BPMN process diagram.
*   **Roles:**
    *   **Gemini:** Researches and develops detailed technical specifications.
    *   **Codex:** Oversees the project, assesses progress, and makes high-level decisions.

## Key Files

*   **`overview.md`**: The core product definition document.
*   **`documentation/conversation.md`**: The source transcript from the founder interview.
*   **`documentation/pain_points.md`**: A detailed list of the core problems the project aims to solve.
*   **`documentation/what_why_how.md`**: A summary document outlining the project's goals and approach.
*   **`documentation/swot_analysis.md`**: An analysis of the project's strengths, weaknesses, opportunities, and threats.
*   **`documentation/Diagram BPMN.pdf`**: The visual workflow diagram for the proposed system.
*   **`development/design-system/colors.css`**: A CSS file containing the color primitives (design tokens) for the UI.
*   **`development/design-system/tailwind.config.js`**: The configuration file for integrating the design system colors with Tailwind CSS.
*   **`README.md`**: Currently empty.
*   **`GEMINI.md`**: This file.

## Usage

The contents of this directory are intended to be used as the single source of truth for the **VitalChain-Medical** project. As the project progresses from planning to development, this directory will be updated with more detailed specifications, technical designs, and eventually, source code.

**Instructions for the AI agent:**

*   **Familiarize yourself with `overview.md` first.** It contains the most comprehensive summary of the project.
*   **Refer to `documentation/conversation.md` for the original client context.**
*   **As new features are defined, create new files in the `development/` directory.**
*   **When research is conducted, document the findings in the `research/` directory.**
*   **Once development begins, this `GEMINI.md` file should be updated** to include information about the project's tech stack, build commands, and testing procedures.
