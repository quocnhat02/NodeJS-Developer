import express from 'express';

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('[TEST]!');

  return res.send('Hello from Homepage');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
