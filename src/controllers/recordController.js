const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
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
    const records = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: records });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "error", message: error?.message || error });
  }
};

module.exports = {
  getRecordForWorkout,
};


