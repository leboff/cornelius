var expect = require('chai').expect,
	should = require('chai').should(),
	cornelius = require('../index');

describe('findPlayer', function () {
	it('should return an object', function () {
		return cornelius.findPlayer('wright')
			.then(function (data) {
				expect(data).to.be.an('object');
			});
	});
	it('object should have an array of n results with valid search term', function () {
		return cornelius.findPlayer('wright')
			.then(function (data) {
				should.exist(data.row);
				expect(data.row).to.be.an('array');
				expect(data.row).to.have.length.above(0);
			});
	});
	it('object should not have an array of results with an invalid search term', function () {
		return cornelius.findPlayer('invalidname')
			.then(function (data) {
				should.not.exist(data.row);
			});
	});
});

describe('findPlayer with pruned param', function() {
	it('should return an array of n players', function () {
		return cornelius.findPlayer('wright', true)
			.then(function (data) {
				expect(data).to.be.an('array');
				expect(data).to.have.length.above(0);
			});
	});
	it('should return an empty array when given invalid search term', function () {
		return cornelius.findPlayer('invalidname', true)
			.then(function (data) {
				expect(data).to.be.an('array');
				expect(data).to.have.length.of(0);
			});
	})
});


describe('getPlayer', function () {
	it('should return an object', function () {
		
	});
});

describe.skip('getStats', function () {
	it('should return an object', function () {

	});

	it('should return an error when given a single string', function() {

	})
});