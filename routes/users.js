import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
  },
];

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

export default router;
