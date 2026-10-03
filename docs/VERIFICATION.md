# Verification — 3 October 2026

- Installed dependencies using npm (invoked through the bundled runtime because this computer has no standalone npm command).
- npm run dev (Turbopack): starts successfully and returns HTTP 200 for the homepage.
- npm run build: successful production static export with TypeScript and ESLint checks.
- Root export: homepage, all four research pages, and favicon return HTTP 200.
- Repository-path build with NEXT_PUBLIC_BASE_PATH=/REPOSITORY: successful; all 14 checked local HTML asset/route references resolve in out/, with four generated research pages.
- Final out/ restored to the root-path build.
- Dependency installation/audit: zero reported vulnerabilities after applying compatible fixes. Removed unused svg2ico; used bibtex-parse-js 0.0.23; patched Next.js within version 15; patched PostCSS through an override.
- Browser verification on the exported site: desktop and 390px mobile layouts; no horizontal overflow (375px client/scroll width); no broken images or TODO URLs linked.
- Mobile menu expands, navigates, and closes.
- Theme toggle works in both directions.
- BibTeX dialog opens, copy shows confirmation, and close removes the dialog.
- Research link navigates to its detail page with overview, related publication, and platform.
- Motion uses MotionConfig reducedMotion=user and reduced-motion CSS; automatic video previews check the user's motion preference, while deliberate play remains available.
- Missing media renders labeled conceptual diagrams; missing contacts/CV are non-clickable placeholders.
- The supplied arXiv DOI is carried from the brief; its bibliography was not independently verified.
- Actual experiment GIF/video playback awaits supplied media. Video code has poster, native muted loop/playsinline, explicit play/pause, lazy loading, and error fallback.
- GitHub Pages workflow is configured, but no repository/account/domain was provided and no public deployment was made.

## Contact and publication update
Work and personal emails, LinkedIn, and Google Scholar populated from user-provided details. Scholar profile lists one publication; final title, ordered authors, conference, pages, publisher, and date read from its article detail page on 3 October 2026. IEEE and arXiv links imported. Source: https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EPOhgssAAAAJ&citation_for_view=EPOhgssAAAAJ:aqlVkmm33-oC


## Research interests and platform imagery update
Production build and static export pass. Research Interests has three centralized paragraphs; keyword strip includes 12 research terms. Publications label updated; Methods and Tools section/navigation removed. Xwebun, SMORS, and Tool Changer platform cards use source-document imagery. Seven homepage images load without errors; 390px mobile menu works with no horizontal overflow. Image provenance is recorded in MEDIA_SOURCES.md. Supplied draft PDFs were not copied into public/.


## Proposal-based research and teaching update
Research Interests rewritten from Expose_TUM_DocGS_Template.pdf, sections 2, 3, 5 and 6, retaining a conceptual explanation and framing proposed contributions as aims. Added design optimization, contact-subspace-aware control, and sensorless friction estimation as further research topics. Added Engineering Mechanics 1 exercise sessions with the user's stated teaching role. Production build and static export pass; all added content is present in exported HTML. No proposal PDF is publicly linked.

## Confidential document audit — 2026-10-03

Fetched the GitHub repository history and checked every historical blob for PDF
file names, PDF binary signatures, and exact SHA-256 matches against the five
supplied PDFs. No PDFs or exact supplied-document copies were found. The local
static export also contains no PDF files. Extracted figures remain included with
the owner's explicit approval. Source PDFs and extracted working text remain
outside tracked source files. Research PDFs are ignored by Git; the explicit
public/cv directory remains available for a future approved CV.

