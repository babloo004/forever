# Forever – E-Commerce App

**Forever** is a full-stack e-commerce application featuring user authentication, product listing with filters, cart functionality, and an admin interface.

---

## 📂 Repository Structure

```text
root/
├── frontend/    → React-based front-end application
├── backend/     → Node.js/Express REST API with JWT authentication & product APIs
├── admin/       → Admin panel application
├── README.md    → This overview file
├── .gitignore
```

---

## 🚀 Features

- **Authentication**: JWT-based signup and login.
- **Product CRUD & Filtering**: Create, read, update, delete products; filter by price, category.
- **Cart Management**: Add/remove items; cart persists across sessions.
- **Admin Panel**: Manage products/users (if admin folder exists).

---

## 🌐 Live Demo

- **Frontend Live App** → [https://forever-frontend-one-dusky.vercel.app/](#)
- **Backend API** → [https://forever-backend-woad-five.vercel.app/](#)
- **Admin Panel** → [https://forever-admin-red-zeta.vercel.app/](#)

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/babloo004/forever.git
cd forever
```

### 2. Install dependencies
For each folder (`frontend`, `backend`, and `admin`), run:
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
```

---

## ▶️ Running the Project

### Start backend server
```bash
cd backend
npm run dev
```

### Start frontend
```bash
cd frontend
npm start
```

### Start admin panel
```bash
cd admin
npm start
```

---

## 🧪 Testing API
Use **Postman** or any API client:

- **Register User:** `POST /api/auth/register`
- **Login User:** `POST /api/auth/login`
- **Get Products:** `GET /api/products`
- **Add to Cart:** `POST /api/cart`

---

## 📜 License
This project is licensed under the MIT License.
