'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['selectKeyWithWeight'] = void 0;

function selectKeyWithWeight(_0x55a212) {
  if (_0x55a212["length"] === 0) {
    return undefined;
  }

  const _0xfe3e30 = _0x55a212['reduce']((_0x4dc42b, _0x13e96c) => _0x4dc42b + _0x13e96c["weight"], 0);

  let _0x664555 = Math["random"]() * _0xfe3e30;

  for (const _0x55fd1c of _0x55a212) {
    _0x664555 -= _0x55fd1c['weight'];

    if (_0x664555 < 0) {
      return _0x55fd1c;
    }
  }

  return _0x55a212[_0x55a212["length"] - 1];
}

exports["selectKeyWithWeight"] = selectKeyWithWeight;