# Student Management System - Full Stack Web Application

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://student-management-system-five-gray.vercel.app/)



[![GitHub stars](https://img.shields.io/github/stars/mdmashoodalam/student-management-system?style=social)](https://github.com/mdmashoodalam/student-management-system/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/mdmashoodalam/student-management-system?style=social)](https://github.com/mdmashoodalam/student-management-system/network/members)
[![GitHub issues](https://img.shields.io/github/issues/mdmashoodalam/student-management-system)](https://github.com/mdmashoodalam/student-management-system/issues)
[![License](https://img.shields.io/github/license/mdmashoodalam/student-management-system)](https://github.com/mdmashoodalam/student-management-system/blob/main/LICENSE)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot%203.1.5-brightgreen)](https://spring.io/projects/spring-boot)
[![Frontend](https://img.shields.io/badge/Frontend-React%2018-61DAFB?logo=react)](https://reactjs.org)
[![Database](https://img.shields.io/badge/Database-MySQL%208-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)


---

## 🎯 Project Overview

A **modern, production-ready Student Management System** built with **Spring Boot** (Backend) and **React** (Frontend). This full-stack application provides comprehensive student record management with advanced search, filtering, pagination, and a fully responsive interface.

**Core Features:**
- 🔄 **Complete CRUD Operations** (Create, Read, Update, Delete)
- 🔍 **Advanced Search & Filtering** by name, department
- 📄 **Server-Side Pagination & Sorting**
- 📱 **Fully Responsive Design** (Mobile, Tablet, Desktop)
- ✅ **Real-Time Form Validation**
- 🔔 **Toast Notifications** for user feedback
- 🛡️ **Global Error Handling**
- 📊 **Clean RESTful APIs**

---

<!-- ## 🖼️ Live Demo

> Update these links with your real URLs before committing.

//**Frontend Demo:** `https://student-management.netlify.app`  
//**Backend API:** `https://student-management-backend.onrender.com/api/students`  -->

**GitHub Repository:** `https://github.com/mdmashoodalam/student-management-system`

---

## 🏗️ Tech Stack

| **Category** | **Technologies** |
|--------------|------------------|
| **Backend** | Spring Boot 3.1.5 • Java 17 • Spring Data JPA • Hibernate • Maven |
| **Frontend** | React 18 • Vite • Bootstrap 5 • Axios • React Router • React Hook Form |
| **Database** | MySQL 8.x |
| **Styling** | Bootstrap 5 • Custom CSS • Font Awesome 6 |
| **Validation** | Yup • React Hook Form |
| **Notifications** | React Toastify |
| **IDE** | Eclipse (Backend) • VS Code (Frontend) |

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+
- Git

### 1. Backend Setup

```bash
cd backend
mvn clean install
# Edit src/main/resources/application.properties to set your DB credentials
mvn spring-boot:run
```

Backend will run on: `http://localhost:8080`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:3000`

### 3. Database Setup

```sql
CREATE DATABASE student_management CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- JPA/Hibernate will auto-create tables based on entities
```

---

## 📁 Project Structure

```text
student-management-system/
├── backend/                    # Spring Boot Backend
│   ├── src/main/java/com/studentmanagement/
│   │   ├── controller/         # REST Controllers
│   │   ├── service/            # Business Logic
│   │   ├── repository/         # Data Access Layer
│   │   ├── model/              # JPA Entities
│   │   ├── dto/                # Data Transfer Objects
│   │   └── exception/          # Custom Exceptions
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── pom.xml
│   └── README.md (optional)
├── frontend/                   # React Frontend (Vite)
│   ├── src/
│   │   ├── components/         # Reusable Components
│   │   ├── pages/              # Page Components
│   │   ├── services/           # API Services (Axios)
│   │   ├── App.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── index.html
│   ├── package.json
│   └── README.md (optional)
├── screenshots/                # Project Screenshots (for README)
│   ├── home.png
│   ├── students-list.png
│   ├── add-student.png
│   ├── mobile.png
│   ├── search.png
│   └── pagination.png
├── README.md                   # This file
├── LICENSE
└── .gitignore
```

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/students` | Get students (pagination, search, filter) |
| `GET` | `/api/students/{id}` | Get student by ID |
| `POST` | `/api/students` | Create new student |
| `PUT` | `/api/students/{id}` | Update student |
| `DELETE` | `/api/students/{id}` | Delete student |

### Sample Request

```bash
curl -X GET "http://localhost:8080/api/students?page=0&size=10&name=John&department=Computer%20Science"
```

---

## 🧪 Testing

### Backend Tests

```bash
cd backend
mvn test
```

### Frontend Tests

```bash
cd frontend
npm test
npm run lint
```

### Manual End-to-End Testing

- Add a student and verify the record in the database  
- Search/filter by name and department  
- Edit and delete an existing student  
- Test on different screen sizes (mobile, tablet, desktop)  

---

<!-- ## 🚀 Production Deployment (Example Setup)

> Adjust this section to your real deployment if different.

**Frontend:** Netlify  
**Backend:** Render  
**Database:** Railway / any managed MySQL

### Live Links (Example)

- Frontend: `https://student-management.netlify.app`
- Backend: `https://student-management-backend.onrender.com`
- API base URL: `https://student-management-backend.onrender.com/api/students

---
`
-->
## 📊 Project Metrics (Approx)

| Metric | Value |
|--------|-------|
| Lines of Code | 2,500+ |
| API Endpoints | 10+ |
| React Components | 20+ |
| Responsive Breakpoints | 4–5 |
| Database Tables | 1 (students) |

---

## 🎯 Key Features

### Backend

- Spring Boot REST APIs
- Layered architecture (Controller → Service → Repository)
- Spring Data JPA with Hibernate
- Global exception handling
- CORS configuration
- DTOs and validation

### Frontend

- React with functional components and hooks
- Axios for HTTP requests
- React Router for navigation
- Bootstrap 5 + custom CSS for responsive UI
- React Hook Form + Yup for form validation
- React Toastify for notifications
- Pagination, search, filter, and sorting on the UI

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add: YourFeature"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---
<!--
## 📄 License

This project is licensed under the **MIT License**.  
Create a `LICENSE` file and add standard MIT text (or use GitHub’s “Add license” option).

---
-->

## 👨‍💻 Author

**MD MASHOOD ALAM**  
B.Tech Computer Science • Java Full Stack Developer  

- Email: `mashoodalam05@gmail.com`  
- LinkedIn: `https://linkedin.com/in/mdmashoodalam`  
- GitHub: `https://github.com/mdmashoodalam`  
- Portfolio: `http://mdmashoodalam.netlify.app/`

---

## 💬 Connect With Me

- LinkedIn: `https://www.linkedin.com/in/mdmashoodalam/`  
- GitHub: `https://github.com/mdmashoodalam`  
- Email: `mashoodalam05@gmail.com`

---

## 🎯 Show Your Support

If this project helped you or you liked the implementation:

**⭐ Star this repository** and **share it** with others!

---

**© 2026 MD MASHOOD ALAM— Built with ❤️ using Spring Boot & React**
```

