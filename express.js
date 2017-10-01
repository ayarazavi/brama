



module.exports =  function(db) {

	var app = require('express')();
	var projectController = require('./controllers/project')(db);


	function listen(port) {
  		app.listen(port, function () {
    			console.log('App is listening', port);
  		});
	}
	app.get('/healthcheck', function (request, response) {
  		return response.json('healthecheck');
	});

	app.get('/project',  projectController.index);
	return {listen:listen};	
}


