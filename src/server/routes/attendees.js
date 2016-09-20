const express = require('express');
const router = express.Router();

const attendeesController = require('../controllers/attendees');

router.get('/:id', (req, res, next) => {
  const attendeeID = req.params.id;
  attendeesController.getAttendee(attendeeID)
  .then((attendee) => {
    console.log(attendee);
    res.render('attendees', {
      attendee: attendee[0]
    });
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
