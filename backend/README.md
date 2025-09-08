# Forever – Backend

This is the **Node.js + Express backend** for the **Forever E-Commerce App**.  
It provides REST APIs for authentication, product management, and cart operations.

---

## 🚀 Features
- JWT-based user authentication
- Product CRUD (Create, Read, Update, Delete)
- Product filtering (price, category, etc.)
- Cart management APIs
- Cloudinary integration for image uploads
- Secure password hashing using bcrypt
- MongoDB database with Mongoose ODM

---

## 🛠️ Tech Stack
- **Node.js** (runtime)
- **Express.js** (server framework)
- **MongoDB** (database)
- **Mongoose** (ODM)
- **JWT** (authentication)
- **Cloudinary** (image storage)

---

## ⚙️ Setup Instructions

### 1. Navigate to backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file inside `backend/`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```

---

## ▶️ Run the backend server
```bash
npm run dev
```

The backend will run at **http://localhost:5000**

---

## 🌐 API Endpoints

### **Authentication**
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Login user and receive JWT token

### **Products**
- `GET /api/products` → Get all products (with optional filters)
- `POST /api/products` → Add a new product (Admin only)
- `PUT /api/products/:id` → Update product details (Admin only)
- `DELETE /api/products/:id` → Delete a product (Admin only)

### **Cart**
- `GET /api/cart` → Get user's cart
- `POST /api/cart` → Add item to cart
- `DELETE /api/cart/:productId` → Remove item from cart

---

## 📂 Folder Structure
```text
backend/
├── controllers/     → Business logic for routes
├── models/          → Mongoose schemas
├── routes/          → API route definitions
├── middleware/      → Auth middleware
├── utils/           → Helper functions (Cloudinary, etc.)
├── server.js        → Main entry point
└── package.json
```

---

## 🧪 Testing the API
Use **Postman** or any API client.

Example request to register a user:
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

## 📜 License
This project is licensed under the MIT License.
