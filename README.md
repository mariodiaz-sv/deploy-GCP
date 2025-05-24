# 📚 Sistema de Notas – API REST + Frontend con Vite

Este proyecto es una pequeña aplicación que simula un sistema de notas para estudiantes. Incluye:

- ✅ Una **API REST** desarrollada en **Node.js + Express** sin base de datos.
- 🌐 Un **frontend** moderno y estilizado usando **Vite**.

---

## 🔧 Backend – API REST sin base de datos

La API está hecha con Express.js y entrega datos simulados directamente desde memoria.

### 📌 Ruta disponible

```
GET /api/notas
```

### 📄 Respuesta de ejemplo

```json
[
  { "id": 1, "nombre": "Juan Pérez", "nota": 8.5 },
  { "id": 2, "nombre": "Ana Gómez", "nota": 9.2 }
]
```

### 🚀 Cómo iniciar el backend localmente

```bash
cd backend
npm install
npm start
```

La API estará disponible en: `http://localhost:8080/api/notas`

---

## 💻 Frontend – Interfaz en Vite

El frontend está construido con **Vite**, usando HTML, JavaScript y CSS moderno.

### 🎨 Funcionalidad

- Muestra las notas en una **tabla bonita y estilizada**.
- Tiene barra de menú y footer.
- Carga los datos desde la API.

### 🚀 Cómo iniciar el frontend localmente

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en: `http://localhost:3000`

> Asegúrate de que el backend esté corriendo para que el frontend pueda cargar los datos.

---

## 📦 Docker y Deploy

También puedes correr ambos servicios con Docker y usar GitHub Actions para desplegar automáticamente en Google Cloud Run (gratis). La guía completa paso a paso está en el archivo PDF adjunto o en la documentación del repositorio.

---

## ✍️ Autor

Desarrollado como guía educativa paso a paso para crear y desplegar una aplicación con frontend y backend conectados sin base de datos.
