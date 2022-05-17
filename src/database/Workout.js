const DB = require('./db.json');

const getAllworkouts = () => {
  return DB.workouts;
};

module.exports = { getAllworkouts };