
# ⚽ Upcoming Soccer Matches Web App

A simple and elegant React + Express.js web application that displays upcoming soccer matches using data from [TheSportsDB API](https://www.thesportsdb.com/documentation).

## 🚀 Features

- Fetches real-time upcoming soccer match data
- Modern, responsive UI with TailwindCSS
- Lightweight Express backend acting as a proxy to handle API calls
- Displays match date, time, and teams
- Error handling and loading state

---

## 🛠️ Tech Stack

### Frontend
- React
- TailwindCSS
- Vite (optional, if used)

### Backend
- Express.js
- Node.js
- `node-fetch` (ESM)


## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/upcoming-matches-project.git
cd upcoming-matches-project
```

### 2. Backend Setup

```bash
cd backend
npm install
node index.mjs
```

Your backend will run on: `http://localhost:3001/matches`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```


Frontend will typically run on: `http://localhost:5173`

## 🌐 API Used

TheSportsDB API
Endpoint: eventsseason.php
League ID 4328 refers to the English Premier League.
Season: 2024-2025
