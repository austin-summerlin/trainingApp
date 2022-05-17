const express = require('express');
const workoutRouter = require('./routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.use('/api/workouts', workoutRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
