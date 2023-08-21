'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['createRandomNonceStr'] = void 0;

function createRandomNonceStr(_0xc516fd) {
  const _0x21e302 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let _0x350a2b = '';

  for (let _0x13faf0 = 0; _0x13faf0 < _0xc516fd; _0x13faf0++) {
    _0x350a2b += _0x21e302["charAt"](parseInt((Math['random']() * _0x21e302["length"])['toFixed'](0), 10));
  }

  return _0x350a2b;
}

exports["createRandomNonceStr"] = createRandomNonceStr;