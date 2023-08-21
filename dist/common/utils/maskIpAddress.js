'use strict';

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["maskIpAddress"] = void 0;

function maskIpAddress(_0x21f89f) {
  if (!_0x21f89f) {
    return '';
  }

  const _0x5b0d4a = _0x21f89f["split"]('.');

  _0x5b0d4a[2] = '***';
  return _0x5b0d4a["join"]('.');
}

exports['maskIpAddress'] = maskIpAddress;