import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
  return res.send('Hello');
});

export default router;
