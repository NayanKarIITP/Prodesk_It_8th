# Cine-Stream 
# Live URL: https://prodesk-it-8th-zu1y.vercel.app/
<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/fb76583a-ecd5-4f32-9e4d-b11d9ab7abb5" />

<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/cdae4a72-2cbb-49af-acd4-5d54aaab922b" />

An AI-powered movie discovery platform built with React, Tailwind CSS, and Google Gemini.

## Key Features
- **AI Mood Matcher:** Integrated Google Gemini AI to suggest movies based on natural language user moods.
- **Infinite Scroll:** Implemented using the Intersection Observer API for seamless content loading.
- **Debounced Search:** Custom hook to optimize API usage by delaying requests during typing.
- **Global Favorites:** Persistent "My List" using React Context API and LocalStorage.
- **Performance Optimized:** Lazy loading images and Shimmer-effect skeleton screens for improved UX.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, React Router
- **AI:** Google Gemini 1.5 Flash
- **API:** TMDB (The Movie Database)
- **Deployment:** Vercel

## Setup
1. Clone the repo.
2. Create a `.env` file with `VITE_TMDB_API_KEY` and `VITE_GEMINI_API_KEY`.
3. Run `npm install` then `npm run dev`.
