# Linkora

Linkora is a lightweight content posting platform built with **Next.js**, **Clerk authentication**, and **Cloudinary** for image uploads. It allows users to securely sign up, log in, create text posts with optional images, and view posts in a clean, minimal interface.

This project focuses on demonstrating modern full‑stack patterns such as authentication, server actions, database integration, and media handling.

---

## 🚀 Features

- Secure sign up and sign in using **Clerk**
- Create text posts with optional image uploads
- Image storage and delivery via **Cloudinary**
- Clean, distraction‑free UI
- Server‑side rendering with **Next.js App Router**

---

## 🧰 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Clerk** (Authentication)
- **Cloudinary** (Image uploads)
- **MongoDB Atlas**
- **Mongoose**

---

## 🧠 Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or higher)
- A MongoDB Atlas cluster
- A Cloudinary account
- A Clerk application

---

## 🛠️ Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rishabh6512/Linkora.git
   cd Linkora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add the following environment variables:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   MONGODB_URI=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

- `app/` – Application routes and server components
- `components/` – Reusable UI components
- `lib/` – Server actions, utilities, and database connection
- `models/` – Mongoose schemas
- `public/` – Static assets

---

## 🚀 Deployment

The project is optimized for deployment on **Vercel**.

When deploying:
- Add all environment variables in **Vercel → Project Settings → Environment Variables**
- Ensure MongoDB Atlas Network Access allows connections (use `0.0.0.0/0` for development)

---

## 🧪 Common Issues

### MongoDB connection errors
If you encounter connection timeouts on Vercel, ensure your MongoDB Atlas IP whitelist allows external connections.

### Environment variables
Missing environment variables will cause server‑side runtime errors. Double‑check all required keys are set.

---

## 📄 License

This project is licensed under the **MIT License**.
