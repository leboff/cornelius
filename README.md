<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Cornelius](#cornelius)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
    -   [cornelius.playerSearch](#corneliusplayersearch)
    -   [cornelius.getPlayer](#corneliusgetplayer)
    -   [cornelius.getStats](#corneliusgetstats)
    -   [cornelius.getRoster](#corneliusgetroster)
-   [License](#license)

## Cornelius

Cornelius let's you grab MLB data via MLBAM's public lookup routes. All of the data Cornelius returns is property of MLB Advanced Media, and subject to their [usage terms](http://gdx.mlb.com/components/copyright.txt).


## Getting Started

```sh
  yarn add cornelius
```

```javascript
  const cornelius = require('cornelius');
```


## Usage




### cornelius.playerSearch

Search for players by name.

`options` should be an object.
If you provide no search query, `playerSearch` will return an empty array.

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options object.
    -   `options.query` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Player name.
    -   `options.active` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Set to false for historic players. (optional, default `true`)
    -   `options.prune` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Prune the data. (optional, default `true`)

**Examples**

_Active player search_

```javascript
cornelius.playerSearch({ query: 'wright' })
  .then(function (data) {
     // do stuff with search results
  })
  .catch(function (error) {
     // handle error
  });
```

_Historic player search_

```javascript
cornelius.playerSearch({ query: 'williams', active: false })
    .then(function (data) {
      // do stuff with search results
    })
    .catch(function (error) {
      // handle error
    });
```

Returns **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Array of pruned search results _or_ MLB `search_player_all` JSON data.

### cornelius.getPlayer

Takes a player's ID and returns their information.

`options` should be an object.
If you provide no player ID, or an incorrect one, `getPlayer` will return
an empty object.

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options object.
    -   `options.player_id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Player's ID.
    -   `options.prune` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Prune the data. (optional, default `true`)

**Examples**

_Get a player by ID_

```javascript
cornelius.getPlayer({ player_id: '529518' })
 .then(function (data) {
  // do stuff with player info
 })
 .catch(function (error) {
  // handle error
 });
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Pruned player object _or_ MLB `player_info` JSON data.

### cornelius.getStats

Takes a player's ID and returns their stats.

`options` should be an object.
If you provide no player ID, or an incorrect one, `getStats` returns an empty array.
If no year is provided, `getStats` returns all available stats for the given player.

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options object.
    -   `options.player_id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Player's ID.
    -   `options.year` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The season to get stats for.
    -   `options.pitching` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Return pitching stats instead. (optional, default `false`)
    -   `options.prune` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Prune the data. (optional, default `true`)

**Examples**

_Get a player's hitting stats_

```javascript
cornelius.getStats({ player_id: '493316' })
  .then(function (data) {
    // do stuff with stats data
  })
  .catch(function (error) {
    // handle error
  });
```

_Get a player's pitching stats for the 2017 season_

```javascript
cornelius.getStats({ player_id: '592789', pitching: true, year: '2017' })
  .then(function (data) {
    // do stuff with stats data
  })
  .catch(function (error) {
    // handle error
  });
```

Returns **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Array of pruned stats _or_ MLB `sport_[statType]_tm` JSON data.

### cornelius.getRoster

Takes a team's ID and returns their 40 man, or all time roster.

The `season` property is a string of two years which mark the start and end seasons of the
all time rosters you're requesting. Providing a single year will return only that years roster.

Omitting the `season` property will return a team's current 40 man roster.

`options` should be an object.
If you provide no team ID, or an incorrect one, `getRoster` returns an empty array.

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options object.
    -   `options.team_id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Team's ID.
    -   `options.season` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Season to get roster for.
    -   `options.short` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Return full player info with roster. (optional, default `false`)
    -   `options.prune` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Prune the data. (optional, default `true`)

**Examples**

_Get a team's roster by ID_

```javascript
cornelius.getRoster({ team_id: '121' }) // New York Mets
  .then(function (data) {
    // do stuff with roster data
  })
  .catch(function (error) {
    // handle error
  });
```

_Get a team's cumulative roster for the seasons beginning 2016 and ending 2017_

```javascript
cornelius.getRoster({ team_id: '121', season: '2016 2017' })
  .then(function(data) {
    // do stuff with roster data
  })
  .catch(function (error) {
    // handle error
  });
```

Returns **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Pruned roster _or_ MLB `roster_40` \| `roster_team_alltime` JSON data.

## License

MIT

