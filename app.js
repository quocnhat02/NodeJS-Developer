const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
