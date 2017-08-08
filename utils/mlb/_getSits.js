'use strict';

let mlbRequest = require('./request'),
		find = require('../find'),
		pruneData = require('../prune'),
		validate = require('../validate');

/**
 * Constructs and makes call to MLB for stats.
 * 
 * @private
 * @param {Object|string} options - The options to make the request with.
 * @param {string} options.player_id - ID of player to get stats for.
 * @param {string} [options.pitching=false] - The type of stats to get.
 * @param {string} [options.year] - The season to get stats for.
 * @returns {Promise} - Promise to be fulfilled with player stats object, or error.
 */
function getSits (options) {
	//validate.getStats(options);
	return new Promise (function (resolve, reject) {
		// let error = validate.getStats(options);
		// if (error) {
		// 	reject(error);
		// }

		let url = mlbRequest.build('sits', options);
		if (!url) {
			reject(new Error('Error building sport_[stat_type]_tm request URL.'));
		}

		mlbRequest.make(url)
			.then(data => {
				resolve(data);
			})
			.catch(error => {
				reject(error);
			});
	});
}

module.exports = getSits;