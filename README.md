# 🎵 Spotify Data Lab — Hit Predictor

Website React + Vite untuk menampilkan dashboard analitik Spotify.

## Tech Stack
- **React 18** — UI components
- **Vite 5** — Build tool & dev server
- **CSS Modules** — Scoped styling per komponen

## Struktur Project

```
spotify-datalab/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          ← Entry point
    ├── App.jsx           ← Root component
    ├── index.css         ← Global styles & CSS variables
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── Stats.jsx / .module.css
        ├── Dashboard.jsx / .module.css
        ├── Features.jsx / .module.css
        ├── Footer.jsx / .module.css
        ├── Divider.jsx / .module.css
        └── SpotifyIcon.jsx
```

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka di browser
# http://localhost:5173
```

## Build untuk Production

```bash
npm run build
# Output ada di folder /dist
```

## Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Ganti URL Streamlit

Edit file `src/components/Dashboard.jsx`:

```js
const STREAMLIT_URL = 'https://URL-STREAMLIT-KAMU.streamlit.app/?embedded=true'
const STREAMLIT_URL_FULL = 'https://URL-STREAMLIT-KAMU.streamlit.app/'
```
