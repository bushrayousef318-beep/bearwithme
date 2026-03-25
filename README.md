# Bear with Me - Full Setup Guide

## 1) Install prerequisites

- Install [Node.js LTS](https://nodejs.org/)
- Open terminal in this project folder

## 2) Install packages

```bash
npm install
```

## 3) Configure environment

1. Duplicate `.env.example` and rename copy to `.env`
2. Set a strong JWT secret:

```env
PORT=3000
JWT_SECRET=replace-with-a-long-random-secret
```

## 4) Run the app

```bash
npm start
```

Open: [http://localhost:3000](http://localhost:3000)

## 5) What is now full-stack

- `server.js` provides API + static website hosting
- `bearwithme.db` is created automatically (SQLite database)
- Account creation/login uses password hashing + JWT auth
- Intake, journal, chat history, and checklist save to database per user
- If user is not logged in, app falls back to local browser storage

## 6) Main API routes

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/me`
- `POST /api/intakes`
- `GET /api/intakes/latest`
- `POST /api/journal`
- `GET /api/journal/latest`
- `POST /api/checklist`
- `GET /api/checklist`
- `POST /api/chat`
- `GET /api/chat/history`

## 7) Competition-ready checklist

- Create at least 3 demo users and show saved history between sessions
- Show language switch (Arabic/English) and dark mode
- Show ghost mode in journal in public-space scenario
- Show chatbot persistence (open page again and previous chat appears)
- Show safety hotlines and crisis-first responses

## 8) Optional next upgrade (if you want)

- Connect `POST /api/chat` to OpenAI API for stronger intelligent responses
- Add role-based admin dashboard for school counselors
- Add PDF export for journal and progress
- Add HTTPS + cloud deployment (Render/Railway/Fly.io)
