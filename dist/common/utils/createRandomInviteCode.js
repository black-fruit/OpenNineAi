'use strict';

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["generateRandomString"] = void 0;

function generateRandomString() {
  const _0x45a766 = 10,
        _0x47adc2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let _0x22fc6d = '';

  for (let _0x424ffe = 0; _0x424ffe < _0x45a766; _0x424ffe++) {
    const _0x110037 = Math['floor'](Math["random"]() * _0x47adc2['length']);

    _0x22fc6d += _0x47adc2["charAt"](_0x110037);
  }

  return _0x22fc6d;
}

exports['generateRandomString'] = generateRandomString;