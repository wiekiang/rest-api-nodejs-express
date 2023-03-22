/** @format */

import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 6001;

app.use(bodyParser.json());

app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);

app.get("/", (req, res) => res.send("Hello World"));

app.use("/users", usersRoutes);
