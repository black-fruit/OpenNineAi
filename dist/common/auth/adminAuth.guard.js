'use strict';

var __decorate = this && this["__decorate"] || function (_0x10370a, _0x20f532, _0x32da70, _0x57f113) {
  var _0x2fde62 = arguments["length"],
      _0x298fbc = _0x2fde62 < 3 ? _0x20f532 : _0x57f113 === null ? _0x57f113 = Object["getOwnPropertyDescriptor"](_0x20f532, _0x32da70) : _0x57f113,
      _0x288ed4;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x298fbc = Reflect['decorate'](_0x10370a, _0x20f532, _0x32da70, _0x57f113);
  } else {
    for (var _0x569e26 = _0x10370a["length"] - 1; _0x569e26 >= 0; _0x569e26--) {
      if (_0x288ed4 = _0x10370a[_0x569e26]) {
        _0x298fbc = (_0x2fde62 < 3 ? _0x288ed4(_0x298fbc) : _0x2fde62 > 3 ? _0x288ed4(_0x20f532, _0x32da70, _0x298fbc) : _0x288ed4(_0x20f532, _0x32da70)) || _0x298fbc;
      }
    }
  }

  _0x2fde62 > 3 && _0x298fbc && Object["defineProperty"](_0x20f532, _0x32da70, _0x298fbc);
  return _0x298fbc;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['AdminAuthGuard'] = void 0;

const common_1 = require("@nestjs/common"),
      jwtAuth_guard_1 = require("./jwtAuth.guard");

let AdminAuthGuard = class AdminAuthGuard extends jwtAuth_guard_1["JwtAuthGuard"] {
  async ["canActivate"](_0x426932) {
    const _0x284823 = await super["canActivate"](_0x426932);

    if (!_0x284823) {
      return false;
    }

    const _0x42c164 = _0x426932['switchToHttp']()['getRequest'](),
          _0xc9698c = _0x42c164['user'];

    if (_0xc9698c && ["admin", "super"]["includes"](_0xc9698c["role"])) {
      return true;
    } else {
      throw new common_1["UnauthorizedException"]("非法操作、您的权限等级不足、无法执行当前请求！");
    }
  }

};
AdminAuthGuard = __decorate([(0, common_1["Injectable"])()], AdminAuthGuard);
exports["AdminAuthGuard"] = AdminAuthGuard;