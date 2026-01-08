# CoTime ☕️

Welcome to **CoTime** — a stylish, responsive coffee shop web application crafted with React and Vite, designed to showcase artisan coffee, fresh pastries, and a warm in-shop experience. This project blends modern technologies with beautiful animations to provide an inviting digital storefront for a boutique coffee shop.

---

## Table of Contents

- [Overview](#overview)
  - [Preview](#preview)
  - [Live Site](#live-site)
  - [Features](#features)
- [Built with](#built-with)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)
  - [License](#license)
  - [Contributing](#contributing)
  - [Show Your Support](#show-your-support)

---

## Overview

**CoTime** is a beautifully crafted React-based web application designed to showcase an artisan coffee shop, its menu, atmosphere, and story. Built with Vite and styled using TailwindCSS, CoTime delivers a modern, responsive, and interactive single-page experience, bringing coffee culture and community spirit to the digital world.

Visitors can explore featured menu items, read testimonials, learn about the shop's history and values, view product categories, and easily find contact information. Engaging animations powered by AOS, pixel-perfect layouts, and vibrant design elements make CoTime both elegant and user-friendly.

**CoTime** replicates the ambiance of a real coffee shop, with animated sections, a vibrant menu, categories, testimonials, and elegant contact details. Users can explore menu items (coffee, tea, pastries, etc.), see popular categories, learn about the shop’s story, and connect—making it perfect for local coffee businesses wanting to establish an online presence.

### Preview

![CoTime Mocup](src/assets/thumbnail.png)

### Live Demo

Visit the live version here: [https://ilham-bouk.github.io/cotime/](https://ilham-bouk.github.io/cotime/)

### Key Features

- Smooth, engaging scroll-based and entry animations powered by AOS.
- Visually appealing and accessible menu showcasing products with imagery and pricing.
- Filterable categories with product counts.
- Testimonials and About pages for brand storytelling.
- Responsive layout built with Tailwind CSS and React.
- Modern navigation and sticky header.
- Contact section with location, phone, and email details for visitors.
- Built for fast performance and easy hosting with Vite.





## Built with

### Technologies and Libraries Used

- **React** (v19): UI components and state management
- **Vite**: Lightning-fast development environment and build tooling
- **TailwindCSS**: Utility-first CSS framework for design
- **AOS (Animate On Scroll)**: Adds animation effects on scroll
- **Lucide React**: Icon library for stylish vector icons
- **gh-pages**: Deployment utility for publishing to GitHub Pages
- **ESLint**: Code linting and quality enforcement

## Project Structure

```
cotime/
├── src/
│   ├── components/       # UI sections: Hero, Menu, Categories, About, Testimonial, Contact, Footer, Navbar
│   ├── assets/           # Images for products, categories, hero, and about sections
│   ├── App.jsx           # Main app layout and routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind config
├── public/               # Static public assets
├── package.json          # Project dependencies & scripts
├── vite.config.js        # Vite configuration
└── ...
```

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
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

4. **Build for production:**
   ```sh
   npm run build
   ```
   Production files will be output to the `dist` directory.

5. **Preview production build locally:**
   ```sh
   npm run preview
   ```

6. **Lint code (optional):**
   ```sh
   npm run lint
   ```

7. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```

## Usage Example

Once running, you can:

- Navigate the homepage to read about CoTime, view menu items, categories, and more.
- Click the navigation bar links to smoothly scroll to different sections (Menu, Categories, About, Testimonial, Contact).
- Browse high-quality images of products and shop atmosphere.
- Read customer testimonials and learn about the shop's story.
- Locate shop info and contact details in a stylish contact section.
- Interact with animated transitions as you scroll.

## Contribution Guidelines

Contributions, fixes, and suggestions are welcome! To contribute:

1. **Fork this repository** to your own GitHub account.
2. **Clone your fork** locally and create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**, keeping code organized and following best practices.
4. **Test** your changes locally. Ensure the UI and features work as expected.
5. Optionally, run the linter:
   ```sh
   npm run lint
   ```
6. **Commit** and push your changes:
   ```sh
   git add .
   git commit -m "Describe your changes"
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** on GitHub and describe your contribution clearly.

Please follow conventional commit messages and ensure your code adheres to established patterns in the project. All contributions are reviewed before merging.

---

For any questions, reach out via GitHub Issues!

**Live Demo:** [CoTime on GitHub Pages](https://ilham-bouk.github.io/cotime/)





---
---






---

## Technologies & Libraries Used

- **React** (v19): UI framework for dynamic interfaces
- **Vite**: Super fast bundler and development server
- **Tailwind CSS**: Utility-first CSS for rapid design
- **AOS**: Animate On Scroll for entrance and scroll animations
- **Lucide React**: Icon library for consistent vector icons
- **gh-pages**: Deployment to GitHub Pages
- **ESLint**: Code linting and quality

All configuration (Vite, Tailwind, ESLint) is included for a streamlined developer experience.

---

## Project Structure

```
cotime/
├── public/
│   └── ...            # Static assets: images, icons
├── src/
│   ├── assets/        # Product images and hero illustration
│   ├── components/    # Modular React components (Hero, Navbar, Menu, Categories, About, Testimonial, Contact, Footer)
│   ├── App.jsx        # Component root, layout arrangement
│   ├── main.jsx       # App entry point
│   └── index.css      # Tailwind and global styles
├── index.html         # App HTML shell
├── package.json       # Scripts & dependency management
├── vite.config.js     # Vite and plugin config
├── eslint.config.js   # Lint configuration
└── README.md          # 📖 This file
```

---

## Installation & Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ilham-bouk/cotime.git
   cd cotime
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server (for hot reloading):**
   ```sh
   npm run dev
   ```
   Visit `http://localhost:5173` (Vite default) to preview the app in your browser.

4. **Build for production:**
   ```sh
   npm run build
   ```
   The built site will be output to the `dist/` folder.

5. **Preview the production build locally:**
   ```sh
   npm run preview
   ```

6. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```
   *(Deployment uses `gh-pages` and Vite config for correct base path.)*

---

## Usage Examples

- **Browse Menu:** Users can scroll to the "Menu" section to see featured drinks and snacks, each with an image and animated entry.
- **See Categories:** Discover product groups (coffee, pastries, tea, etc.) in a pleasant card format.
- **Learn About Us:** Read the origin story and values in the "About" section, enhanced with custom icons and images.
- **Contact:** Access address, phone, and email in a clear, animated contact area.
- **Responsive:** Try it on mobile and desktop — UI adapts seamlessly for all screens.

---

## License

&copy; 2026 Ilham Bouktir &mdash; All rights reserved.
