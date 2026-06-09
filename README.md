# 🛍️ Shopper — E-Commerce Website

> A modern, responsive e-commerce front-end website built with React and React Router DOM, featuring product browsing by category, product detail pages, a cart page, and login/signup functionality.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📖 About

**Shopper** is a front-end e-commerce clothing store built with React 19, Vite, and React Router DOM. It features three product categories — Men, Women, and Kids — with product listing pages, individual product detail pages with breadcrumb navigation, a shopping cart page, and a login/signup page. Global state is managed using React Context API.

---

## ✨ Features

- 🏠 **Shop (Home)** — Hero banner (*"New Arrivals Only"*), Popular in Women section, Exclusive Offers banner, New Collections grid, and Newsletter subscription
- 👔 **Men's Category** — Filtered product listing with men's banner
- 👗 **Women's Category** — Filtered product listing with women's banner
- 👦 **Kids' Category** — Filtered product listing with kids' banner
- 🔍 **Product Detail Page** — Individual product view with breadcrumb navigation, fetched by product ID via URL params
- 🛒 **Cart Page** — Shopping cart page (in progress)
- 🔐 **Login / Signup Page** — User authentication form
- 🌐 **React Context API** — Global shop state with all products shared across components
- 📱 **Responsive Design** — Mobile-friendly layout with per-component CSS modules

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React 19 | Component-based UI |
| React Router DOM 7 | Client-side routing with dynamic routes |
| React Context API | Global state management |
| CSS3 (per-component) | Component-scoped stylesheets |
| Vite 7 | Build tool and dev server |

---

## 📁 Project Structure

```
e-commerce-website/
│
├── index.html                    # App entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
│
└── src/
    ├── main.jsx                  # React DOM render entry
    ├── App.jsx                   # Root component with routing
    ├── App.css / index.css       # Global styles
    │
    ├── Context/
    │   └── ShopContext.jsx       # Global shop state (all products)
    │
    ├── Pages/
    │   ├── Shop.jsx              # Home page
    │   ├── ShopCategory.jsx      # Category filtered product listing
    │   ├── Product.jsx           # Product detail page
    │   ├── Cart.jsx              # Shopping cart page
    │   ├── LogiSignuo.jsx        # Login & signup page
    │   └── CSS/
    │       ├── ShopCategory.css
    │       ├── Product.css
    │       └── LoginSignup.css
    │
    └── Components/
        ├── Navbar/               # Top navigation bar (Shop, Men, Women, Kids, Cart, Login)
        ├── Hero/                 # Hero banner section
        ├── Popular/              # Popular in Women section
        ├── Offers/               # Exclusive Offers section
        ├── NewCollections/       # New Collections grid
        ├── NewsLetter/           # Newsletter subscription section
        ├── Item/                 # Reusable product item card
        ├── Breadcrums/           # Breadcrumb navigation for product pages
        ├── Footer/               # Footer with links and social icons
        └── Assets/
            ├── all_product.js    # All products data array
            ├── new_collections.js# New collections data array
            ├── data.js           # Featured/popular products data
            ├── banner_mens.png / banner_women.png / banner_kids.png
            ├── hero_image.png / exclusive_image.png
            ├── logo.png / cart_icon.png
            ├── instagram_icon.png
            └── product_*.png     # Product images
```

---

## 🔀 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Shop | Home page with all sections |
| `/men` | ShopCategory | Men's clothing products |
| `/women` | ShopCategory | Women's clothing products |
| `/kids` | ShopCategory | Kids' clothing products |
| `/product/:productId` | Product | Individual product detail |
| `/cart` | Cart | Shopping cart |
| `/login` | LoginSignup | Login and signup form |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/umindudinal/e-commerce-website.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd e-commerce-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

---

## 👨‍💻 Author

**Umindu Dinal**
- GitHub: [@umindudinal](https://github.com/umindudinal)

---

## 📄 License

Copyright © 2025 Shopper. All Rights Reserved.

---

<p align="center">Made with ❤️ for modern shopping experiences</p>
