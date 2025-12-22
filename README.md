# Time Swamp – Tense Quiz

A React-based atmospheric quiz game with a mysterious swamp theme, featuring procedurally generated ambient audio and visual effects.

## How to Run Locally (Testing on your Computer)

To test this application on your own machine:

1.  Install **Node.js** (LTS version) if you haven't already.
2.  Open your terminal in this project folder.
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open the link shown in the terminal (usually `http://localhost:5173`).

## How to Deploy (Deployment Guide)

### Option 1: Vercel (Recommended - Easiest)
1. Push this code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub.
3. Click "Add New Project" and select your repository.
4. Vercel will automatically detect it's a Vite app. Click "Deploy".

### Option 2: GitHub Pages
1. Push the code to a GitHub repository.
2. Configure a GitHub Action to build using `npm run build` and deploy the `dist` folder.

## Features
- **Visuals:** Animated fireflies, fog, twinkling stars, and a responsive glassmorphism UI.
- **Audio:** Custom Web Audio API synthesizer (no external MP3 files needed) that generates a dark, mysterious drone and random "swamp bells".
- **Logic:** Persists used questions in LocalStorage so users don't see repeats until they've seen them all.
