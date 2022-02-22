const express = require('express');
const health = express.Router();

/* When the health route is hit, send back 
health data to verify the app is working */
health.get('/', (req, res) => {
  res.send({
    status: 'OK',
    details: 'Everything looks good',
    time: new Date().toISOString(),
  });
});

module.exports = health;
