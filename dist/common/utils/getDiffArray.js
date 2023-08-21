'use strict';

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["getDiffArray"] = void 0;

function getDiffArray(_0x35a253, _0x24a8cf, _0x419914) {
  const _0x5b3983 = Array["from"]({
    'length': _0x35a253
  }, (_0x14cfa4, _0x5a7b81) => _0x5a7b81 + 1),
        _0x19fe5c = Array["from"]({
    'length': _0x24a8cf
  }, (_0x322db8, _0x2991b8) => _0x2991b8 + 1),
        _0x33119a = [];

  for (let _0x255129 = 0; _0x255129 < _0x5b3983["length"]; _0x255129++) {
    !_0x19fe5c["includes"](_0x5b3983[_0x255129]) && _0x33119a['push']('' + _0x419914 + _0x5b3983[_0x255129]);
  }

  return _0x33119a;
}

exports['getDiffArray'] = getDiffArray;