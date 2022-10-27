const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

console.log(process.env);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
