# 🛍️ **SassyCart – Beauty & Skincare E-Commerce Platform**

SassyCart is a **full-stack e-commerce web application** designed for beauty and skincare products. The platform allows users to browse products, manage carts, place orders, and enables admins to manage inventory and analyze sales performance.
This project demonstrates **end-to-end web development**, secure authentication, RESTful APIs, and data-driven dashboards.

---

## 🚀 Project Overview

The goal of SassyCart is to simulate a **real-world e-commerce system** with both **user-facing features** and **admin controls**, while maintaining clean architecture and scalable design.

---

## 🧰 Tech Stack

### Frontend

* React
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication & Security

* JWT (JSON Web Tokens)
* bcrypt (password hashing)

### Data & Analytics

* Chart.js / Recharts
* CSV export (planned)

---

## ✨ Key Features

### 👤 User Features

* User registration and login (JWT authentication)
* Browse beauty & skincare products
* Search and filter products by category, price, and rating
* Add products to cart
* View order summary
* Responsive UI for better user experience

### 🧑‍💼 Admin Features

* Add, update, and delete products
* Manage product inventory
* View all orders
* Admin dashboard with sales analytics
* Track top-selling products and revenue trends

---

## 📸 Screenshots

> Screenshots are stored inside the `/screenshots` folder.

```
screenshots/
├── products.png
├── login.png
├── register.png
├── admin-add-product.png
└── dashboard.png
```

### Product Listing

![Products](screenshots/products.png)

### User Login

![Login](screenshots/login.png)

### User Registration

![Register](screenshots/register.png)

### Admin – Add Product

![Admin Add Product](screenshots/admin-add-product.png)

### Admin Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 📂 Project Folder Structure

```
SassyCart/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.js
│       └── index.js
│
├── database/
│   └── seedData.js
│
├── screenshots/
│
├── README.md
└── .gitignore
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/SassyCart.git
cd SassyCart
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Run backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

Backend will run at:

```
http://localhost:5000
```

---

## 🧪 Sample Product Data

```json
{
  "name": "Hydrating Face Serum",
  "brand": "GlowCare",
  "price": 899,
  "category": "Skincare",
  "rating": 4.6,
  "stock": 50
}
```

---

## 📊 Analytics Dashboard (Bonus Feature)

* Monthly sales performance
* Total revenue tracking
* Top-selling products
* Inventory insights
* Visualized using charts

---

## 🔐 Security Features

* Password hashing with bcrypt
* JWT-based authentication
* Protected API routes
* Role-based access control for admin features

---

## 📌 Future Enhancements

* Payment gateway integration (Stripe / Razorpay)
* Wishlist functionality
* Order history for users
* Advanced filtering & sorting
* CSV export for sales data
* Deployment on cloud (Render / Vercel)

---

## 💼 Resume-Ready Project Description

**SassyCart – Beauty & Skincare E-Commerce Platform**
Designed and developed a full-stack e-commerce application using React, Node.js, Express, and MongoDB. Implemented JWT-based authentication, RESTful APIs, product and order management, admin inventory controls, and sales analytics dashboards to enable data-driven decision-making.

---

## 🏷️ GitHub Topics

```
react
nodejs
express
mongodb
jwt-authentication
ecommerce
fullstack
web-development
data-analytics
```

---

## 👨‍💻 Author

**Sassy**

---

