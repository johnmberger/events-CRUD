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
    res.render('events', {
      title: `Register | ${event.title}`,
      event,
      tickets
    });
  });
});

router.post('/:id/register', (req, res, next) => {
  const eventID = req.params.id;
  const formSubmission = req.body;
  eventsController.register(eventID, formSubmission)
  .then((response) => {

    if (response.message === 'existing user, not old enough') {
      eventsController.getEvent(eventID)
      .then((results) => {
        console.log('got to this part', results);
        console.log(response);
        var event = results[0][0];
        var tickets = results[1];

        res.render('events', {
          title: `Register | ${event.title}`,
          event,
          tickets,
          errors: [`Welcome back, ${response.data.preferred_name}, you're not old enought for this event!`]
        });
      });
    }
  });
});

module.exports = router;
