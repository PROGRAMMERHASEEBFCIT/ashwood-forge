# 1. Project overview

**Project name:** Ashwood Forge
**Theme:** A small, fictional bladesmithing and blacksmithing workshop
(custom knives, tool restoration, ironwork, and blacksmithing classes).

This is a **fully static** website: only HTML, CSS and JavaScript.
There is no server, no database, and no backend language. Every page is
a plain `.html` file you can open directly in a browser.

## Why this theme

A forge/workshop theme was picked on purpose because it gives natural,
non-generic content for every required page:

- **Home** — hero banner, three highlights, a carousel of recent work.
- **About** — founder story, a 4-step "how a commission is made" process,
  workshop values, and a small team table.
- **Services** — service cards, a pricing table, and an FAQ accordion.
- **Gallery** — a filterable image grid with a lightbox (popup viewer).
- **Contact** — a validated contact form, an info table, social links,
  and an embedded map.

## Folder structure

```
ashwood-forge/
├── index.html          Home page
├── about.html           About page
├── services.html        Services / pricing / FAQ
├── gallery.html          Gallery with filter + lightbox
├── contact.html          Contact form + info + map
├── css/
│   └── style.css        The one stylesheet used by every page
├── js/
│   ├── main.js           Shared: hamburger menu + footer year (all pages)
│   ├── home.js            Home page: carousel
│   ├── gallery.js          Gallery page: filter + lightbox
│   ├── services.js         Services page: FAQ accordion
│   └── contact.js          Contact page: form validation
├── explanation/          <- you are here (plain-language notes)
└── viva/                 Likely viva questions and short answers
```

HTML files sit at the root, all CSS is in `css/`, and JavaScript is split into small,clearly-named files inside `js/` (one shared file, plus one file per page
that needs its own behaviour).


