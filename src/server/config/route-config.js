(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const index = require('../routes/index');
    const attendees = require('../routes/attendees');
    const events = require('../routes/events');
    const venues = require('../routes/venues');

    // *** register routes *** //
    app.use('/', index);
    app.use('/attendees', attendees);
    app.use('/events', events);
    app.use('/venues', venues);
  };

})(module.exports);
