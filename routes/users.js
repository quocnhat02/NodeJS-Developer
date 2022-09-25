import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  return res.json(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  return res.send(
    `User with the username ${user.firstName} added to the database!`
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  return res.json(foundUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  return res.send(`User with the id ${id} deleted from the database`);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  return res.send(`User with the id ${id} has been updated`);
});

export default router;
