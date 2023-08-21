'use strict';

var __decorate = this && this["__decorate"] || function (_0x17df28, _0x2aa45a, _0x3aa31f, _0x4e6933) {
  var _0x231f8b = arguments['length'],
      _0x4034ad = _0x231f8b < 3 ? _0x2aa45a : _0x4e6933 === null ? _0x4e6933 = Object["getOwnPropertyDescriptor"](_0x2aa45a, _0x3aa31f) : _0x4e6933,
      _0x411c78;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x4034ad = Reflect["decorate"](_0x17df28, _0x2aa45a, _0x3aa31f, _0x4e6933);
  } else {
    for (var _0x2f5a = _0x17df28["length"] - 1; _0x2f5a >= 0; _0x2f5a--) {
      if (_0x411c78 = _0x17df28[_0x2f5a]) {
        _0x4034ad = (_0x231f8b < 3 ? _0x411c78(_0x4034ad) : _0x231f8b > 3 ? _0x411c78(_0x2aa45a, _0x3aa31f, _0x4034ad) : _0x411c78(_0x2aa45a, _0x3aa31f)) || _0x4034ad;
      }
    }
  }

  _0x231f8b > 3 && _0x4034ad && Object["defineProperty"](_0x2aa45a, _0x3aa31f, _0x4034ad);
  return _0x4034ad;
},
    __metadata = this && this['__metadata'] || function (_0x1036e3, _0x146a9e) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x1036e3, _0x146a9e);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['JwtStrategy'] = void 0;

const nestjs_config_1 = require("nestjs-config"),
      passport_jwt_1 = require('passport-jwt'),
      passport_1 = require("@nestjs/passport"),
      common_1 = require('@nestjs/common');

let JwtStrategy = class JwtStrategy extends (0, passport_1["PassportStrategy"])(passport_jwt_1['Strategy']) {
  constructor(_0x38d166) {
    super({
      'jwtFromRequest': passport_jwt_1["ExtractJwt"]["fromAuthHeaderAsBearerToken"](),
      'secretOrKey': _0x38d166['get']("jwt")['secret']
    });
    this["configService"] = _0x38d166;
  }

  async ["validate"](_0x25cc50) {
    return _0x25cc50;
  }

};
JwtStrategy = __decorate([(0, common_1["Injectable"])(), __metadata('design:paramtypes', [nestjs_config_1['ConfigService']])], JwtStrategy);
exports["JwtStrategy"] = JwtStrategy;