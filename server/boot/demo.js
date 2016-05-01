module.exports = function(app) {
	// Add restaurants
	var Restaurant = app.models.Restaurant;
	Restaurant.create({
		"id": 1,
		"name": "Charlie",
		"location": "Zurich, Switzerland"
	}, function(err, obj) {console.log(obj);});
	Restaurant.create({
		"id": 2,
		"name": "Brown",
		"location": "Zurich, Switzerland"
	}, function(err, obj) {console.log(obj);});
	Restaurant.create({
		"id": 3,
		"name": "Juan",
		"location": "Zurich, Switzerland"
	}, function(err, obj) {console.log(obj);});
}