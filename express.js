var app = require('express')();
app.get('/healthcheck', function (request, response) {
  return response.json('healthecheck');
});

function listen(port) {
  app.listen(port, function () {
    console.log('App is listening', port);
  });
}

module.exports = { listen: listen };
