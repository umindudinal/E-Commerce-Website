<div align="center">

# 🛍️ SHOPPER — Luxury & Modern E-Commerce Platform

> A premier, responsive, full-featured modern e-commerce front-end application built with **React 19**, **Vite**, and **React Router 7**. Designed with a contemporary luxury aesthetic, persistent global state, live product search, interactive cart & checkout experience, and customer wishlist management.

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F43F5E?style=for-the-badge&logo=feather&logoColor=white)](https://lucide.dev/)
[![CSS3 Design Tokens](https://img.shields.io/badge/CSS3-Modern_Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[Key Features](#-key-features) •
[Tech Stack](#%EF%B8%8F-tech-stack) •
[Architecture](#-project-architecture) •
[Installation](#-getting-started) •
[Author](#-author)

</div>

---

## 📖 Overview

**SHOPPER** is a high-performance fashion and lifestyle e-commerce web platform engineered with modern web standards and design principles. It provides an intuitive, high-converting shopping journey across all device viewports:

- **Browse**: Dynamic category catalogs (Men, Women, Kids) with instant price filtering, sorting, and in-category search.
- **Discover**: Real-time live search bar with instant thumbnail preview dropdown.
- **Engage**: Product detail page with multi-angle image previews, interactive size selectors, quantity counters, verified buyer reviews, and related styles.
- **Transact**: Interactive shopping bag with a dynamic Free Shipping progress bar, promo code engine, and a complete multi-step checkout wizard with instant simulated order confirmation.
- **Save**: Persistent wishlist drawer accessible from anywhere across the store.

---

## ✨ Key Features

### 🔍 1. Intelligent Navigation & Live Search
- **Frosted Glass Navigation**: Sticky glassmorphic header (`backdrop-filter: blur`) with active route indicators.
- **Instant Search Dropdown**: Matches products as you type, rendering thumbnails, category tags, and prices with 1-click navigation.
- **Wishlist & Cart Badges**: Live dynamic notification badges with pulsing micro-animations.
- **Mobile Responsive Drawer**: Smooth off-canvas navigation menu designed for touch screens.

### 👗 2. Rich Product Catalog & Category Engine
- **Category Filter Tabs**: Price range sliders ("Under $50", "$50 - $75", "$75+").
- **Dynamic Sorting**: Sort by *Featured*, *Price: Low to High*, *Price: High to Low*, and *Biggest Discount*.
- **Live Search Within Category**: Instantly refine products by name within any category.
- **Smart Load More**: Paginated product reveal for high rendering performance.

### 🏷️ 3. Premium Product Cards
- **Dynamic Discount Tags**: Automatically calculates and highlights savings percentage (e.g. `-38% OFF`).
- **Quick Add to Cart**: 1-click item addition directly from any grid without page reload.
- **Wishlist Heart Toggle**: Smooth save/unsave interaction with toast feedback.
- **5-Star Rating Indicators**: Shows verified social proof and review tallies.

### 🔍 4. Single Product Detail Experience
- **Multi-Angle Gallery**: Interactive thumbnail selector switching main preview in real-time.
- **Size Selector**: Full range (`S`, `M`, `L`, `XL`, `XXL`) with visual selection state.
- **Quantity Adjuster**: Increment/decrement controls with stock protection.
- **Savings Breakdown**: Displays real-time dollar and percentage savings.
- **Tabbed Information**: Toggle between *Description & Features*, *Care & Material Specs*, and *Customer Reviews (142)* with verified buyer badges.
- **Complete The Look**: Automated recommendations for complementary items in the same category.

### 🛒 5. Full Cart & Multi-Step Checkout Experience
- **Free Shipping Meter**: Visual progress bar indicating how much more is needed to qualify for Free Express Shipping ($75 threshold).
- **Promo Code Engine**: Supports coupon codes (e.g., `SAVE20` for 20% off, `WELCOME10` for 10% off) with instant total updates.
- **Cart Management**: Adjust quantity or delete items with real-time recalculation of subtotals and discounts.
- **3-Step Checkout Wizard**:
  1. *Shipping Address*: Full contact, street address, and delivery validation.
  2. *Payment Simulator*: Credit/Debit card simulation with formatted inputs, or Cash on Delivery.
  3. *Order Placed Celebration*: Confetti feedback, generated Order ID (`SHP-XXXXXX`), estimated delivery date, and receipt confirmation.

### 💖 6. Wishlist Management Drawer
- Slide-out wishlist modal displaying saved items, pricing, and quick "Move to Cart" buttons.
- Fully synchronized and persisted in `localStorage`.

### 🔔 7. Global Toast Notification System
- Animated floating notification pills providing immediate feedback for cart additions, promo codes, wishlist saves, and order completions.

---

## 🛠️ Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) | Functional components, Hooks (`useState`, `useEffect`, `useContext`, `useRef`) |
| **Routing** | [React Router DOM 7](https://reactrouter.com/) | Client-side routing, route params, nested routes |
| **Build & Tooling** | [Vite 7](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundle |
| **Styling & Design System** | Pure CSS3 (Vanilla) | CSS Custom Properties, Flexbox, CSS Grid, Glassmorphism, Keyframe animations |
| **Typography** | Google Fonts | `Plus Jakarta Sans` (Body & UI) + `Outfit` (Headings) |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible SVG iconography |
| **State & Persistence** | React Context API + LocalStorage | Centralized e-commerce state persisted across sessions |

---

## 📁 Project Architecture

```
e-commerce-website/
├── index.html                    # HTML5 entry with SEO & Google Fonts preconnect
├── package.json                  # Dependencies, scripts, and project metadata
├── vite.config.js                # Vite configuration with root base
│
└── src/
    ├── main.jsx                  # React DOM root render & Router wrapper
    ├── App.jsx                   # Root application layout with modals & routes
    ├── index.css                 # Global design system tokens, typography, reset
    │
    ├── Context/
    │   └── ShopContext.jsx       # Global e-commerce state (Cart, Wishlist, Auth, Promos)
    │
    ├── Pages/
    │   ├── Shop.jsx              # Homepage with hero, perks, popular, deals, newsletter
    │   ├── ShopCategory.jsx      # Men, Women, Kids product catalogs with filters & sort
    │   ├── Product.jsx           # Individual product view layout
    │   ├── Cart.jsx              # Shopping bag view
    │   ├── LogiSignuo.jsx        # Login & account creation portal
    │   └── CSS/                  # Dedicated stylesheets for main pages
    │
    └── Components/
        ├── Navbar/               # Sticky glassmorphic navbar with live search & badges
        ├── Hero/                 # Hero section with stats, floating trust cards & CTAs
        ├── TrustBar/             # 4-column value propositions & customer guarantees
        ├── Popular/              # Trending weekly picks grid
        ├── Offers/               # Flash deal section with live countdown timer
        ├── NewCollections/       # Fresh drops with category filter pills
        ├── NewsLetter/           # Email subscription card with format validation
        ├── Item/                 # Reusable product card with quick add & wishlist
        ├── ProductDisplay/       # Single product gallery, size picker & express checkout
        ├── DescriptionBox/       # Tabbed product details, specs & customer reviews
        ├── RelatedProducts/      # Complementary category suggestions
        ├── CartItems/            # Shopping bag table, shipping meter & order summary
        ├── CheckoutModal/        # Multi-step checkout wizard & order receipt modal
        ├── WishlistModal/        # Saved items slide-out drawer
        ├── Toast/                # Global animated action feedback alerts
        ├── Breadcrums/           # Safe breadcrumb navigation
        ├── Footer/               # 4-column modern slate footer with contact & social links
        └── Assets/               # Product assets, banner imagery, and product mock data
```

---

## 🔀 Application Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Shop` | Storefront landing page showcasing trending collections and offers |
| `/men` | `ShopCategory` | Men's tailored apparel and casuals catalog |
| `/women` | `ShopCategory` | Women's runway styles, dresses, and tops |
| `/kids` | `ShopCategory` | Youth and children's everyday essentials |
| `/product/:productId` | `Product` | Single product detail view, reviews, and related styles |
| `/cart` | `Cart` | Shopping cart review, promo code application, and checkout entry |
| `/login` | `LogiSignuo` | Customer account login and membership signup |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.x or later) installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/umindudinal/e-commerce-website.git
   ```

2. **Navigate to project directory**:
   ```bash
   cd e-commerce-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start local development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to the local URL displayed in your terminal (typically `http://localhost:5173` or `http://localhost:5175`).

### Production Build

To build the optimized production bundle:
```bash
npm run build
```

To preview the built distribution locally:
```bash
npm run preview
```

---

## 🎟️ Demo Promo Codes

Test the interactive checkout discount engine using these codes:

| Promo Code | Discount | Description |
|---|---|---|
| `SAVE20` | **20% OFF** | Seasonal promotional discount |
| `WELCOME10` | **10% OFF** | First-time shopper welcome discount |

---

## 👨‍💻 Author

**Umindu Dinal**
- GitHub: [@umindudinal](https://github.com/umindudinal)
- Repository: [e-commerce-website](https://github.com/umindudinal/e-commerce-website)

---

## 📄 License

This project is licensed for personal and portfolio demonstration purposes. All rights reserved © 2026 SHOPPER Inc.

<div align="center">
  <sub>Crafted with modern web standards and passion for exceptional digital commerce.</sub>
</div>
