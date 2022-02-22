const express = require("express");
const router = require("./router");
require("dotenv").config();

const app = express();
app.use(router);

/* This is the "home" file. Controls the baseline 
abilities of the app by starting server and 
catching any requests that are unkown */

/* Setting port to be value inside .env file. If no value
is present, we set 3001. I used this npm package
https://www.npmjs.com/package/dotenv?activeTab=readme to 
add environment variables. */
const port = process.env.port || "3001";

// Generic catch all for unknown routes
app.use('*', (_req, res) => {
    res.sendStatus(404);
});

// Starting server on port 3001
app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`Listening on ${port}`);
});
