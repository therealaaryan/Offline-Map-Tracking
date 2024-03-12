// waypointRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Apply authMiddleware to all routes in this router
router.use(authMiddleware);

// Define your routes here

module.exports = router;
