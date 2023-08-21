'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['maskEmail'] = void 0;

function maskEmail(_0xa1dbeb) {
  if (!_0xa1dbeb) {
    return '';
  }

  const _0x1f7db3 = _0xa1dbeb["indexOf"]('@');

  if (_0x1f7db3 <= 1) {
    return _0xa1dbeb;
  }

  const _0x11c308 = _0xa1dbeb["substring"](0, _0x1f7db3 - 1),
        _0x584258 = _0xa1dbeb["substring"](_0x1f7db3),
        _0xe7a2da = '*'['repeat'](_0x11c308["length"] - 1);

  return '' + _0x11c308["charAt"](0) + _0xe7a2da + _0xa1dbeb["charAt"](_0x1f7db3 - 1) + _0x584258;
}

exports["maskEmail"] = maskEmail;