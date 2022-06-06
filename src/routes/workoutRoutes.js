const express = require('express');
const workoutController = require('../controllers/workoutController');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.get("/", workoutController.getAllworkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createWorkout);

router.patch("/:workoutId", workoutController.updateWorkout);

router.delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router;
