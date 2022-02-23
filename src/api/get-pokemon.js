const express = require("express");
const getPokemon = express.Router();

getPokemon.get("/", (req, res) => {
  res.send({
    status: "OK",
    details: "Getting a specific Pokemon!",
    time: new Date().toISOString(),
  });
});

module.exports = getPokemon;
