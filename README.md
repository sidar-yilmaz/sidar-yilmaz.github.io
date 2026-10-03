# Ali Sidar Yilmaz — Academic Website

A customized [PRISM](https://github.com/xyjoey/PRISM) academic website. Next.js, TypeScript, Tailwind CSS, Framer Motion, and PRISM's original BibTeX parser. The parser dependency uses its lean 0.0.23 release, Next.js is patched within version 15, and PostCSS uses a compatible patched override. PRISM's MIT license is retained in LICENSE.

## Run locally

Requires Node.js 22 or later with npm installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production verification:

```bash
npm run build
```

The static website is exported to **out/**. Run `npm start` to serve that folder using the included local static server.

## Change profile information

Edit **src/data/site.ts**: profile, social links, research interests, keywords, projects, teaching, and publication media. **content/config.toml** holds PRISM parser settings and author highlighting. Keep its author name aligned with the profile. The homepage and research pages share the same content.

Missing information uses searchable TODO markers. Missing social links and CV appear as 'to be added'; missing experiment media falls back to clearly labeled conceptual control diagrams. Those diagrams are illustrative and do not represent measured results. No software expertise, degrees, or timeline dates have been invented.

Set `profile.canonical` to your actual HTTPS domain to enable canonical metadata. TODO_SOCIAL_PREVIEW_IMAGE is reserved for a future supplied preview; no nonexistent image is linked.

## Add a publication

Edit **content/publications.bib**. For example (replace all TODO fields before presenting the entry as complete):

```bibtex
@inproceedings{newPaper,
  title = {TODO_EXACT_TITLE},
  author = {TODO_AUTHOR_ORDER},
  booktitle = {TODO_VENUE},
  year = {2026},
  status = {accepted},
  selected = {true},
  keywords = {Nonlinear control, Aerial robotics},
  url = {TODO_PUBLICATION_PDF},
  description = {TODO_PUBLICATION_DESCRIPTION}
}
```

The example year is illustrative; use the actual year. The current ICUAS 2026 publication was verified against the supplied Google Scholar profile: final title, ordered authors, conference, pages 96–103, publisher IEEE, and publication date 15 June 2026. The paper links to IEEE and its arXiv PDF. BibTeX records containing TODOs must be completed before citation.

The homepage renders entries from this file. BibTeX opens in a keyboard-accessible dialog and can be copied. Keep unpublished or status-unknown work in the `ongoing` research list instead of assigning a publication status.

## Add an experiment GIF/video

Place files under **public/media/publications/**, then update **publicationMedia** in src/data/site.ts:

```ts
newPaper: {
  image: '/media/publications/newPaper-poster.jpg',
  video: '/media/publications/newPaper.mp4',
  links: [
    { label: 'Paper', url: 'https://your-real-paper-url' },
    { label: 'Code', url: 'https://your-real-code-url' },
    { label: 'Video', url: 'https://your-real-video-url' },
    { label: 'Project', url: '/research/fully-actuated/' },
  ],
}
```

GIFs work in the image field. Native videos are muted, looped, and inline. They load only when requested, play on hover or via the touch/keyboard button, and pause when the pointer leaves. Reduced-motion preferences disable automatic preview playback. Missing or failed media falls back gracefully. Use compressed MP4 clips and lightweight posters. The optional hero video uses `profile.heroVideo`.

## Add research or a project

Add an item to `research` in src/data/site.ts, with title, slug, summary, technical description, tags, image, video, and kind (0–3 for the conceptual fallback). A detail page is generated automatically at **/research/your-slug/**.

Add an item to `projects` with title, label, summary, image, video, slug, and kind. The slug links to its research area. Teaching is an array in the same file. The homepage Research Interests introduction is stored in researchIntroduction; its keyword strip uses keywords. Figure sources are documented in docs/MEDIA_SOURCES.md.

## Add your CV

Copy your real PDF to **public/cv/Ali_Sidar_Yilmaz_CV.pdf** and set `profile.cv` to **/cv/Ali_Sidar_Yilmaz_CV.pdf**. A CV link then appears in the navigation and hero. Do not create a dummy CV.

## Media structure

- public/profile/ — supplied portrait
- public/media/hero/ — optional hero video
- public/media/research/ — research posters/clips
- public/media/publications/ — paper posters/clips
- public/media/projects/ — platform posters/clips
- public/projects/fa-hexarotor/ — optional platform media
- public/cv/ — real CV PDF
- public/icons/ — additional icons

## Deploy to GitHub Pages

Target repository: https://github.com/sidar-yilmaz/sidar-yilmaz.github.io.
Expected Pages URL: https://sidar-yilmaz.github.io/.
Set repository Settings → Pages → Source to **GitHub Actions**. The existing
workflow uses an empty base path for this user site automatically. GitHub Free requires
a public repository for Pages; Pro can also publish from a private repository.

For LRZ GitLab Pages, use the included `.gitlab-ci.yml` and follow
[the LRZ deployment guide](docs/GITLAB_LRZ_DEPLOYMENT.md). A lab or project runner
is required; LRZ does not provide shared runners.

1. Create your own GitHub repository and upload this project's source (exclude node_modules, .next, out, and prism-source).
2. Use **USERNAME.github.io** as the repository name for a root site, or another repository name for **USERNAME.github.io/REPOSITORY/**.
3. In repository Settings → Pages, select **GitHub Actions** as the source.
4. Push to **main**, or run the **Deploy academic website** workflow manually.
5. The workflow obtains the actual base path, installs locked dependencies, builds out/, and deploys that folder.

For a manual project-path build in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/REPOSITORY'
npm run build
```

For a root deployment, unset the variable or use an empty string. Next's basePath prefixes routes and JavaScript; the shared asset helper prefixes public media and CV paths. Use root-relative paths for local media and HTTPS URLs for external links. Do not add a second repository prefix manually.

## Verify before publishing

Build, then check homepage and each research route, mobile navigation, theme toggle, BibTeX dialog/copy, enabled links, media previews, and reduced motion. Replace TODO contact/media/bibliography fields as the real information becomes available. This version is prepared for deployment; no GitHub account or final domain was assumed.
