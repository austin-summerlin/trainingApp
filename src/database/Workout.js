const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllworkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workout) {
    return;
  }
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) !== -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: 'Workout with this name `${newWorkout.name}` already exists',
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteWorkout = (workoutId) => {
  const indexForDelete = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDelete === -1) {
    return;
  }
  DB.workouts.splice(indexForDelete, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllworkouts,
  createNewWorkout,
  getOneWorkout,
  updateWorkout,
  deleteWorkout,
};