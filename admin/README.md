# Forever – Admin Panel

The **Admin Panel** of the **Forever E-Commerce App** allows administrators to manage products and oversee orders.

---

## 🚀 Features
- Add new products
- Edit or delete existing products
- View and manage user orders
- Secure login for admin users

---

## 🛠️ Tech Stack
- **React** (UI library)
- **Tailwind CSS** (styling)
- **React Router** (navigation)
- **Axios** (API requests)
- **Vite** (frontend tooling)

---

## ⚙️ Setup Instructions

### 1. Navigate to admin folder
```bash
cd admin
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file inside `admin/`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

> Replace with your deployed backend URL if applicable.

---

## ▶️ Run the admin panel
```bash
npm run dev
```

The admin panel will run at **http://localhost:5174** (or next available port).

---

## 📂 Folder Structure
```text
admin/
├── src/
│   ├── components/      → Reusable UI components
│   ├── pages/           → Pages like Dashboard, Product Management, etc.
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json
```

---

## 🌐 Available Pages
- `/` → Dashboard overview
- `/products` → Manage all products
- `/orders` → View and manage orders
- `/login` → Admin login page

---

## 📜 License
This project is licensed under the MIT License.
