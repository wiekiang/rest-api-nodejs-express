/** @format */

import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 29,
    },
];

/* CREATE */
router.post("/", (req, res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });

    res.send(`User with name ${user.firstName} added to database.`);
});

/* READ */
router.get("/", (req, res) => {
    res.send(users);
});

export default router;
