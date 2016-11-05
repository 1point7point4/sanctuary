'use strict';

var R = require('ramda');

var eq = require('./utils').eq;
var S = require('..');


describe('C', function() {

  it('is a ternary function', function() {
    eq(typeof S.C, 'function');
    eq(S.C.length, 3);
  });

  it('C(f, x, y) is equivalent to f(y)(x)', function() {
    eq(S.C(S.concat, 'foo', 'bar'), 'barfoo');
    eq(R.map(S.C(S.concat, '!'), ['BAM', 'POW', 'KA-POW']), ['BAM!', 'POW!', 'KA-POW!']);
  });

});
