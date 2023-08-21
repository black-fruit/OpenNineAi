'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["generateCramiCode"] = void 0;

const uuid_1 = require("uuid");

function generateCramiCode() {
  const _0x460301 = (0, uuid_1['v4'])()["replace"](/-/g, '')["slice"](0, 16);

  return _0x460301;
}

exports["generateCramiCode"] = generateCramiCode;