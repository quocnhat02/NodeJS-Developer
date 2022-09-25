import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

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
  return res.send('THE GET ID ROUTE');
});

export default router;
