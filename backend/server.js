const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

const app = express();

// CORS: allow any origin (development) and enable credentials
// app.use(
//     cors({
//         origin: (origin, callback) => callback(null, true), // reflect any origin

//         credentials: true,
//     })
// );
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://class-project-swart.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Route imports
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/classes', require('./routes/classRoutes'));
app.use('/api/announcements', require('./routes/announcementRoutes'));
app.use('/api/teacher', require('./routes/teacherRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/materials', require('./routes/materialRoutes'));
app.use('/api/assignments', require('./routes/assignmentRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('⚠️ Unexpected error:', err);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Start server after DB connection
const startServer = async () => {
    try {
        await connectDB(); // ensure DB is connected before listening
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    } catch (err) {
        console.error('💥 Server failed to start:', err);
        process.exit(1);
    }
};

startServer();
