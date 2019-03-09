'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('maybeToNullable', () => {

  eq (typeof S.maybeToNullable) ('function');
  eq (S.maybeToNullable.length) (1);
  eq (S.show (S.maybeToNullable)) ('maybeToNullable :: Maybe a -> Nullable a');

  eq (S.maybeToNullable (S.Nothing)) (null);
  eq (S.maybeToNullable (S.Just (42))) (42);

});
