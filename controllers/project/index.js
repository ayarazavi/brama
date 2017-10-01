


module.exports = function(db) {

	return {
		index : function index(request, response) {
			db.user.findAll().then(function() {
				response.json("DB query")
			})
		}
	}
}