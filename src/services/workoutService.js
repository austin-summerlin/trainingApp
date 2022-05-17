const Workout = require('../database/Workout.js');

const getAllworkouts = () => {
  const allWorkouts = Workout.getAllworkouts();
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createWorkout = () => {
  return;
};

const updateWorkout = () => {
  return;
};

const deleteWorkout = () => {
  return;
};

module.exports = {
  getAllworkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
};
