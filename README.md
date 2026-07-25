# CMS Assignment

A full-stack Content Management System (CMS) built using the MERN stack.
This project allows administrators to manage website pages through an admin dashboard while providing a public frontend to display published content.

## Features

### Admin Panel
- Secure Admin Login
- Create New Pages
- Edit Existing Pages
- Delete Pages
- Manage Page Title, Slug, and Content
- Rich Content Support
- Markdown Content Support

### Public Frontend
- Display All Published Pages
- View Page Title
- View Slug
- Render Markdown Content
- Support for:
  - Headings
  - Paragraphs
  - Lists
  - Nested Lists
  - Tables
  - Mathematical Equations
  - Structured Documentation

### Backend
- RESTful APIs
- JWT Authentication
- MongoDB Database Integration
- CRUD Operations
- Error Handling

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Markdown
- Remark GFM
- Remark Math
- Rehype Katex
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## Folder Structure

```
CMS-Assignment-LP
│
├── backend
├── admin-frontend
├── public-frontend
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Laxmiprasanna4044/CMS-Assignment-LP.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Admin Frontend

```bash
cd admin-frontend
npm install
npm run dev
```

### Public Frontend

```bash
cd public-frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Features

- User Authentication
- Create Page
- Update Page
- Delete Page
- Get All Pages
- Get Single Page

---

## Project Highlights

- Full Stack MERN Application
- Authentication using JWT
- MongoDB Database
- REST API Development
- Admin Dashboard
- Public Website
- Markdown Rendering
- Mathematical Equation Support
- Responsive User Interface

---

## Author

**Laxmiprasanna Adepu**

## Admin-frontend Live Url:cms-assignment-lp.vercel.app

GitHub:
https://github.com/Laxmiprasanna4044
