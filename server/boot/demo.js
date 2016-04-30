module.exports = function(app) {
	// Add a restaurant
	var Restaurant = app.models.Restaurant;
	Restaurant.create({
		"id": 1,
		"name": "test",
		"location": "Here"
	}, function(err, obj) {console.log(obj);});
}