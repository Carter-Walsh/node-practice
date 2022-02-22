const express = require('express');
var cors = require('cors')
const health = require("./health");

const api = express.Router();

// All extensions needed to handle api routes
api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(cors())

/* When we receive a request for /health, it will
call the health method that is imported */
api.use('/health', health);

module.exports = api;