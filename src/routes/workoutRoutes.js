const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.get("/", workoutController.getAllworkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createWorkout);

router.patch("/:workoutId", workoutController.updateWorkout);

router.delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router;
