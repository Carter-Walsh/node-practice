const express = require("express");
const api = require("./api");
const router = express.Router();

/* When we receive a request on /api, it will 
call the api method that is imported which will be the 
index.js file inside the api folder */
router.use("/api", api);

module.exports = router;