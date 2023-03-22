/** @format */

import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

/* Read All Users */
router.get("/", (req, res) => {
    res.send(users);
});

/* Create User */
router.post("/", (req, res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });

    res.send(`User with name ${user.firstName} added to database.`);
});

/* Get User by ID */
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

/* Delete User by ID */
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} is deleted.`);
});

/* Update User by ID */
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with id ${id} has been updated.`);
});

export default router;
