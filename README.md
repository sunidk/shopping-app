# Cartly

Live site: [https://sunidk-shopping.netlify.app/](https://sunidk-shopping.netlify.app/)

A demo e-commerce storefront with product browsing, cart, and checkout flow, built with React + Vite, pulling live product data from the Fake Store API. Prices are converted from the API's USD to INR.

## Features

- Browse products with images, details, and prices (converted to INR)
- Category filtering with active-state pills and skeleton loading
- Real shopping cart (add/remove/update quantity), persisted to localStorage
- Product search from the navbar
- Product detail pages, user profile page

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Deploys automatically to Netlify from the `dist/` folder (see `netlify.toml`).
