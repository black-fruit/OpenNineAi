'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["maskCrami"] = void 0;

function maskCrami(_0x4f5219) {
  if (_0x4f5219["length"] !== 16) {
    throw new Error("Invalid input");
  }

  const _0x5d1f37 = _0x4f5219['substring'](0, 6) + "****" + _0x4f5219["substring"](10);

  return _0x5d1f37;
}

exports["maskCrami"] = maskCrami;