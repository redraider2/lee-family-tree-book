# lee-family-tree-book
Lee, Family Tree, Ancestry

## Eleventy migration (current setup)

This project now uses [Eleventy](https://www.11ty.dev/) to split the long, single-page HTML into reusable sections and components while still producing a static site.

### Quick start

```bash
npm install
npm run start
```

Then open the local server address that Eleventy prints (typically `http://localhost:8080`).

### Build

```bash
npm run build
```

### Project structure

```
.eleventy.js
src/
  index.njk
  styles.css
  scripts/
    music.js
  _data/
    site.json
    toc.json
  _includes/
    layouts/
      base.njk
    partials/
      hero.njk
      dedication.njk
      toc.njk
    sections/
      introduction.njk
      chapter-1.njk
      chapter-2.njk
      chapter-3.njk
      chapter-3a.njk
      chapter-4.njk
      chapter-5.njk
      parents.njk
      chapter-6.njk
      epilogue.njk
      appendix-a.njk
      appendix-b.njk
      author-bio.njk
images/
audio/
videos/
legacy/
  index.html
  styles.css
```

### How the original `index.html` was split

- **Layout & global shell** → `src/_includes/layouts/base.njk`
- **Hero/Title page** → `src/_includes/partials/hero.njk`
- **Dedication** → `src/_includes/partials/dedication.njk`
- **Table of contents** → `src/_includes/partials/toc.njk` (data in `src/_data/toc.json`)
- **Sections/chapters** → `src/_includes/sections/*.njk`
- **Background music script** → `src/scripts/music.js`
- **Styles** → `src/styles.css`
- **Original files preserved for reference** → `legacy/`

### Step-by-step migration roadmap

1. **Install Eleventy**
   - `npm install`

2. **Confirm the build works**
   - `npm run build`
   - Verify `_site/index.html` renders the full book.

3. **Adjust layout or content structure**
   - Edit `src/_includes/layouts/base.njk` to adjust the global shell.
   - Edit `src/index.njk` to change the order of sections or insert new ones.

4. **Edit chapters independently**
   - Each section lives in `src/_includes/sections/` as its own file.
   - Add new sections by creating a new `.njk` file and adding it to `src/index.njk`.

5. **Update the table of contents**
   - Add or reorder entries in `src/_data/toc.json`.
   - Ensure each section has a matching `id`.

6. **Iterate on design**
   - Update typography or layout in `src/styles.css`.
   - Add new components in `src/_includes/partials/` if you want reusable patterns.

7. **Deploy**
   - The output is static HTML/CSS/JS in `_site/`. Upload that folder to any static host.
