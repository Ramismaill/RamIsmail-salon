# 💇‍♀️ Ram Ismail Hair Dresser - Professional Salon Booking System

A modern, elegant full-stack web application for a luxury hair salon featuring online booking, multilingual support, and admin panel management.

🔗 **Live Demo**: [https://ramismail-salon-1.onrender.com](https://ramismail-salon-1.onrender.com)

---

## ✨ Features

### 🌐 **Multilingual Support**
- English, Turkish, and Arabic language options
- Seamless language switching with persistent preferences
- RTL (Right-to-Left) support for Arabic

### 📅 **Online Booking System**
- Real-time appointment scheduling
- Service selection with pricing
- Guest type support (Hotel guests & Walk-in clients)
- Email notifications for booking confirmations
- WhatsApp integration for direct contact

### 👑 **Admin Dashboard**
- Secure authentication system
- View, edit, and manage all appointments
- Real-time appointment status tracking (Pending, Confirmed, Cancelled)
- One-click appointment confirmation via email

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Elegant animations and transitions
- Dark mode support
- Interactive gallery showcase
- Video hero section

---

## 🛠️ Tech Stack

### **Frontend**
- HTML5, CSS3, JavaScript (Vanilla)
- Custom CSS Grid & Flexbox layouts
- Responsive design (Mobile-first approach)
- Google Fonts (Playfair Display, Poppins)

### **Backend**
- Node.js with Express.js
- RESTful API architecture
- Session-based authentication

### **Database**
- SQLite3 with better-sqlite3
- Automated schema initialization
- WAL (Write-Ahead Logging) mode for performance

### **Email Service**
- Nodemailer with Gmail SMTP
- HTML email templates
- Automatic booking notifications

### **Deployment**
- Render.com (Cloud hosting)
- Environment variables for security
- Automated CI/CD pipeline

---

## 📁 Project Structure

```
ram-ismail-salon/
├── public/                 # Frontend files
│   ├── assets/            # Images and videos
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── index.html         # Homepage
│   ├── booking.html       # Booking page
│   ├── gallery.html       # Gallery page
│   ├── prices.html        # Price list page
│   ├── about.html         # About page
│   └── admin.html         # Admin dashboard
├── scripts/               # Database utilities
│   ├── init_db.js         # Database initialization
│   └── check_schema.js    # Schema verification
├── server.js              # Express server
├── database.sqlite        # SQLite database
├── package.json           # Dependencies
├── render.yaml            # Deployment configuration
└── .env.example           # Environment variables template
```

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- npm (Node Package Manager)

### **1. Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/ram-ismail-salon.git
cd ram-ismail-salon
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory:
```env
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

> **Note**: For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833?hl=en) instead of using your regular password.

### **4. Initialize Database**
```bash
npm run init-db
```

### **5. Start the Server**
```bash
npm start
```

The application will be available at `http://localhost:3000`

---

## 📊 Database Schema

### **Services Table**
- `id` - Primary key
- `name`, `name_tr`, `name_ar` - Service names (multilingual)
- `price_euro` - Service price

### **Appointments Table**
- `id` - Primary key
- `guest_type` - Hotel guest or walk-in
- `full_name`, `email`, `phone_number` - Customer details
- `room_number` - For hotel guests
- `appointment_date`, `appointment_time` - Booking details
- `services` - Selected services
- `total_price_euro` - Total cost
- `status` - pending/confirmed/cancelled
- `created_at` - Timestamp

---

## 🎯 API Endpoints

### **Public Endpoints**
- `GET /api/services` - Fetch all services
- `POST /api/book` - Create new booking

### **Admin Endpoints** (Authentication Required)
- `POST /api/admin/login` - Admin authentication
- `POST /api/admin/logout` - Session termination
- `GET /api/admin/session` - Verify session
- `GET /api/admin/appointments` - Get all appointments
- `PUT /api/admin/appointments/:id` - Update appointment
- `DELETE /api/admin/appointments/:id` - Delete appointment
- `GET /api/admin/confirm-appointment?id=` - Email confirmation link

---

## 🔒 Security Features

- Session-based authentication
- Environment variable protection
- CORS configuration
- SQL injection prevention (Prepared statements)
- Secure password handling (Admin credentials)

---

## 📱 Key Pages

1. **Homepage** - Hero section with video background, services preview, gallery
2. **Booking** - Interactive booking form with service selection
3. **Gallery** - Showcase of salon work
4. **Price List** - Complete service menu with pricing
5. **About** - Salon information and philosophy
6. **Admin Dashboard** - Appointment management interface

---

## 🌍 Deployment

The application is deployed on Render.com with automatic deployments from the main branch.

**Live URL**: [https://ramismail-salon-1.onrender.com](https://ramismail-salon-1.onrender.com)

### **Environment Variables (Render)**
Set these in your Render dashboard:
- `EMAIL_USER` - Gmail address
- `EMAIL_PASS` - Gmail app password
- `NODE_ENV` - production

---

## 📝 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server
- `npm run init-db` - Initialize/reset database
- `npm run check-db` - Verify database schema

---

## 🎓 Project Purpose

This project was developed as a final exam submission for a Web Design course, demonstrating proficiency in:
- Full-stack web development
- Database design and management
- RESTful API development
- Responsive UI/UX design
- Email integration
- Cloud deployment

---

## 📧 Contact

For inquiries or appointments, visit the website or contact via WhatsApp: [+90 537 385 4723](https://wa.me/905373854723)

---

## 📄 License

This project is developed for educational purposes as a final exam project.

---

## 🙏 Acknowledgments

- Google Fonts for typography
- Pexels for stock images
- Render.com for hosting

---

**Made with ❤️ by Ram Ismail**
