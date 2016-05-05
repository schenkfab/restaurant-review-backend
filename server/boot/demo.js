module.exports = function(app) {
	// Add restaurants
	var Restaurant = app.models.Restaurant;
	Restaurant.create({
		"id": 4,
		"name": "Alpha",
		"location": "Bern, Switzerland"
	}, function(err, obj) {});
	Restaurant.create({
		"id": 5,
		"name": "Beta",
		"location": "Bern, Switzerland"
	}, function(err, obj) {});
	Restaurant.create({
		"id": 1,
		"name": "Charlie",
		"location": "Zurich, Switzerland"
	}, function(err, obj) {});
	Restaurant.create({
		"id": 2,
		"name": "Brown",
		"location": "Zurich, Switzerland"
	}, function(err, obj) {});
	Restaurant.create({
		"id": 3,
		"name": "Juan",
		"location": "Zurich, Switzerland"
	}, function(err, obj) {});
	// Add reviews
	var Review = app.models.Review;
	Review.create({
		"id": 1,
	    "restaurantId": 1,
	    "author": "John Doe",
	    "text": "Awesome food! Good service!",
	    "rating": 5
	}, function(err, obj) {});
	Review.create({
		"id": 2,
	    "restaurantId": 1,
	    "author": "Sam",
	    "text": "Food was delicious.",
	    "rating": 5
	}, function(err, obj) {});
	Review.create({
		"id": 3,
	    "restaurantId": 1,
	    "author": "Ted",
	    "text": "Terrible service! Never again!",
	    "rating": 2
	}, function(err, obj) {});
	Review.create({
		"id": 4,
	    "restaurantId": 1,
	    "author": "Bob",
	    "text": "Food OK! Service meh!",
	    "rating": 3
	}, function(err, obj) {});
}