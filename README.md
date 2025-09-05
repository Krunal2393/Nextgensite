Next-Gen Business Consultancy Website

A modern full-stack web application built with React, TypeScript, and Node.js to deliver consultancy services for startups, SMEs, and enterprises.


🛠️ Tech Stack
🔹 Frontend

React 19

TypeScript

Vite

TailwindCSS

React Router DOM

Lucide React (icons)

🔹 Backend

Node.js

Express.js

MongoDB + Mongoose

CORS

Helmet

Compression

Morgan


⚡ Getting Started
✅ Prerequisites

Node.js 18+

MongoDB instance

Git

📥 Installation


gitclone 

cd frontend
npm install

cd ../backend
npm install

cerate .env 
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173

start backend 
cd backend
npm run dev


start frontend 
cd frontend
npm run dev

project strcture 
FullStackDev/
├── frontend/
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # React pages (routes)
│   │   ├── assets/       # Images/icons
│   │   └── App.tsx       # Root app entry
│   ├── public/           # Static files
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/       # MongoDB schemas
│   │   └── routes/       # Express routes
│   ├── server.js         # API server entry
│   └── package.json


📡 API Endpoints
Method	Endpoint	Description
POST	/api/contact	Create new contact
GET	/api/contact