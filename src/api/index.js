const express = require('express');
const health = require("./health");

const api = express.Router();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use('/health', health);


module.exports = api;