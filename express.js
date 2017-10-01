var app = require('express')();
var projectController = require('./controllers/project');

app.get('/healthcheck', function (request, response) {
  return response.json('healthecheck');
});

app.get('/project',  projectController.index);

function listen(port) {
  app.listen(port, function () {
    console.log('App is listening', port);
  });
}

module.exports = { listen: listen };
