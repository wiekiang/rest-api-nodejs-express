/** @format */

import express from "express";
import {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
} from "../controllers/user.js";

const router = express.Router();

/* Routes */
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
