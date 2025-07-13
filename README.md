# Shivraj Enterprises - Fullstack E-commerce Website

## 📦 Folder Structure
- `client/` – React + TailwindCSS frontend
- `server/` – Node.js + Nodemailer backend (for email)

## 🚀 How to Run

### 1. Frontend
```bash
cd client
npm install
npm start
```

### 2. Backend (Node.js)
```bash
cd server
npm install express nodemailer cors
node index.js
```

## ✉️ Email Notification
Update your Gmail and App Password in `server/index.js`:
```js
user: 'your_email@gmail.com',
pass: 'your_app_password'
```

Then replace `to:` with your own email to receive order info.
