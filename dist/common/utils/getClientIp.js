'use strict';

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["getClientIp"] = void 0;

function getClientIp(_0x59f21f) {
  let _0x473849 = '';
  const _0x5d8ad0 = ['X-Client-IP', 'X-Real-IP', "X-Forwarded-For", "CF-Connecting-IP", "True-Client-IP", "X-Cluster-Client-IP", "Proxy-Client-IP", "WL-Proxy-Client-IP", 'HTTP_CLIENT_IP', "HTTP_X_FORWARDED_FOR"];

  for (const _0x3cf176 of _0x5d8ad0) {
    const _0x403d17 = _0x59f21f["headers"][_0x3cf176];

    if (_0x403d17 && typeof _0x403d17 === "string") {
      const _0x4f31fa = _0x403d17["split"](',');

      _0x473849 = _0x4f31fa[0]['trim']();
      break;
    }
  }

  !_0x473849 && (_0x473849 = _0x59f21f["connection"]["remoteAddress"] || '');

  if (_0x473849 && _0x473849['includes']('::')) {
    const _0x5be915 = /^(::1|fe80(:1)?::1(%.*)?)$/i["test"](_0x473849);

    if (_0x5be915) {
      _0x473849 = '';
    } else {
      _0x473849["includes"]("::ffff:") && (_0x473849 = _0x473849["split"](':')["pop"]() || '');
    }
  }

  (!_0x473849 || !/\d+\.\d+\.\d+\.\d+/["test"](_0x473849)) && (_0x473849 = '');
  return _0x473849;
}

exports["getClientIp"] = getClientIp;