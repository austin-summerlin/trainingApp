const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout.js');

const getAllworkouts = () => {
  const allWorkouts = Workout.getAllworkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
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
