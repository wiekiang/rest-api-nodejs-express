/** @format */
import { v4 as uuidv4 } from "uuid";

let users = [];

/* Get All Users */
export const getUsers = (req, res) => {
    res.send(users);
};

/* Create User with ID */
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });

    res.send(`User with name ${user.firstName} added to database.`);
};

/* Get User by ID */
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

/* Delete User by ID */
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} is deleted.`);
};

/* Update User by ID */
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with id ${id} has been updated.`);
};
