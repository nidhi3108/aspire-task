# Aspire Debit Card Management Dashboard

This is a production-quality React web application inspired by the Aspire debit card management interface. Built with modern frontend development practices and high scalability in mind.

## Project Description

A complete UI recreation of the Aspire card dashboard that features dynamic functionality, including:
- A responsive, sleek sidebar navigation.
- A card carousel to view multiple managed cards (Swipeable using Swiper.js).
- Real-time functionality to "Freeze/Unfreeze" a default card or any newly added card.
- An "Add new card" feature that intelligently generates a random card number, expiry, and CVV.
- Fully functional local-storage based data persistence acting as a mock API layer.
- An interactive, animated modern UI matching the Aspire brand design aesthetics.
- Responsive layout converting gracefully to mobile and tablet viewport sizes.

## Tech Stack

- **React + TypeScript:** For robust, type-safe functional UI components.
- **Vite:** Blazing fast modern development server and bundler.
- **TailwindCSS (v4):** Utility-first CSS framework for rapid UI styling directly in markup.
- **Zustand:** A small, fast, and scaleable barebones state-management solution used for card state.
- **Swiper.js:** For a smooth touch-enabled card carousel on mobile and desktop.
- **Lucide-react:** Clean, consistent SVG icon set for navigation and actions.

## Installation Instructions

Follow these instructions to get the project up and running locally.

1. **Clone the repository:**
   Assuming you have the files cloned to your local environment.

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Features Implemented

1. **Pixel-Perfect UI:** Built closely matching the provided reference designs.
2. **Debit Card Carousel:** Swipeable component with pagination using `Swiper`.
3. **Card State Management:** Toggle the visibility of the card number (masked vs revealed) and its frozen state.
4. **Mock API Layer:** Emulated backend using `localStorage`, meaning adding a card or freezing one will persist through page refreshes.
5. **Interactive Actions & Accordion:** Reusable accordion items for "Card Details" and "Recent Transactions".
6. **Clean Architecture:** Domain-driven file structure with separate `/components`, `/store`, `/services`, and `/types` folders.

## Deployment Instructions

This app can easily be deployed to platforms like **Vercel** or **Netlify**.

### Deploying to Vercel

1. Create a `Vercel` account and install the Vercel CLI, or connect your GitHub repository to Vercel.
2. If using CLI, run the following in your project root:
   ```bash
   npx vercel
   ```
3. Follow the CLI prompts. Vercel automatically detects Vite configurations and applies the correct build settings (`npm run build` with the `dist` output folder).

### Deploying to Netlify

1. Drag and drop the `dist/` production folder into Netlify Drop.
2. (Or) Connect your generic GitHub repo and choose:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
# aspire-task
