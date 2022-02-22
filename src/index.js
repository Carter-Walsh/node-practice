const express = require("express");
const router = require("./router");
require("dotenv").config();

const app = express();
app.use(router);

const port = process.env.port || "3001";

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`Listening on ${port}`);
});
