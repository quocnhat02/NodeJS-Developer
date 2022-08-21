import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ id: uuidv4(), ...user });

  res.json(`User with the name ${user.firstName} added to the database! `);
});

router.get("/:id", (req, res) => {
  res.send(`Route has params: ${req.params.id}`);
});

export default router;
