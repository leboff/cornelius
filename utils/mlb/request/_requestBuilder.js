'use strict';

const url = require('url'),
	base = 'http://mlb.mlb.com/lookup/json/named.',
	endpoints = {
		search: 'search_player_all.bam',
		player_info: 'player_info.bam',
		roster: 'roster_40.bam',
		stats: {
			hitting: 'sport_hitting_tm.bam',
			pitching: 'sport_pitching_tm.bam'
		}
	};



/**
 * Builds the MLB request url.
 * 
 * @private
 * @param {string} type - The type of request - determines the endpoint to use.
 * @param {Object|string} options - The options to make the request with.
 * @returns {Object} url - Parsed URL object.
 */
function buildRequest(type, options) {
	let uri = base;

	switch (type) {
		case 'search':
			if (options.active === false) {
				uri += `${endpoints.search}?sport_code='mlb'&name_part='${options.query}%25'&active_sw='N'`;
			} else {
				uri += `${endpoints.search}?sport_code='mlb'&name_part='${options.query || options}%25'&active_sw='Y'`;
			}
			break;
		case 'get':
			uri += `${endpoints.player_info}?sport_code='mlb'&player_id='${options.player_id || options}'`;
			break;
		case 'roster':
			if (options.full === true) {
				uri += `${endpoints.roster}?team_id='${options.team_id || options}'`;
			} else {
				uri += `${endpoints.roster}?team_id='${options.team_id || options}'&roster_40.col_in=name_display_first_last&roster_40.col_in=player_id`;
			}
			break;
		case 'stats':
			if (options.pitching === true) {
				if (options.year) {
					uri += `${endpoints.stats.pitching}?player_id=${options.player_id}&sport_pitching_tm.season=${options.year}&game_type='R'&league_list_id='mlb'`;
				} else {
					uri += `${endpoints.stats.pitching}?player_id=${options.player_id || options}&game_type='R'&league_list_id='mlb'`;
				}
			} else {
				if (options.year) {
					uri += `${endpoints.stats.hitting}?player_id=${options.player_id}&sport_hitting_tm.season=${options.year}&game_type='R'&league_list_id='mlb'`;
				} else {
					uri += `${endpoints.stats.hitting}?player_id=${options.player_id || options}&game_type='R'&league_list_id='mlb'`;
				}
			}
			break;
		default:
			return;
	}

	return url.parse(uri);

}

module.exports = buildRequest;
