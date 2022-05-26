const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllworkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Workout with id ${workoutId} not found`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
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
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === changes.name) !== -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: 'Workout with this name `${changes.name}` already exists',
      };
    }
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Workout with id ${workoutId} not found`,
      };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
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