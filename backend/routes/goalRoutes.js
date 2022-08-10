const express = require('express'); // common js syntax
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Get goals');
  res.status(200).json({ message: 'Get Goals' }); // usually json
}); //  get is the request we want to listen for

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Set Goal' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router;
