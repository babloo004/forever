# Forever – Frontend

This is the **React-based frontend** of the **Forever E-Commerce App**.  
It provides a modern UI for users to browse products, filter items, manage their cart, and perform authentication.

---

## 🚀 Features
- User authentication (signup & login) via JWT
- Product listing with filters (price, category, etc.)
- Cart management:
  - Add/remove products
  - Cart persists across sessions
- Responsive design for mobile and desktop

---

## 🛠️ Tech Stack
- **React** (UI library)
- **React Router** (routing)
- **Tailwind CSS** (styling)
- **Context API** (state management)
- **Axios** (API calls)

---

## ⚙️ Setup Instructions

### 1. Navigate to frontend folder
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

> Replace with your deployed backend URL if applicable.

---

## ▶️ Run the development server
```bash
npm run dev
```

The frontend will run at **http://localhost:5173** (default Vite port).

---

## 🌐 Available Pages
- `/` → Home page
- `/collection` → Product listing with filters
- `/cart` → View and manage cart
- `/login` → Login page
- `/signup` → Signup page
- `/orders` → Order history (if logged in)

---

## 📂 Folder Structure
```text
frontend/
├── src/
│   ├── assets/          → Images and icons
│   ├── components/      → Reusable components (Navbar, Footer, etc.)
│   ├── context/         → Global state management
│   ├── pages/           → App pages
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json
```

---

## 📜 License
This project is licensed under the MIT License.
