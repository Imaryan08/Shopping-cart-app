# Shopping App Backend

This is the backend for the Shopping App, built using **Node.js**, **Express**, and **MySQL**. Follow the instructions below to set up the project locally.

---

## 📌 Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or later) → [Download Node.js](https://nodejs.org/)
- **MySQL** (local database) → [Download MySQL](https://dev.mysql.com/downloads/)
- **Git** (optional) → [Download Git](https://git-scm.com/)

---

## 🚀 Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone [https://github.com/your-username/shopping-app-backend.git](https://github.com/Imaryan08/Shopping-cart-app)
cd shopping-app-backend
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Local Database**
1. Open MySQL and create a new database named `shopping_db`:
```sql
CREATE DATABASE shopping_db;
```
2. Update the **.env** file with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root  # Change if you have a different username
DB_PASSWORD=yourpassword  # Replace with your MySQL password
DB_NAME=shopping_db
PORT=5000
```

### 4️⃣ **Run the Server**
Start the backend server with:
```sh
node server.js  # or use nodemon for auto-restart
nodemon server.js
```
> The server will start on `http://localhost:5000`

### 5️⃣ **Run eBay Scraper** (To fetch product data)
Run the scraper to fetch and insert products into the database:
```sh
node scraper.js
```

### 6️⃣ **Start the Frontend**
Now you can run the frontend to see the app in action.

---

## 🛠 API Endpoints

### **Products**
- `GET /api/products` → Get all products

### **Cart**
- `GET /api/cart` → Get cart details
- `POST /api/cart` → Add product to cart
- `PUT /api/cart/:id` → Update cart quantity
- `DELETE /api/cart/:id` → Remove product from cart


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
