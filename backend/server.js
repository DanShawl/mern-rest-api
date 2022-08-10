const express = require('express');
const dotenv = require('dotenv').config(); //  allows us to have a .env with our variables
const port = process.env.PORT || 5000;

const app = express(); //  initialize express

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
