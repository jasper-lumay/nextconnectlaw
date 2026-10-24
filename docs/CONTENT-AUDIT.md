# NextConnect Law — Content Audit & Source Log

This file tracks every piece of firm content used in the rebuild, where it came from, and every conflict found between source documents. Nothing in this project was invented — anything not traceable to a source document below is marked `[PLACEHOLDER — NEEDS CLIENT INPUT]` directly in the code/content files.

## Source documents reviewed

All original files are preserved in [`docs/source-documents/`](source-documents/).

1. `NextConnect Law Website (1).docx` — "Simple Improvement Report": an IA/content-strategy memo recommending site structure (Home / About Us / Practice Areas / Our Team / Locations / Resources / Contact Us), menu simplification, and de-duplication. **Strategy guidance, not firm facts.**
2. `NextConnect Law, web site (1) (1).docx` — raw export/draft of existing WordPress page content. Contains **three internally inconsistent drafts** (see conflicts below), apparently from different site iterations.
3. `Nextconnectlaw website draft for IP, M&A, and arbitration practice - Claude.pdf` — a polished homepage mockup/draft (navy #172C49 + gold accent, "NextConnect" hexagon motif) pitching 6 practice areas: IP, Transactions, M&A, Software Licensing, Immigration, Arbitration.
4. `C-iHub_Webdesign_Quote.pdf` — a WordPress pricing quote from I.DSIGN addressed to an unrelated client ("C-iHub"). **Not NextConnect Law content; excluded entirely.**

## Firm facts used (consistent across sources)

- Firm name: **NextConnect Law**
- Principal attorney: **Sumant Khan, Esq.**
- J.D., Emory University School of Law
- Based in Atlanta, Georgia
- Focus: technology-sector legal counsel — IP, commercial/SaaS contracts, M&A/transactions, immigration, cross-border/arbitration
- Phone: **(404) 944-3985** (consistent in both numeric formats across doc 2)
- Disclaimer language (doc 3, Claude draft): attorney advertising, no attorney-client relationship formed by viewing site or contacting firm, prior results don't guarantee outcome.

## Conflicts found — FLAGGED FOR CLIENT APPROVAL, not resolved by guessing

| # | Topic | Source A | Source B | Status in this build |
|---|---|---|---|---|
| 1 | Bar admissions | Claude draft: "Alabama (in good standing)" only | WordPress draft: "Georgia State Bar, Alabama Bar (No. 1787G40G), U.S. District Court N.D. Alabama, 6 additional states, Bar Council of Delhi, Supreme Court Bar Assoc. of India, Registered Patent Agent (India)" | Used the more detailed WordPress version in team/attorney content, but **marked for firm confirmation** — a bar admission is a factual/compliance claim that must be verified against current status before publishing. |
| 2 | Practice areas | Claude draft: IP · Transactions · M&A · Software Licensing · Immigration · Arbitration (6 areas) | WordPress "Technology Counsel" draft: Tech & SaaS Licensing · IP · Privacy & Data Compliance · Commercial Contracts · Cross-Border & International · Immigration Law (6 areas, no explicit "M&A" or "Arbitration" category) | Used WordPress draft's 6 categories (richer detail, more recent-looking "Technology Counsel" positioning) as scaffold placeholder. **M&A and Arbitration content from the Claude draft was NOT discarded** — kept in `content/practice-areas.ts` as commented reference so the client can pick which 6 (or more) categories to run with. |
| 3 | Additional services | WordPress legacy draft lists **Personal Injury** and **Criminal Defense** as services, plus a "case manager" **Karaman Mamand** for immigration matters | Not mentioned anywhere else; inconsistent with the tech/IP/M&A positioning used everywhere else | **Excluded from the scaffold.** These read as stale/leftover WordPress content unrelated to the firm's current positioning. Flagged for explicit confirmation — do not reintroduce without client sign-off, since practice-area claims are compliance-sensitive. |
| 4 | Contact email | WordPress draft: `sumantkhan@comcast.net` (personal ISP address, not a firm domain) | Claude draft: `[add firm email address]` (explicitly blank) | **Not used as the live contact address.** A personal @comcast.net address publicized as the firm's primary contact is unusual for a professional site and may not be the intended public address. Placeholder `[FIRM EMAIL — CONFIRM]` used in code; swap in `content/firm.ts` once confirmed. |
| 5 | Business hours | WordPress draft v1: Mon–Sat 9:00am–6:00pm, Sun closed | WordPress draft v2: Mon–Fri 9:00am–5:00pm, Sat/Sun closed | Claude draft explicitly says `[add street address or "by appointment"]`. **Used "By appointment" as the safe default**; exact hours left as `[PLACEHOLDER]` pending client confirmation. |
| 6 | Street address | Not present in any source (`[add street address]` placeholder in Claude draft; not given in WordPress draft) | — | `[PLACEHOLDER — STREET ADDRESS]` throughout. Do not publish a generated/guessed address. |
| 7 | Testimonials / reviews | WordPress draft literally says **"Reviews coming soon!"** — i.e., none exist yet | — | No testimonials included anywhere in the build. The Home/Resources pages render an honest empty state rather than fabricated quotes. |
| 8 | Consultation fee | WordPress draft: "Initial Consultation, 1 hr, $200" (booking widget) | Not mentioned elsewhere | Not surfaced as a firm commitment anywhere in the new site; flagged — confirm before publishing a specific price. |
| 9 | Payment/"Fees" page | WordPress draft has an unfinished stub page with generic "Title / Add a short description / Pay Now" placeholders | — | Not carried over — it was already unfinished placeholder content in the source itself, not real firm content. |

## Decisions made for this scaffold (reversible, flagged in code)

- Practice areas used: Intellectual Property, Technology & SaaS Licensing, Commercial Contracts, Privacy & Data Compliance, Cross-Border & International, Immigration Law — each page/content entry carries a comment pointing back to this audit.
- Attorney profile (Sumant Khan) content is the fuller WordPress "Technology Counsel" bio, **with bar admissions marked for verification** before go-live.
- No second attorney/team member was added — "Karaman Mamand" appears once, with an unclear role description, and is excluded per conflict #3.
- Street address, public email, and published hours are all placeholders pending firm confirmation — see `content/firm.ts`.
- No testimonials, case results, or client logos were invented anywhere in the site.

## Additional editorial decision

- The WordPress draft's "Notable Experience" list names specific former clients and engagements (e.g., named companies, a named international consultancy, a named Netherlands-based client). Rather than publish former/current client names without confirmed consent — a professional-responsibility concern, not just a content one — `content/team.ts` describes these engagements by sector/type instead of by name (e.g., "Netherlands-based technology company" rather than the named entity). The firm should confirm which client names (if any) they are authorized to publish, and specific names can be restored at that point.
- Specific bar license numbers (e.g., a specific Alabama bar number) and moot-court/individual-course credentials from the draft were left out of the scaffold pending verification — not because they're assumed false, but because a wrong or stale license number is a compliance risk; general bar-admission claims are flagged instead (see conflict #1).

**Anyone reviewing this build before go-live should resolve items 1, 2, 3, 4, 5, 6, and 8 with the firm directly.**
