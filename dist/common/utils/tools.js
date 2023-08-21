'use strict';

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['importDynamic'] = exports["isNotEmptyString"] = void 0;

function isNotEmptyString(_0x7d0b5f) {
  return typeof _0x7d0b5f === "string" && _0x7d0b5f['length'] > 0;
}

exports["isNotEmptyString"] = isNotEmptyString;
exports['importDynamic'] = new Function("modulePath", "return import(modulePath)");