import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: 'john',
    lastName: 'Doe',
    age: 25,
  },
];

router.get('/', (req, res) => {
  console.log(users);
  return res.send('Hello');
});

export default router;
