const express = require("express");
const cors = require("cors");
const health = require("./api/health");
const pokeGenerator = require("./api/poke-generator");
const getPokemon = require("./api/get-pokemon");

// Initialize express
const app = express();

// All extensions needed to handle api routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes that will be used for this app
app.use("/health", health);
app.use("/poke-generator", pokeGenerator);
app.use("/get-generator", pokeGenerator);

// Generic catch all for unknown routes
app.use("*", (_req, res) => {
  res.sendStatus(404);
});

module.exports = app;
