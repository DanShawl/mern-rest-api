const express = require('express'); // common js syntax
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController'); //  bring in from controller

// This route is replaced with below with controller functions
// router.get('/', (req, res) => {
//   // res.send('Get goals');
//   res.status(200).json({ message: 'Get Goals' }); // usually json
// }); //  get is the request we want to listen for

//  These routes are refactored with below
// router.get('/', getGoals);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);

module.exports = router;
