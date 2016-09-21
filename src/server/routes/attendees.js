const express = require('express');
const router = express.Router();

const attendeesController = require('../controllers/attendees');

router.get('/:id', (req, res, next) => {
  const attendeeID = req.params.id;
  attendeesController.getAttendee(attendeeID)
  .then((result) => {
    res.render('attendees', {
      attendee: result[0][0],
      events: result[1]
    });
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
