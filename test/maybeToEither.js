'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('maybeToEither', () => {

  eq (typeof S.maybeToEither) ('function');
  eq (S.maybeToEither.length) (1);
  eq (S.show (S.maybeToEither)) ('maybeToEither :: a -> Maybe b -> Either a b');

  eq (S.maybeToEither ('error msg') (S.Nothing)) (S.Left ('error msg'));
  eq (S.maybeToEither ('error msg') (S.Just (42))) (S.Right (42));

});
