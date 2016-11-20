'use strict';

var S = require('..');

var eq = require('./internal/eq');
var throws = require('./internal/throws');


test('fromMaybe', function() {

  eq(typeof S.fromMaybe, 'function');
  eq(S.fromMaybe.length, 2);

  throws(function() { S.fromMaybe(0, [1, 2, 3]); },
         TypeError,
         'Invalid value\n' +
         '\n' +
         'fromMaybe :: a -> Maybe a -> a\n' +
         '                  ^^^^^^^\n' +
         '                     1\n' +
         '\n' +
         '1)  [1, 2, 3] :: Array Number, Array FiniteNumber, Array NonZeroFiniteNumber, Array Integer, Array ValidNumber\n' +
         '\n' +
         'The value at position 1 is not a member of ‘Maybe a’.\n');

  eq(S.fromMaybe(0, S.Nothing), 0);
  eq(S.fromMaybe(0, S.Just(42)), 42);

});
