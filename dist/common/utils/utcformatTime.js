'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['utcToShanghaiTime'] = void 0;

function utcToShanghaiTime(_0x14e3dd, _0x3359ac = "YYYY/MM/DD hh:mm:ss") {
  const _0x5b6d4b = new Date(_0x14e3dd),
        _0x15bc61 = _0x5b6d4b["getTime"]() + 28800000,
        _0x4ba95c = new Date(_0x15bc61);

  let _0x1e9ebb = _0x3359ac['replace']('YYYY', _0x4ba95c["getFullYear"]()["toString"]());

  _0x1e9ebb = _0x1e9ebb["replace"]('MM', ('0' + (_0x4ba95c["getMonth"]() + 1))["slice"](-2));
  _0x1e9ebb = _0x1e9ebb["replace"]('DD', ('0' + _0x4ba95c['getDate']())["slice"](-2));
  _0x1e9ebb = _0x1e9ebb["replace"]('hh', ('0' + _0x4ba95c["getHours"]())["slice"](-2));
  _0x1e9ebb = _0x1e9ebb['replace']('mm', ('0' + _0x4ba95c["getMinutes"]())["slice"](-2));
  _0x1e9ebb = _0x1e9ebb["replace"]('ss', ('0' + _0x4ba95c["getSeconds"]())["slice"](-2));
  return _0x1e9ebb;
}

exports["utcToShanghaiTime"] = utcToShanghaiTime;