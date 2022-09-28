import express from 'express';

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
  return res.send(users);
});

router.post('/', (req, res) => {
  return res.send('POST ROUTE REACHED');
});

export default router;
