'use strict';

var __decorate = this && this["__decorate"] || function (_0x1d31aa, _0xc14dea, _0x303d6b, _0x4f0c7f) {
  var _0x1198bf = arguments["length"],
      _0x553041 = _0x1198bf < 3 ? _0xc14dea : _0x4f0c7f === null ? _0x4f0c7f = Object['getOwnPropertyDescriptor'](_0xc14dea, _0x303d6b) : _0x4f0c7f,
      _0x2cb744;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x553041 = Reflect['decorate'](_0x1d31aa, _0xc14dea, _0x303d6b, _0x4f0c7f);
  } else {
    for (var _0x23777c = _0x1d31aa["length"] - 1; _0x23777c >= 0; _0x23777c--) {
      if (_0x2cb744 = _0x1d31aa[_0x23777c]) {
        _0x553041 = (_0x1198bf < 3 ? _0x2cb744(_0x553041) : _0x1198bf > 3 ? _0x2cb744(_0xc14dea, _0x303d6b, _0x553041) : _0x2cb744(_0xc14dea, _0x303d6b)) || _0x553041;
      }
    }
  }

  _0x1198bf > 3 && _0x553041 && Object["defineProperty"](_0xc14dea, _0x303d6b, _0x553041);
  return _0x553041;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['DrawModule'] = void 0;

const common_1 = require("@nestjs/common"),
      draw_controller_1 = require("./draw.controller"),
      draw_service_1 = require("./draw.service");

let DrawModule = class DrawModule {};
DrawModule = __decorate([(0, common_1["Module"])({
  'controllers': [draw_controller_1["DrawController"]],
  'providers': [draw_service_1["DrawService"]]
})], DrawModule);
exports["DrawModule"] = DrawModule;