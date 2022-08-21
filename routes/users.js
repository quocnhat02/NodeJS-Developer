import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

export default router;
