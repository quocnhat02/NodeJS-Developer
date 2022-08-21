import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// get users
router.get("/", (req, res) => {
  res.json(users);
});

// create user
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ id: uuidv4(), ...user });

  res.json(`User with the name ${user.firstName} added to the database! `);
});

// get detail user
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database!`);
});

export default router;
