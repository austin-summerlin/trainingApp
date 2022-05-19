const workoutService = require('../services/workoutService');

const getAllworkouts = (req, res) => {
  const allWorkouts = workoutService.getAllworkouts();
  res.send({ status: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const { params: { workoutId } } = req;
  if (!workoutId) {
    return;
  }
  const workout = workoutService.getOneWorkout(workoutId);
  res.send({ status: "OK", data: workout });
};

const createWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createWorkout(newWorkout);
  res.status(201).send({ status: "ok", data: createdWorkout });
};

const updateWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const updatedWorkout = workoutService.updateWorkout(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
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
