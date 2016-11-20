'use strict';

var S = require('..');

var eq = require('./internal/eq');
var throws = require('./internal/throws');


test('sub', function() {

  eq(typeof S.sub, 'function');
  eq(S.sub.length, 2);

  throws(function() { S.sub('xxx', 1); },
         TypeError,
         'Invalid value\n' +
         '\n' +
         'sub :: FiniteNumber -> FiniteNumber -> FiniteNumber\n' +
         '       ^^^^^^^^^^^^\n' +
         '            1\n' +
         '\n' +
         '1)  "xxx" :: String\n' +
         '\n' +
         'The value at position 1 is not a member of ‘FiniteNumber’.\n');

  throws(function() { S.sub(1, 'xxx'); },
         TypeError,
         'Invalid value\n' +
         '\n' +
         'sub :: FiniteNumber -> FiniteNumber -> FiniteNumber\n' +
         '                       ^^^^^^^^^^^^\n' +
         '                            1\n' +
         '\n' +
         '1)  "xxx" :: String\n' +
         '\n' +
         'The value at position 1 is not a member of ‘FiniteNumber’.\n');

  throws(function() { S.sub(1, Infinity); },
         TypeError,
         'Invalid value\n' +
         '\n' +
         'sub :: FiniteNumber -> FiniteNumber -> FiniteNumber\n' +
         '                       ^^^^^^^^^^^^\n' +
         '                            1\n' +
         '\n' +
         '1)  Infinity :: Number, ValidNumber\n' +
         '\n' +
         'The value at position 1 is not a member of ‘FiniteNumber’.\n');

  throws(function() { S.sub(1, -Infinity); },
         TypeError,
         'Invalid value\n' +
         '\n' +
         'sub :: FiniteNumber -> FiniteNumber -> FiniteNumber\n' +
         '                       ^^^^^^^^^^^^\n' +
         '                            1\n' +
         '\n' +
         '1)  -Infinity :: Number, ValidNumber\n' +
         '\n' +
         'The value at position 1 is not a member of ‘FiniteNumber’.\n');

  eq(S.sub(1, 1), 0);
  eq(S.sub(-1, -1), 0);
  eq(S.sub(7.5, 2), 5.5);
  eq(S.sub(-7.5, -2), -5.5);

});
