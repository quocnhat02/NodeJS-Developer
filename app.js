const morgan = require('morgan');
const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1.Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const PORT = 3000;

// 2.Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 3.Start Server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
