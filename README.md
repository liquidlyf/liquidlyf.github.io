# liquidlyf.github.io

The website of [LiquidLyf](https://github.com/liquidlyf/LiquidLyf), a free app that connects blood
donors with people who need blood in Bangladesh. It's served by GitHub Pages at
**<https://liquidlyf.github.io>**, in English and Bangla.

**Don't edit the pages here.** They are generated from `docs/website-drafts/` in the app repo by
`docs/website-drafts/build_site.py`. A change to the app's data practices and the matching change to
the Privacy Policy then go through review together, in one pull request there.

| Page | English | Bangla |
|---|---|---|
| Home | `/` | `/bn/` |
| Privacy Policy | `/privacy` | `/bn/privacy` |
| Terms and Community Guidelines | `/terms` | `/bn/terms` |
| Delete your account | `/delete-account` | `/bn/delete-account` |
| Download | `/download` | `/bn/download` |

The site has no scripts, no cookies, no analytics and no web fonts.

**The footer's copyright year** is the year GitHub Pages built the site (`site.time`), so every
publish updates it. `.github/workflows/yearly-rebuild.yml` asks Pages to build again every
1 January, with the repo's own `GITHUB_TOKEN` and nothing else. GitHub switches off scheduled
workflows after 60 days without activity in the repo: **in January, check the footer.** If it still
shows last year, open Actions → "Yearly rebuild", click **Enable workflow** if GitHub shows it, then
**Run workflow**.

The text of the pages is licensed under CC BY 4.0, like the app's documentation. The LiquidLyf name and
logo are not: see [TRADEMARKS.md](https://github.com/liquidlyf/LiquidLyf/blob/HEAD/TRADEMARKS.md).
