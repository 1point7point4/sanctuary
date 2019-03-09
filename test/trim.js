'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('trim', () => {

  eq (typeof S.trim) ('function');
  eq (S.trim.length) (1);
  eq (S.show (S.trim)) ('trim :: String -> String');

  eq (S.trim ('')) ('');
  eq (S.trim (' ')) ('');
  eq (S.trim ('x')) ('x');
  eq (S.trim (' x')) ('x');
  eq (S.trim ('x ')) ('x');
  eq (S.trim (' x ')) ('x');
  eq (S.trim ('\n\r\t x \n\r\t x \n\r\t')) ('x \n\r\t x');

});
