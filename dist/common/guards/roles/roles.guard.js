'use strict';

var __decorate = this && this["__decorate"] || function (_0x54902, _0x2f4e26, _0x404542, _0x2c3535) {
  var _0x195eeb = arguments["length"],
      _0x112308 = _0x195eeb < 3 ? _0x2f4e26 : _0x2c3535 === null ? _0x2c3535 = Object["getOwnPropertyDescriptor"](_0x2f4e26, _0x404542) : _0x2c3535,
      _0x73f7f0;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x112308 = Reflect["decorate"](_0x54902, _0x2f4e26, _0x404542, _0x2c3535);
  } else {
    for (var _0x289692 = _0x54902["length"] - 1; _0x289692 >= 0; _0x289692--) {
      if (_0x73f7f0 = _0x54902[_0x289692]) {
        _0x112308 = (_0x195eeb < 3 ? _0x73f7f0(_0x112308) : _0x195eeb > 3 ? _0x73f7f0(_0x2f4e26, _0x404542, _0x112308) : _0x73f7f0(_0x2f4e26, _0x404542)) || _0x112308;
      }
    }
  }

  _0x195eeb > 3 && _0x112308 && Object['defineProperty'](_0x2f4e26, _0x404542, _0x112308);
  return _0x112308;
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["RolesGuard"] = void 0;

const common_1 = require("@nestjs/common");

let RolesGuard = class RolesGuard {
  ["canActivate"](_0x5acac9) {
    return true;
  }

};
RolesGuard = __decorate([(0, common_1['Injectable'])()], RolesGuard);
exports["RolesGuard"] = RolesGuard;