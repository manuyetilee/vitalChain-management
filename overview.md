# Product Overview (Alex Medical Supply Internal Tool)

## General description
Alex runs a medical supply distribution company that fulfills orders for physical therapy clinics treating lymphedema and breast cancer patients. Today the team manages the full order intake, pricing, and billing workflow in a complex Excel spreadsheet. The spreadsheet acts as both an intake form and a pricing calculator, pulling from multiple hidden tables (products, fee schedules, payer rates) and applying conditional logic by vendor, product type, state, and payer. It is fragile, hard to scale, and error-prone.

Alex wants a web-based internal tool that replaces the spreadsheet with a structured database-backed system. The tool should guide the team through order intake, auto-populate pricing and billable amounts from reference data, and generate the three required documents (encounter form, patient invoice, proof of delivery). It should also support specific operational needs like manager approvals for certain HCPCS codes, attaching measurement forms per line item, and handling self-pay pricing.

## The what (core needs)
- A clean, web-based internal tool for order intake and pricing (not customer-facing).
- Two primary reference databases:
  - Products: costs, vendors, categories, HCPCS codes, MSRP.
  - Fee schedules: payer rates, multipliers, possibly state-based variations.
- A structured order entry flow that minimizes manual entry:
  - Employee enters patient info and selects products from dropdowns.
  - System auto-populates pricing and billable amounts using reference data and business rules.
- Document generation (PDFs):
  1. Encounter form (internal summary of the order).
  2. Patient invoice (sent via DocuSign with Stripe payment link).
  3. Proof of delivery (POD) sent to the patient for signature after delivery.
- Approval flow for specific HCPCS codes (currently manual via SharePoint).
- Upload/attach measurement forms for certain products, per line item.
- Support self-pay patients by defaulting prices to vendor MSRP.
- Future desire: track whether items require prior authorization.

## The why (problem and goals)
- Current spreadsheet is complex and brittle; one broken field can disrupt calculations.
- Manual processes create errors and slow down throughput.
- Team spends time re-entering the same data into other systems (e.g., vendor portals).
- Goal: make the workflow faster, more reliable, and easier to train staff on.
- Secondary goal: improve internal organization and document consistency even though the tool is internal.

## High-level workflow (current vs. desired)
- Current:
  - Clinic sends order → employee fills Excel intake with patient info, insurance, shipping, products.
  - Spreadsheet calculates margin, cost per unit, billable amounts.
  - Some orders require manager approval (separate manual process).
  - Generate documents as PDFs, upload to internal system.
  - Send invoice and consent via DocuSign.
  - If paid, place order manually in vendor portal.
  - After delivery, send POD to patient for signature.
- Desired (at minimum):
  - Web form intake with auto-population from product and fee schedule databases.
  - Built-in approval step for certain HCPCS codes.
  - One-click generation of encounter form, invoice, and POD.
  - Attach measurement forms to relevant line items.
  - Built-in self-pay pricing rule.

## Ambiguity points / open questions
- Data model details:
  - What fields are required for patient, insurance, payer, shipping, and order line items?
  - Exact structure of product database (categories, HCPCS codes, vendor mapping).
  - Fee schedule logic: How are payer rates defined (by payer, state, product, HCPCS)?
  - How are multipliers applied (per payer, per product, per state)?
- Pricing rules:
  - How to calculate margin, cost per unit, billable amount, patient responsibility.
  - Self-pay pricing: always MSRP, or are there discounts/overrides?
  - Handling multiple line items with different vendors and payers.
- Document templates:
  - Exact fields and formatting required for encounter form, invoice, and POD.
  - Whether templates exist today or need to be designed from scratch.
- Approval workflow:
  - Which HCPCS codes require approval?
  - Who can approve and what happens after approval?
  - Should approvals be tracked with timestamps/audit log?
- Integrations:
  - DocuSign flow: which documents need signature? Is there existing DocuSign template usage?
  - Stripe payment link: how is it generated today; does it need to be embedded in the invoice?
  - Internal system where PDFs are uploaded: what system is that, and is there an API?
- Vendor ordering:
  - Automation desired but unclear scope for V1: email order vs. portal integration.
  - How to detect vendor and which email should be used.
- Measurement forms:
  - Which products require measurement forms?
  - Accepted file types and size limits.
  - Whether therapist uploads forms or internal team does.
- Prior authorization tracking:
  - Is this a simple flag or does it require additional workflow?

## Key constraints / scope considerations
- Internal-only tool (no external customers).
- Needs to be reliable and user-friendly for operations staff.
- Must support medical supply workflow and billing logic.
- Multiple documents and signatures are central to the process.
- Automation goals exist but may need phased rollout (start with manual steps wrapped in the tool).

## What matters most for V1
- Replace the fragile Excel workflow with structured intake + calculations.
- Ensure pricing and billable amounts are correct and auditable.
- Generate required documents in a consistent, repeatable way.
- Minimize manual re-entry and reduce errors.

## Not yet specified (risk of scope creep)
- Full vendor portal automation.
- Complex prior authorization tracking workflows.
- Deep analytics or reporting.
- Multi-location or multi-clinic permissions.
