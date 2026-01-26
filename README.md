# Rubel Foridi — Portfolio

A personal portfolio website showcasing my projects, skills, and experience as a Node.js Backend Developer and FullStack Web Developer.

**Live:** [https://rubel011.github.io](https://rubel011.github.io)

---

## Preview

- Dark theme with purple (#915eff) accent
- Responsive design across all screen sizes
- Scroll-triggered animations
- Dynamic project cards rendered from JavaScript

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, `clamp()`) |
| Interactivity | Vanilla JavaScript |
| Icons | [Boxicons 2.1.4](https://boxicons.com/) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| Animations | [ScrollReveal](https://scrollrevealjs.org/) |
| Typed Effect | [Typed.js](https://mattboldt.com/demos/typed-js/) |
| GitHub Stats | [github-readme-stats](https://github.com/anuraghazra/github-readme-stats), [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats), [github-calendar](https://github.com/nicolo-ribaudo/github-calendar) |

---

## Project Structure

```
Rubel011.github.io/
├── index.html              # Main HTML page
├── css/
│   ├── style.css           # Global styles, sections, responsive breakpoints
│   └── navbar.css          # Navbar styles and mobile menu
├── js/
│   ├── script.js           # ScrollReveal, Typed.js, project rendering
│   └── navbar.js           # Hamburger menu, scroll effects, active links
├── Assets/
│   ├── images/
│   │   ├── myImage/        # Profile photo, logo, hero background
│   │   └── Projects/       # Project screenshots
│   └── Resumes/            # Downloadable resume PDF
├── CHANGELOG.md            # Detailed log of redesign changes
└── README.md
```

---

## Features

- **Dark Theme** — `#050816` background with `#915eff` purple accents
- **Responsive Navbar** — Dark blur background, scroll shadow effect, active section highlighting, mobile slide-in menu
- **Hero Section** — Staggered reveal animations, typed role text, profile image with purple glow
- **About Section** — Card layout with left accent border
- **Skills Section** — Category cards with Boxicons, hover effects, auto-fit grid
- **GitHub Stats** — Top languages, stats card, streak stats, contribution calendar
- **Projects** — Auto-fill grid, consistent 200px image height, pill-shaped tech badges, 3-line description clamp
- **Footer** — Circular social icon buttons with tooltips, dark gradient background
- **Accessibility** — `focus-visible` outlines, semantic HTML, proper `alt` attributes
- **Performance** — `loading="lazy"` on images, no external image URLs for skill icons

---

## Sections

1. **Home** — Introduction with typed role animation and CTAs
2. **About** — Background and experience summary
3. **Technical Skills** — Languages, Frontend, Backend, Databases, Tools, Deployment
4. **GitHub Stats** — Language distribution, contribution stats, streak, calendar
5. **Projects** — Non-AI and Generative AI project showcases
6. **Contact** — Social links (LinkedIn, GitHub, HackerRank, Gmail, Phone, Location)

---

## Run Locally

```bash
git clone https://github.com/Rubel011/Rubel011.github.io.git
cd Rubel011.github.io
```

Open `index.html` in your browser, or use a local server:

```bash
npx serve .
```

---

## License

This project is open source and available for personal use.

---

**Built by [Rubel Foridi](https://github.com/Rubel011)**
