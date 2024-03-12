const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const mapRoutes = require('./routes/mapRoutes');
const waypointRoutes = require('./routes/waypointRoutes');
const authMiddleware = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/maps', authMiddleware, mapRoutes);
app.use('/api/waypoints', authMiddleware, waypointRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

