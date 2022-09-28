import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('TEST');

  res.send('Hello from HomePage');
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
