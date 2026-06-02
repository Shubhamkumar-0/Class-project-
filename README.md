# E-Learning Platform for Rural Areas

A full-stack MERN-based E-Learning Platform designed to provide accessible and interactive online education for rural and underserved students. The platform enables teachers to manage classes, assignments, attendance, study materials, and announcements while students can attend live classes, submit assignments, track attendance, and access learning resources.

---

## Features

### Authentication & Authorization
- JWT-based Authentication
- Secure Login & Registration
- Role-Based Access Control
  - Teacher Dashboard
  - Student Dashboard

### Teacher Module
- Create Classes
- Create Assignments
- Upload Study Materials
- Conduct Live Classes
- Mark Attendance
- View Student Submissions
- Post Announcements

### Student Module
- Join Live Classes
- View Course Materials
- Submit Assignments
- Track Attendance
- View Announcements
- Access Dashboard Analytics

### File Management
- Upload Learning Materials
- Assignment Submission Support
- Secure File Storage

### Dashboard Features
- Personalized Dashboard
- Attendance Reports
- Assignment Tracking
- Class Management

---

## Technology Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)

### File Upload
- Multer

### Version Control
- Git
- GitHub

---

## Project Structure

```
Class-project
│
├── src
│   ├── pages
│   │   ├── auth
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── teacher
│   │   │   ├── TeacherDashboard.jsx
│   │   │   ├── CreateClass.jsx
│   │   │   ├── CreateAssignment.jsx
│   │   │   ├── UploadMaterial.jsx
│   │   │   ├── MarkAttendance.jsx
│   │   │   ├── LiveClassTeacher.jsx
│   │   │   └── ViewSubmissions.jsx
│   │   │
│   │   └── student
│   │       ├── StudentDashboard.jsx
│   │       ├── ClassList.jsx
│   │       ├── Materials.jsx
│   │       ├── StudentAssignments.jsx
│   │       ├── AttendanceReport.jsx
│   │       └── LiveClassStudent.jsx
│   │
│   └── components
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       ├── ChatWindow.jsx
│       ├── VideoPlayer.jsx
│       ├── FileUploader.jsx
│       └── MaterialCard.jsx
│
└── backend
    ├── controllers
    ├── models
    ├── routes
    └── middleware
```

---

## Database Models

- User
- Class
- Assignment
- Submission
- Material
- Attendance
- Announcement

---

## REST APIs

### Authentication
- User Registration
- User Login
- JWT Verification

### Teacher APIs
- Create Class
- Create Assignment
- Upload Material
- Mark Attendance
- Manage Announcements

### Student APIs
- View Classes
- Submit Assignments
- Access Materials
- View Attendance

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Backend

```bash
npm start
```

### Run Frontend

```bash
npm run dev
```

---

## Future Enhancements

- Video Conferencing Integration
- AI-Based Learning Assistant
- Course Progress Analytics
- Mobile Application
- Real-Time Notifications
- Online Quiz System
- Certificate Generation

---

## Author

Shubham Kumar

B.Tech Computer Science & Engineering

MERN Stack Developer | Full Stack Developer
