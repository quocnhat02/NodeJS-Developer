import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  return res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  return res.send(
    `User with the username ${user.firstName} added to the database`
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    return res.send('Not found user');
  }
  return res.send(foundUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    return res.send('Not found user');
  }
  users = users.filter((user) => user.id !== id);

  return res.send(`User with the id ${id} deleted from the database`);
});

export default router;
