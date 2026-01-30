# 🛍️ **SassyCart – Beauty & Skincare E-Commerce Platform**

SassyCart is a **full-stack e-commerce web application** designed for beauty and skincare products. The platform allows users to browse products, manage carts, place orders, and enables admins to manage inventory and analyze sales performance.
This project demonstrates **end-to-end web development**, secure authentication, RESTful APIs, and data-driven dashboards.

---

## 🚀 Project Overview

The goal of SassyCart is to simulate a **real-world e-commerce system** with both **user-facing features** and **admin controls**, while maintaining clean architecture and scalable design.

![SassyCart Project Overview](https://copilot.microsoft.com/th/id/BCO.7f1cc0f9-ec7f-4532-a8f7-2a0cbb4140da.png)


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

### Product Listing

![Sales Chart – SassyCart](https://copilot.microsoft.com/th/id/BCO.5738af07-43e2-49d4-aa83-c6a6e6065f4b.png)

### User Login

![User Login – SassyCart](https://copilot.microsoft.com/th/id/BCO.3e10f4f4-3238-455f-a04b-d401f694bb7a.png)

### User Registration

![User Registration – SassyCart](https://copilot.microsoft.com/th/id/BCO.3d7655c0-8d65-4103-8ea3-9fe288a8e6c9.png)

### Admin – Add Product

![Admin Add Products – SassyCart](https://copilot.microsoft.com/th/id/BCO.e828235a-d53e-4c7c-a561-58e41d8a35ba.png)

### Admin Dashboard

![SassyCart Admin Dashboard](https://copilot.microsoft.com/th/id/BCO.a8f0efde-cb24-4715-b83e-73bb4dbee6e3.png)

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
### 📊  Admin Analytics Dashboard

![SassyCart Admin Analytics Dashboard](https://copilot.microsoft.com/th/id/BCO.7c296625-251b-4824-b0d2-c02f86b0f161.png)

### Sales by Category

![Sales Chart – SassyCart](https://copilot.microsoft.com/th/id/BCO.5738af07-43e2-49d4-aa83-c6a6e6065f4b.png)

### 📦 Order Status Overview

![SassyCart Order Status Overview](https://copilot.microsoft.com/th/id/BCO.0a4a7f53-0738-4e08-9b65-6fce66355cf3.png)

### 👨‍💻 Author

**Bhagath Sadhana**

---

