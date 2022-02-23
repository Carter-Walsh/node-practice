const express = require("express");
const pokeGenerator = express.Router();

pokeGenerator.get("/", (req, res) => {
  res.send({
    status: "OK",
    details: "Generating Random Pokemon Now!",
    time: new Date().toISOString(),
  });
});

module.exports = pokeGenerator;
