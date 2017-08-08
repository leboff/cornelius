'use strict';

const Promise = require('bluebird'),
			mlb = require('../utils/mlb');

/**
 * @name cornelius.getSits
 * @description Takes a player's ID and returns their situation stats.
 *  
 * `options` can be an object or a string. If it's a string, it will return the player's latest *hitting* stats.
 * If the prune flag is set to `true` but there's no stats to prune, you'll get an empty object.
 * @summary Get a player's situational stats.
 *
 * @public
 * @param {Object|string} options
 * @param {string} options.player_id - Player's ID.
 * @param {string} [options.year] - The season to get stats for.
 * @param {array} [options.months] - Months to get splits for
 * @returns {Object} `sport_[stat_type]_tm` -  MLB response in JSON format.
 * @example <caption>Get a player's latest hitting stats</caption>
*/
function getSits (options) {
	return new Promise(function (resolve, reject) {
		mlb.sits(options)
			.then(data => {
				resolve(data);
			})
			.catch(error => {
				reject(error);
			});

	});
}

module.exports = getSits;
