'use strict';

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["createRandomCode"] = void 0;

function createRandomCode() {
  const _0x9df503 = 100000;
  return Math["floor"](Math["random"]() * 900000 + _0x9df503);
}

exports["createRandomCode"] = createRandomCode;