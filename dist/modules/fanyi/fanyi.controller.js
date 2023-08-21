'use strict';

var __decorate = this && this["__decorate"] || function (_0x4076a9, _0x106f21, _0x470e44, _0x19a0b6) {
  var _0x5d265e = arguments['length'],
      _0x4403bd = _0x5d265e < 3 ? _0x106f21 : _0x19a0b6 === null ? _0x19a0b6 = Object["getOwnPropertyDescriptor"](_0x106f21, _0x470e44) : _0x19a0b6,
      _0x219b7a;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x4403bd = Reflect["decorate"](_0x4076a9, _0x106f21, _0x470e44, _0x19a0b6);
  } else {
    for (var _0x3edc06 = _0x4076a9['length'] - 1; _0x3edc06 >= 0; _0x3edc06--) {
      if (_0x219b7a = _0x4076a9[_0x3edc06]) {
        _0x4403bd = (_0x5d265e < 3 ? _0x219b7a(_0x4403bd) : _0x5d265e > 3 ? _0x219b7a(_0x106f21, _0x470e44, _0x4403bd) : _0x219b7a(_0x106f21, _0x470e44)) || _0x4403bd;
      }
    }
  }

  _0x5d265e > 3 && _0x4403bd && Object["defineProperty"](_0x106f21, _0x470e44, _0x4403bd);
  return _0x4403bd;
},
    __metadata = this && this['__metadata'] || function (_0x11df9b, _0x4ef5fb) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x11df9b, _0x4ef5fb);
  }
},
    __param = this && this["__param"] || function (_0x1dab4c, _0x179e9b) {
  return function (_0x2f4eb7, _0x422881) {
    _0x179e9b(_0x2f4eb7, _0x422881, _0x1dab4c);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["FanyiController"] = void 0;

const common_1 = require("@nestjs/common"),
      fanyi_service_1 = require("./fanyi.service");

let FanyiController = class FanyiController {
  constructor(_0x363a68) {
    this["fanyiService"] = _0x363a68;
  }

  ["convertToEnglish"](_0x4054e7) {
    return this["fanyiService"]["convertToEnglish"](_0x4054e7);
  }

};

__decorate([(0, common_1["Get"])("translate"), __param(0, (0, common_1["Query"])("text")), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata('design:returntype', void 0)], FanyiController["prototype"], "convertToEnglish", null);

FanyiController = __decorate([(0, common_1['Controller'])("fanyi"), __metadata("design:paramtypes", [fanyi_service_1["FanyiService"]])], FanyiController);
exports["FanyiController"] = FanyiController;