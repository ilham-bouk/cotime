# CoTime ☕️

A stylish, responsive coffee shop website crafted with React and Vite, designed to showcase artisan coffee, fresh pastries, and a warm in-shop experience. This project blends modern technologies with beautiful animations to provide an inviting digital storefront for a boutique coffee shop.

## Table of Contents

- [Overview](#overview)
  - [Preview](#preview)
  - [Live Demo](#live-demo)
  - [Features](#features)
- [Built with](#built-with)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Overview

**CoTime** is a beautifully crafted React based website designed to showcase an artisan coffee shop, its menu, atmosphere, and story. Built with Vite and styled using TailwindCSS, CoTime delivers a modern, responsive, and interactive single-page experience, bringing coffee culture and community spirit to the digital world.

Visitors can explore featured menu items, read testimonials, learn about the shop's history and values, view product categories, and easily find contact information and get directions. Engaging animations powered by AOS, and vibrant design elements make CoTime both elegant and user-friendly.

### Preview

![CoTime Mockup](src/assets/thumbnail.png)

### Live Demo

Live Site URL: [View CoTime](https://ilham-bouk.github.io/cotime/)

### Features

- Smooth, engaging scroll-based and entry animations powered by AOS.
- Visually appealing and accessible menu showcasing products with imagery and pricing.
- Filterable categories with product counts.
- Testimonials and About pages for brand storytelling.
- Fully Responsive layout (mobile, tablet, desktop) built with Tailwind CSS and React.
- Modern navigation and sticky header.
- Contact section with location, phone, and email details for visitors.
- Built for fast performance and easy hosting with Vite.

---

## Built with

### Technologies and Libraries Used

- **React** (v19): UI framework for dynamic interfaces
- **Vite**: Lightning fast development environment and build tooling
- **Tailwind CSS**: Utility first CSS framework for design
- **AOS (Animate On Scroll)**: Adds animation effects on scroll
- **Lucide React**: Icon library for consistent icons
- **gh-pages**: Deployment utility for publishing to GitHub Pages
- **ESLint**: Code linting and quality enforcement

---

## Project Structure

```
cotime/
├── public/            # Static public assets
├── src/
│   ├── assets/        # Images for products, categories, hero, and about sections
│   ├── components/    # React components (Navbar, Hero, Menu, Categories, About, Testimonial, Contact, Footer)
│   ├── App.jsx        # Main app layout and routing
│   ├── main.jsx       # App entry point
│   └── index.css      # Tailwind config and global styles
├── index.html         # App HTML shell
├── package.json       # Project dependencies & scripts
├── vite.config.js     # Vite configuration
├── eslint.config.js   # Lint configuration
└── README.md          # 📖 This file
```

---

## Installation

To get started, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ilham-bouk/cotime.git
   cd cotime
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start development server:**
   ```sh
   npm run dev
   ```
   Visit `http://localhost:5173` (Vite default) to preview the app in your browser.

4. **Build for production:**
   ```sh
   npm run build
   ```
   The built site will be output to the `dist/` folder.

5. **Preview production build locally:**
   ```sh
   npm run preview
   ```

7. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```
   *(Deployment uses `gh-pages` and Vite config for correct base path.)*

---

For any questions, reach out via GitHub Issues!
