# Deploy to LRZ GitLab Pages

The site is a static Next.js export. No persistent web server is needed after
deployment. `.gitlab-ci.yml` builds the locked dependencies with Node 22 and
publishes the generated site through GitLab Pages.

## LRZ prerequisites

1. Sign in to https://gitlab.lrz.de/ and create a project for the website.
2. Enable CI/CD in the project's features.
3. Connect a Linux Docker/Kubernetes runner. LRZ does not supply shared runners;
   check whether the lab already operates one. The included pipeline requires
   a runner that supports the `node:22-bookworm` container image.
4. If that runner requires tags, add its actual tags to the `pages` job. Do not
   invent a tag or copy an unrelated runner's tags.

Official LRZ documentation:
https://doku.lrz.de/gitlab-10332895.html?showLanguage=en_US

## Publish

1. Push the project source, including `.gitlab-ci.yml`, to the repository's
   default branch. `node_modules`, `.next`, `out`, and `tmp` remain excluded.
2. Open **Build → Pipelines** to watch the `pages` job. A pending job usually
   means there is no eligible online runner, or its tags do not match.
3. After success, open **Deploy → Pages** and use the URL shown there.
4. LRZ Pages starts restricted to logged-in project members. For a public
   academic website, change **Settings → General → Visibility, project
   features, permissions → Pages → Everyone**. Check the website in a signed-out
   browser to verify public access.
5. Set `profile.canonical` in `src/data/site.ts` to the confirmed public URL and
   push that change. Future default-branch pushes rebuild the website.

The source repository may remain private while Pages is public if the project
settings permit that combination. The final Pages address is supplied by GitLab;
do not assume it is the repository URL.

## Paths and build behavior

`scripts/build-gitlab-pages.mjs` reads `CI_PAGES_URL` and uses its pathname as
Next.js's base path. This supports both a site at a domain root and a site under
a project path. To override it, set `NEXT_PUBLIC_BASE_PATH` in CI/CD variables:
empty for a root site, or `/project-name` for a project path, without a trailing
slash. Leave it unset when GitLab's supplied URL is correct.

Next.js exports to `out/`. After the build, the pipeline copies the export into
the CI checkout's `public/` directory and publishes that artifact. This does not
modify the repository's source files or commit generated output.

GitLab Pages documentation: https://docs.gitlab.com/user/project/pages/
CI syntax: https://docs.gitlab.com/ci/yaml/#pages

## Verification

Check the portrait, university PNGs, icons, publication links, all research
detail pages, and the light/dark toggle at the deployed URL. In particular,
verify the media and JavaScript load correctly when the URL has a project path.

The pipeline YAML parses successfully. A local production build with a sample
`/website` project path passed lint/type checks and generated prefixed JavaScript,
portrait, and logo URLs. A regular root-path build restored the local preview.
Runner availability, server-side CI validation, and publication remain unverified
until a target website project is available.

The owner requested a separate website project. The supplied
`aas/gmam/elementary-flight-state-estimation` project is a reference for the lab's
GitLab setup, and requires sign-in to inspect. No research repository was changed.
