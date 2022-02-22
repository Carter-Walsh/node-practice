const express = require('express');
const router = express.Router();

app.use(basepath, router);

app.get('/', (_req, res) => {
    res.status(200).send('Hello!');
});

// Generic catch all for unknown routes
app.use('*', (_req, res) => {
    res.sendStatus(404);
});