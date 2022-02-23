const express = require('express');
const cors = require('cors')
const health = require("./health");

const api = express.Router();

// All extensions needed to handle api routes
api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(cors())

/* When we receive a request for /health, it will
call the health route that is imported.
Full url to hit health endpoint will be 
http://localhost:3001/api/health */
api.use('/health', health);

module.exports = api;
