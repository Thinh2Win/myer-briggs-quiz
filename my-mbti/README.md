## Myer-Briggs JRPG Quiz (React + Vite)

A bite-sized personality quiz with a retro JRPG look and feel. Answer short narrative prompts on a 5‑point Likert scale, then evolve into your cat‑sona MBTI type with stats, class, and compatibility pairs.

### ✨ Features
- **JRPG Presentation**: Heads‑up display, pixel‑frame scene art, and subtle scanlines for a retro vibe.
- **Narrative Likert Prompts**: Each scene is a short story beat with a 5‑point "Least likely → Most likely" selector.
- **Mobile‑first UX**: Sticky choices at the bottom of the screen, large tap targets, and haptic feedback (vibrate) when supported.
- **Animated Mascot**: A little helper bobs and jumps to the selected Likert segment.
- **Typing Result Screen**: MBTI cat sprite, title, flavor text, stats, and clickable compatible/incompatible types.
- **Preloaded Assets**: Key images and sprites are preloaded to reduce flicker during transitions.

### 🧠 How scoring works
The quiz measures the four MBTI dichotomies across two Likert prompts each. We intentionally phrase prompts to align with the left pole of each dichotomy and use score mappings to keep the math simple and robust.

- Dichotomy indices and letters:
  - 0: `Extraversion ⟷ Introversion` → stored as `[I, E]`
  - 1: `Sensing ⟷ Intuition` → `[S, N]`
  - 2: `Thinking ⟷ Feeling` → `[T, F]`
  - 3: `Judging ⟷ Perceiving` → `[J, P]`

- Likert mapping (5 buttons):
  - Ascending: `[1, 1, 2, 2, 3]`
  - Descending: `[3, 3, 2, 1, 1]`

- Implementation details:
  - Extraversion items use the ascending map and are written to affirm Extraversion at the high end.
  - Sensing, Thinking, and Judging items are written to affirm their pole, but use the descending map so “more likely” yields a lower score (still selecting the left pole when totals are low).
  - With two prompts per dichotomy, totals range roughly from 2–6. The result picker treats `≤ 4` as the left letter and `> 4` as the right letter.

Relevant code:
- Result logic: `src/components/ResultPage.jsx` → `findType(score)`
- Scenarios and scoring: `src/assets/scenarios.js`
- Personalities database: `src/assets/personalities.js`

### 📦 Tech stack
- React 19, Vite 6
- react‑bootstrap + Bootstrap 5 for layout and components
- Custom CSS (`src/components/Results.css`) for the retro theme, HUD, Likert bar, and transitions

### 🚀 Getting started
Prereqs: Node 18+ (or 20+ recommended) and npm or yarn.

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

Then open the URL printed by Vite (typically `http://localhost:5173`).

### 🗂️ Project structure
```
my-mbti/
  public/        # static images and sprites
  src/
    assets/
      personalities.js  # type data (sprite, title, stats, compatibility, etc.)
      scenarios.js       # narrative nodes and scoring maps
    components/
      StartPage.jsx
      Quiz.jsx           # HUD + scene art + Likert interactions
      ResultPage.jsx     # final type presentation
    App.jsx, main.jsx
```

### ✍️ Authoring or editing questions
All question content lives in `src/assets/scenarios.js` as a simple graph of nodes.

- Minimal node shape:
  - `id`: unique string; used for navigation
  - `bg`: filename of the scene image in `/public`
  - `text`: narrative prompt shown in the dialogue box
  - `dichotomy`: 0..3 for E/I, S/N, T/F, J/P (omit for non‑scored transitions)
  - `choices`: usually produced by `makeLikertChoices(nextId, LIKERT_SCORES_*)`

Use `LIKERT_SCORES_ASC` when the right‑end response should add more points, and `LIKERT_SCORES_DESC` when “more likely” should add fewer points (useful when your text already affirms the left pole).

### 🧩 Personalities data
`src/assets/personalities.js` defines each MBTI type’s:
- `title`, `spriteUrl`, `desc`
- `compatible` and `incompatible` lists (clickable on the results screen)
- fun `stats` strings for the JRPG flavor

### ♿ Accessibility & UX
- Large touch targets and sticky controls on mobile
- Balanced text wrapping and comfortable line length for dialogue (`max-width` and `line-height`)
- Reduced motion where appropriate; subtle vibrations on selection on supported devices

### 📸 Assets
All artwork and sprites are loaded from `/public`. Replace images with your own as needed; keep filenames used by `scenarios.js` or update the references.

### 🛠 Scripts
- `dev`: start Vite dev server
- `build`: production build
- `preview`: preview the build
- `lint`: run ESLint

### ✅ License / usage
This project is for educational and entertainment purposes. If you redistribute, ensure you have rights to any images or fonts you include.

