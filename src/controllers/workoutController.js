const workoutService = require('../services/workoutService');

const getAllworkouts = (req, res) => {
  const allWorkouts = workoutService.getAllworkouts();
  res.send({ status: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const getOneWorkout = workoutService.getOneWorkout();
  res.send('Get a Single Workout');
};

const createWorkout = (req, res) => {
  const createdWorkout = workoutService.createWorkout();
  res.send('Create a Workout');
};

const updateWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateWorkout();
  res.send('Update a Workout');
};

const deleteWorkout = (req, res) => {
  const deletedWorkout = workoutService.deleteWorkout();
  res.send('Delete a Workout');
};

module.exports = {
  getAllworkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
};
