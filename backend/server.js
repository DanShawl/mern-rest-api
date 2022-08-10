const express = require('express');
const dotenv = require('dotenv').config(); //  allows us to have a .env with our variables
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express(); //  initialize express

//  in order to use body data, we need to add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler); // Overwrite the default express error handler

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
