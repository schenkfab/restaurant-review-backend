'use strict';

module.exports = function(Review) {
	// Get all reviews by restaurantId
	Review.getByRestaurantId = function(restaurantId, cb) {
		//https://apidocs.strongloop.com/loopback/#persistedmodel-find
		Review.find({where: {'restaurantId': restaurantId}}, function(err, instances) {
			if (err) {
				throw err;
			}

			cb(null, instances);
		});
	}


	Review.remoteMethod (
		'getByRestaurantId',
		{
			http: {path: '/getByRestaurantId', verb: 'get'},
			accepts: {arg: 'restaurantId', type: 'number', http: { source: 'query' } }
		})

};