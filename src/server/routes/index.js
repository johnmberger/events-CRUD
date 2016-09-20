const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  indexController.getAllEvents()
  .then((events) => {
    res.render('index', {
      title: 'Welcome to EVENTloop',
      events
    });
  });
});

module.exports = router;
