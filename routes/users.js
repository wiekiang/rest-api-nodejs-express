/** @format */

import express from "express";

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
    users.push(user);
    res.send(`User with name ${user.firstName} added to database.`);
});

/* READ */
router.get("/", (req, res) => {
    res.send(users);
});

export default router;
