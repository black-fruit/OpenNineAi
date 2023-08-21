'use strict';

var __decorate = this && this["__decorate"] || function (_0x1f8dd6, _0x132fdb, _0x4c61ec, _0x2a3eb3) {
  var _0xf7b781 = arguments["length"],
      _0x24bb52 = _0xf7b781 < 3 ? _0x132fdb : _0x2a3eb3 === null ? _0x2a3eb3 = Object["getOwnPropertyDescriptor"](_0x132fdb, _0x4c61ec) : _0x2a3eb3,
      _0x3d3b59;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x24bb52 = Reflect["decorate"](_0x1f8dd6, _0x132fdb, _0x4c61ec, _0x2a3eb3);
  } else {
    for (var _0x3873e9 = _0x1f8dd6["length"] - 1; _0x3873e9 >= 0; _0x3873e9--) {
      if (_0x3d3b59 = _0x1f8dd6[_0x3873e9]) {
        _0x24bb52 = (_0xf7b781 < 3 ? _0x3d3b59(_0x24bb52) : _0xf7b781 > 3 ? _0x3d3b59(_0x132fdb, _0x4c61ec, _0x24bb52) : _0x3d3b59(_0x132fdb, _0x4c61ec)) || _0x24bb52;
      }
    }
  }

  _0xf7b781 > 3 && _0x24bb52 && Object['defineProperty'](_0x132fdb, _0x4c61ec, _0x24bb52);
  return _0x24bb52;
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["OfficialModule"] = void 0;

const common_1 = require("@nestjs/common"),
      official_controller_1 = require("./official.controller"),
      official_service_1 = require("./official.service");

let OfficialModule = class OfficialModule {};
OfficialModule = __decorate([(0, common_1["Global"])(), (0, common_1['Module'])({
  'controllers': [official_controller_1["OfficialController"]],
  'providers': [official_service_1["OfficialService"]],
  'exports': [official_service_1['OfficialService']]
})], OfficialModule);
exports["OfficialModule"] = OfficialModule;