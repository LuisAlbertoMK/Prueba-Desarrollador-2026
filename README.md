# DevCon 2026 — Landing Page

Landing page interactiva para promocionar un evento digital, desarrollada como prueba técnica.

**Stack:** React + Vite + Tailwind CSS (Frontend) · Node.js + Express + MySQL (Backend)

---

## 🚀 Requisitos

| Herramienta | Versión (mínima) |
|-------------|------------------|
| Node.js     | 18.x             |
| Docker      | 24.x (para MySQL) |
| npm         | 9.x              |

---

## 📦 Instalación y ejecución

### 1. Levantar MySQL (con Docker)

```bash
docker compose up -d
```

Esto inicia MySQL 8.0 en `localhost:3306` con:
- DB: `event_landing`
- User: `eventuser` / `eventpassword`
- Tabla `registrations` creada automáticamente

### 2. Backend

```bash
cd backend
cp .env.example .env    # ya existe, pero revisá valores
npm install
npm run dev             # http://localhost:3001
```

Endpoints:
- `GET  /api/health`      → health check
- `POST /api/register`    → registrar asistente
- `GET  /api/register`    → listar registros (para evaluar)

### 3. Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev             # http://localhost:5173
```

El frontend tiene un proxy configurado: `/api` → `localhost:3001`.

---

## 🧱 Arquitectura

```
event-landing/
├── frontend/                    # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Navegación sticky
│   │   │   ├── Hero.jsx             # Inicio con animación
│   │   │   ├── EventInfo.jsx        # Información del evento
│   │   │   ├── Gallery.jsx          # Galería multimedia
│   │   │   ├── CountdownTimer.jsx   # Temporizador regresivo
│   │   │   ├── RegistrationForm.jsx # Formulario + integración timer
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.js  # Intersection Observer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css                # Animaciones + estilos globales
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/                      # Node.js + Express + MySQL
│   ├── src/
│   │   ├── server.js             # Entry point + middleware
│   │   ├── db.js                 # Pool de conexiones MySQL
│   │   ├── validation.js         # Validaciones con express-validator
│   │   └── routes/
│   │       └── registration.js   # CRUD de registrations
│   ├── init.sql                  # Schema SQL
│   └── .env.example
├── docker-compose.yml            # MySQL 8.0
└── README.md
```

---

## ✅ Features implementadas

### Frontend
| Requisito | Implementación |
|-----------|---------------|
| 3+ secciones | Hero, EventInfo, Gallery, RegistrationForm (4) |
| Animación de entrada | Hero con fadeInUp + stagger en título/subtitle/CTA |
| Galería multimedia | Grid 6 imágenes Unsplash + video YouTube embebido |
| Hover effects | Gallery overlay, glass cards elevación, botones scale |
| Scroll animations | IntersectionObserver: fade/translate/scale al hacer scroll |
| Temporizador | 5 min countdown → formulario desaparece al expirar |
| Formulario | Nombre, email, mensaje con validación client-side + server |

### Backend
| Requisito | Implementación |
|-----------|---------------|
| POST /api/register | Recibe name, email, message |
| MySQL | vía mysql2 con connection pool |
| Validaciones | express-validator: required, minLength, email format, sanitize |
| GET /api/register | Lista registros (para evaluar el backend) |

---

## 🧪 Probar el backend (sin frontend)

```bash
curl -X POST http://localhost:3001/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"I want to learn about web development"}'

# Ver registros
curl http://localhost:3001/api/register
```

---

## 📝 Nota técnica sobre el timer

El temporizador de 5 minutos cumple con el requisito de "si no se registra, desaparece el formulario". En producción esto sería un **anti-patrón de UX** (crea urgencia artificial y pierde leads). Una alternativa recomendada es usarlo para ofertas early-bird o recordatorios, no para bloquear el registro.
