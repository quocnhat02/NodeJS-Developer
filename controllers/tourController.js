const Tour = require('../models/tourModel');

const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }

  next();
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // return res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

const getAllTours = (req, res) => {
  return res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

const createTour = (req, res) => {
  return res.status(201).json({
    message: {
      status: 'success',
      // data: {
      //   tours: newTour,
      // },
    },
  });
};

const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

module.exports = {
  checkBody,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
