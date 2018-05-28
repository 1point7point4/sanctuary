'use strict';

var S = require ('..');

var eq = require ('./internal/eq');


test ('id', function() {

  eq (typeof S.id) ('function');
  eq (S.id.length) (1);
  eq (S.show (S.id)) ('id :: Category c => TypeRep c -> c');

  eq (S.id (Function) (42)) (42);

});
