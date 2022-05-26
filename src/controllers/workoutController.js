const workoutService = require('../services/workoutService');

const getAllworkouts = (req, res) => {
  try {
    const allWorkouts = workoutService.getAllworkouts();
    res.send({ status: "ok", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "error", message: error?.message || error });
  }
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId }
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "Failed",
        data: { error: "Parameter `:workoutId` is missing" },
      });
  }
  try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "error", message: error?.message || error });
  }
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
    res
      .status(400)
      .send({
        status: "Failed",
        data: {
          error: "one of the following keys is missing: name, mode, equipment, exercises, trainerTips"
        },
      });
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = workoutService.createWorkout(newWorkout);
    res.status(201).send({ status: "ok", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
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
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  workoutService.deleteWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllworkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
};
