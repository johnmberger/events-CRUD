const express = require('express');
const router = express.Router();
const venuesController = require('../controllers/venues');

router.get('/:id', (req, res, next) => {
  const venueID = req.params.id;
  venuesController.getAllEvents(venueID)
  .then((results) => {
    res.render('venues', {
      title: 'Venue',
      events: results[0],
      venue: results[1][0]
    });
  });
});

module.exports = router;
