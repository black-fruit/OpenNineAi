'use strict';

var __decorate = this && this["__decorate"] || function (_0x12f8fa, _0x5365e8, _0x353f18, _0x588f66) {
  var _0x53883e = arguments["length"],
      _0xedc79 = _0x53883e < 3 ? _0x5365e8 : _0x588f66 === null ? _0x588f66 = Object["getOwnPropertyDescriptor"](_0x5365e8, _0x353f18) : _0x588f66,
      _0x25f034;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0xedc79 = Reflect["decorate"](_0x12f8fa, _0x5365e8, _0x353f18, _0x588f66);
  } else {
    for (var _0x419ed5 = _0x12f8fa["length"] - 1; _0x419ed5 >= 0; _0x419ed5--) {
      if (_0x25f034 = _0x12f8fa[_0x419ed5]) {
        _0xedc79 = (_0x53883e < 3 ? _0x25f034(_0xedc79) : _0x53883e > 3 ? _0x25f034(_0x5365e8, _0x353f18, _0xedc79) : _0x25f034(_0x5365e8, _0x353f18)) || _0xedc79;
      }
    }
  }

  _0x53883e > 3 && _0xedc79 && Object["defineProperty"](_0x5365e8, _0x353f18, _0xedc79);
  return _0xedc79;
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["SuperAuthGuard"] = void 0;

const common_1 = require("@nestjs/common"),
      jwtAuth_guard_1 = require('./jwtAuth.guard');

let SuperAuthGuard = class SuperAuthGuard extends jwtAuth_guard_1["JwtAuthGuard"] {
  async ["canActivate"](_0x3ef183) {
    const _0x5a0ff9 = await super["canActivate"](_0x3ef183);

    if (!_0x5a0ff9) {
      return false;
    }

    const _0x382bbe = _0x3ef183["switchToHttp"]()["getRequest"](),
          _0x196b85 = _0x382bbe["user"];

    if (_0x196b85 && _0x196b85['role'] === "super") {
      return true;
    } else {
      throw new common_1["UnauthorizedException"]("非法操作、非超级管理员无权操作！");
    }
  }

};
SuperAuthGuard = __decorate([(0, common_1['Injectable'])()], SuperAuthGuard);
exports["SuperAuthGuard"] = SuperAuthGuard;