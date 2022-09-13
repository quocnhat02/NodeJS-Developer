const express = require("express");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// ROUTES
app.use(planetsRouter);

module.exports = app;
