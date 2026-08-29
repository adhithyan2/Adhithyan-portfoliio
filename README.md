# Adhithiyan Prabaharan — Portfolio

> Building Digital Products That Solve Real Problems.

A dark-first, high-performance personal portfolio built with **React, Vite, Tailwind CSS and Framer Motion** — featuring a live AI chat assistant, real GitHub integrations, and a fully responsive animated UI.

🔗 **Live:** [adhithyan-portfoliio.vercel.app](https://adhithyan-portfoliio.vercel.app)

---

## ✨ Features

- **Dark-first design** with a cohesive light mode (toggle, saved to localStorage)
- **AI chat assistant** (Lyzr) grounded on a personal knowledge base — deployed as a secure serverless proxy
- **Live GitHub data** — featured repos fetched from the GitHub API
- **Real contribution graph** from the GitHub Contributions API
- **3D tilt cards** with glare on project cards (zero dependencies)
- **Lo-fi ambient music player** generated in-browser with WebAudio (no audio files)
- **Scroll progress bar, terminal typing card, animated count-up stats, glass morphism**
- **SEO-ready** — Open Graph, Twitter cards, JSON-LD Person schema, sitemap, robots.txt
- **Custom 404 page**

## 🧰 Tech Stack

| Layer      | Tools                                                            |
| ---------- | ---------------------------------------------------------------- |
| Frontend   | React 18, Vite 5, Tailwind CSS 3, Framer Motion, lucide-react    |
| Backend    | Node.js (Vercel Serverless Functions)                            |
| AI         | Lyzr (agent chat + knowledge base)                               |
| Infra      | Vercel (Hobby), GitHub                                           |

## 📁 Project Structure

```
├── api/                      # Serverless functions (AI chat proxy)
├── public/                   # Static assets, sitemap, robots, favicon
│   └── assets/               # Optimized images (WebP)
├── src/
│   ├── components/           # UI sections (Hero, Projects, Chat, ...)
│   ├── config/               # Chat/Lyzr configuration
│   ├── data/                 # All editable portfolio content
│   └── hooks/                # Theme, scroll-reveal hooks
├── index.html                # SEO meta/OG/JSON-LD
├── vercel.json               # SPA rewrites (keeps /api intact)
└── tailwind.config.js
```

## 🚀 Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

## 🔑 Environment Variables (Vercel)

Set these in the Vercel project settings — never commit secrets:

| Variable        | Description                    |
| --------------- | ------------------------------ |
| `LYZR_API_KEY`  | Lyzr API key                   |
| `LYZR_USER_ID`  | Lyzr user id                   |
| `LYZR_AGENT_ID` | Lyzr agent id                  |
| `LYZR_ENDPOINT` | *(optional)* custom endpoint   |

## 🎨 Customizing Content

All portfolio content (projects, skills, timeline, services, achievements, socials) lives in `src/data/portfolioData.js`. Images go in `public/assets/`.

## 📬 Contact

- GitHub: [@adhithyan2](https://github.com/adhithyan2)
- LinkedIn: [Adhithiyan Prabaharan](https://www.linkedin.com/in/adhithyan-prabaharan-bb9632318)
- Email: adhithiyanprabaharan@gmail.com