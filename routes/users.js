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
  return res.json(users);
});

router.post('/', (req, res) => {
  console.log('POST ROUTE REACHED');

  return res.send('POST ROUTE REACHED');
});

export default router;
