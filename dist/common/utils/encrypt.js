'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['atob'] = void 0;

function atob(_0x33842a) {
  return Buffer["from"](_0x33842a, 'base64')["toString"]("utf-8");
}

exports["atob"] = atob;