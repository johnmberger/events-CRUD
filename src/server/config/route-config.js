(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const index = require('../routes/index');
    const attendees = require('../routes/attendees');
    // const events = require('../routes/events');

    // *** register routes *** //
    app.use('/', index);
    app.use('/attendees', attendees);
    // app.use('/events', events);

  };

})(module.exports);
