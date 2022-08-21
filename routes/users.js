import express from "express";
import {
  getUser,
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// get users
router.get("/", getUsers);

// create user
router.post("/", createUser);

// get detail user
router.get("/:id", getUser);

// delete user
router.delete("/:id", deleteUser);

// update user
router.patch("/:id", updateUser);

export default router;
