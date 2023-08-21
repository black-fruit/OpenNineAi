'use strict';

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports['hideString'] = void 0;

function hideString(_0x6bcb1a, _0x161230) {
  const _0x259f2d = _0x6bcb1a["length"],
        _0x94ed92 = _0x6bcb1a["slice"](0, (_0x259f2d - 10) / 2),
        _0x29666c = _0x6bcb1a["slice"]((_0x259f2d + 10) / 2, _0x259f2d),
        _0x53fc91 = '*'["repeat"](10);

  if (_0x161230) {
    return "**********" + _0x161230 + "**********";
  }

  return '' + _0x94ed92 + _0x53fc91 + _0x29666c;
}

exports["hideString"] = hideString;