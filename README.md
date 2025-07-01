# 🐔 Avícola D'Sebas - Sistema Web de Inventario

Este proyecto es una aplicación web completa para gestionar inventario de una avícola, con control de productos, stock, movimientos, alertas, reportes y más.

## 🚀 Tecnologías usadas

- **Frontend**: React + Tailwind + Chart.js (Vite)
- **Backend**: Node.js + Express + MongoDB + JWT

---

## ⚙️ Instalación local

```bash
# Clona el repositorio y entra a la carpeta
cd avicola-dsebas

# Backend
cd backend
cp .env.example .env
npm install
npm run dev

# Frontend
cd ../frontend
npm install
npm run dev
```

---

## 🌐 Despliegue

### En Vercel (Frontend)

1. Sube la carpeta `frontend` como nuevo proyecto.
2. Configura `VITE_API_URL` en los entornos (por ejemplo: `https://avicola-backend.onrender.com`).

### En Render (Backend)

1. Sube la carpeta `backend` como servicio web.
2. Añade las variables de entorno desde `.env.example`.

---

## 🛠 Variables necesarias (.env)

```
MONGO_URI=mongodb+srv://<usuario>:<clave>@cluster.mongodb.net/avicola
JWT_SECRET=clave_super_segura
PORT=5000
```

---

## 📦 Funcionalidades

- Autenticación de usuarios con roles
- Dashboard de inventario con entradas/salidas
- Alertas por bajo stock
- Reportes visuales
- Categorías y proveedores
- Navegación por páginas
