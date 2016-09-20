const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

router.get('/:id/register', (req, res, next) => {
  const eventID = req.params.id;
  eventsController.getEvent(eventID)
  .then((results) => {
    var event = results[0][0];
    var tickets = results[1];
    console.log(results);
    res.render('event', {
      title: `Register | ${event.title}`,
      event,
      tickets
    });
  });
});

module.exports = router;
