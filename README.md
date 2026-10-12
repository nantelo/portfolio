# Nantelo Kath — MERN Portfolio (Glassmorphism)

A full MERN-stack portfolio site with a frosted-glass (glassmorphism) UI.

```
portfolio/
├── server/          Express + MongoDB API
│   └── src/
│       ├── models/        Project, Skill, Contact schemas
│       ├── controllers/   portfolio + contact handlers
│       ├── routes/        /api/portfolio, /api/contact
│       ├── seed.js        seeds your real projects & skills
│       └── server.js      app entry (port 5000)
├── client/          React (Vite) frontend
│   └── src/
│       ├── components/    Navbar, Hero, About, Skills, Projects, Contact, Footer
│       ├── hooks/         useTyping (upgraded version of your script.js animation)
│       └── styles/glass.css  the whole glassmorphism design system
└── index.html       your original static site (untouched)
```

## Quick start

Prereqs: Node 18+, MongoDB running locally (or a MongoDB Atlas URI).

```bash
# 1. install everything (root + server + client)
npm run install-all

# 2. load your projects & skills into MongoDB
npm run seed

# 3. run API (5000) + React app (5173) together
npm run dev
```

Open http://localhost:5173

## API

| Method | Route | Description |
|--------|-------|-------------|
| GET  | /api/health             | status check |
| GET  | /api/portfolio/projects | all projects (sorted) |
| GET  | /api/portfolio/skills   | all skills (grouped by category) |
| POST | /api/contact            | save a contact-form message |
| POST | /api/portfolio/projects | add a project |
| POST | /api/portfolio/skills   | add a skill |

Edit `server/.env` to point `MONGO_URI` at Atlas or a custom DB.

> Note: the POST endpoints have no authentication — add JWT/auth before exposing admin routes publicly.
