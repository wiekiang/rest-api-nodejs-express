/** @format */

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 6001;

app.use(bodyParser.json());

app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);

app.get("/", (req, res) => res.send("Hello World"));
