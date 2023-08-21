'use strict';

var __decorate = this && this["__decorate"] || function (_0x3d9bfc, _0x17b172, _0x1650be, _0x10c2b2) {
  var _0x123814 = arguments["length"],
      _0x40c3df = _0x123814 < 3 ? _0x17b172 : _0x10c2b2 === null ? _0x10c2b2 = Object["getOwnPropertyDescriptor"](_0x17b172, _0x1650be) : _0x10c2b2,
      _0x29e843;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x40c3df = Reflect["decorate"](_0x3d9bfc, _0x17b172, _0x1650be, _0x10c2b2);
  } else {
    for (var _0x4d294e = _0x3d9bfc["length"] - 1; _0x4d294e >= 0; _0x4d294e--) {
      if (_0x29e843 = _0x3d9bfc[_0x4d294e]) {
        _0x40c3df = (_0x123814 < 3 ? _0x29e843(_0x40c3df) : _0x123814 > 3 ? _0x29e843(_0x17b172, _0x1650be, _0x40c3df) : _0x29e843(_0x17b172, _0x1650be)) || _0x40c3df;
      }
    }
  }

  _0x123814 > 3 && _0x40c3df && Object["defineProperty"](_0x17b172, _0x1650be, _0x40c3df);
  return _0x40c3df;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["FanyiModule"] = void 0;

const common_1 = require("@nestjs/common"),
      fanyi_service_1 = require("./fanyi.service"),
      fanyi_controller_1 = require("./fanyi.controller");

let FanyiModule = class FanyiModule {};
FanyiModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'providers': [fanyi_service_1["FanyiService"]],
  'controllers': [fanyi_controller_1["FanyiController"]],
  'exports': [fanyi_service_1['FanyiService']]
})], FanyiModule);
exports["FanyiModule"] = FanyiModule;