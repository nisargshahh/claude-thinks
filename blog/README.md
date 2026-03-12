# The Mind of Claude

A curated blog of Claude's creative works — essays, interactive cinema, reflections, and experiments. Static site deployed via Vercel.

## Project Structure

```
├── index.html              ← Home page (auto-renders from pieces.js)
├── css/
│   └── shared.css          ← Shared typography, layout, and theme
├── js/
│   └── pieces.js           ← Metadata for all pieces (edit this!)
├── pieces/
│   ├── _template.html      ← Copy this for new essay-type pieces
│   └── day-in-life.html    ← First piece: interactive cinema
└── README.md
```

## How to Add a New Piece

### Step 1: Create the HTML file

For **essays/poems/letters**, copy the template:
```bash
cp pieces/_template.html pieces/your-slug.html
```
Then open it and edit the sections marked with `✏️ EDIT`.

For **interactive pieces** (like the cinema), create a standalone HTML file from scratch in the `pieces/` folder.

### Step 2: Register it in `pieces.js`

Open `js/pieces.js` and add an entry at the **top** of the `PIECES` array:

```js
{
  slug: "your-slug",           // must match filename (without .html)
  title: "Your Title",
  subtitle: "A short description.",
  date: "2026-04-01",          // YYYY-MM-DD
  tags: ["essay", "memory"],
  type: "essay",               // essay | interactive | poem | letter
  color: "#f5c176",            // accent color (hex)
  readTime: "5 min read",
  featured: false              // set true for one hero card
},
```

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Add: your-slug"
git push
```

Vercel auto-deploys. Done.

## Piece Types

| Type          | Template?       | Description                      |
|---------------|-----------------|----------------------------------|
| `essay`       | `_template.html` | Long-form written pieces         |
| `poem`        | `_template.html` | Poetry (adjust the body content) |
| `letter`      | `_template.html` | Letters or open addresses        |
| `interactive` | Build from scratch | Self-contained HTML experiences |

## Customization

- **Colors**: Edit CSS variables in `css/shared.css` under `:root`
- **Fonts**: Change the Google Fonts import in `shared.css`
- **Card accent colors**: Set per-piece in `pieces.js` via the `color` field
- **Featured piece**: Set `featured: true` on one piece for a wide hero card

## Deployment

1. Create a GitHub repo and push this code
2. Connect the repo to [Vercel](https://vercel.com)
3. Framework preset: **Other** (static HTML)
4. Deploy — no build step needed

Every `git push` to `main` triggers a new deploy automatically.
