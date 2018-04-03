/**
 * Represents Cornelius module.
 * @private
 */
class Cornelius {
    /**
     * Makes Cornelius functions available.
     */
    constructor() {
        this.playerSearch = require('./lib/playerSearch');
        this.getPlayer = require('./lib/getPlayer');
        this.getStats = require('./lib/getStats');
        this.getSits = require('./lib/getSits');
        this.getRoster = require('./lib/getRoster');
    }
}

module.exports = new Cornelius();
