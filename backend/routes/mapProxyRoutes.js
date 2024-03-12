const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Ensure this is called in your server.js or here if needed

const router = express.Router();

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const MAPBOX_BASE_URL = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

// Proxy endpoint for fetching a static map image
router.get('/static-map', async (req, res) => {
  const { lng, lat, zoom } = req.query; // Example: /api/map-proxy/static-map?lng=-74.006&lat=40.7128&zoom=13
  const mapURL = `${MAPBOX_BASE_URL}/${lng},${lat},${zoom}/500x300?access_token=${MAPBOX_ACCESS_TOKEN}`;

  try {
    const response = await axios.get(mapURL, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/png');
    res.send(response.data);
  } catch (error) {
    console.error('Failed to fetch map:', error);
    res.status(500).send('Failed to fetch map');
  }
});

module.exports = router;
