'use strict';

var __decorate = this && this['__decorate'] || function (_0x202c56, _0x2ce5c7, _0xf6859f, _0x234736) {
  var _0x30dda6 = arguments['length'],
      _0x32d794 = _0x30dda6 < 3 ? _0x2ce5c7 : _0x234736 === null ? _0x234736 = Object["getOwnPropertyDescriptor"](_0x2ce5c7, _0xf6859f) : _0x234736,
      _0x5a7f73;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x32d794 = Reflect["decorate"](_0x202c56, _0x2ce5c7, _0xf6859f, _0x234736);
  } else {
    for (var _0x545764 = _0x202c56["length"] - 1; _0x545764 >= 0; _0x545764--) {
      if (_0x5a7f73 = _0x202c56[_0x545764]) {
        _0x32d794 = (_0x30dda6 < 3 ? _0x5a7f73(_0x32d794) : _0x30dda6 > 3 ? _0x5a7f73(_0x2ce5c7, _0xf6859f, _0x32d794) : _0x5a7f73(_0x2ce5c7, _0xf6859f)) || _0x32d794;
      }
    }
  }

  _0x30dda6 > 3 && _0x32d794 && Object["defineProperty"](_0x2ce5c7, _0xf6859f, _0x32d794);
  return _0x32d794;
},
    __metadata = this && this["__metadata"] || function (_0x46ac47, _0x3ba1d0) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x46ac47, _0x3ba1d0);
  }
},
    __param = this && this["__param"] || function (_0x23e8d6, _0x5c6964) {
  return function (_0x481b8b, _0x6f1c21) {
    _0x5c6964(_0x481b8b, _0x6f1c21, _0x23e8d6);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SigninController"] = void 0;

const common_1 = require('@nestjs/common'),
      signin_service_1 = require("./signin.service"),
      swagger_1 = require("@nestjs/swagger"),
      jwtAuth_guard_1 = require('../../common/auth/jwtAuth.guard');

let SigninController = class SigninController {
  constructor(_0x3c31e6) {
    this['signinService'] = _0x3c31e6;
  }

  async ['sign'](_0x2cf831) {
    return await this['signinService']["sign"](_0x2cf831);
  }

  async ["getSigninLog"](_0xc317e1) {
    return await this["signinService"]['getSigninLog'](_0xc317e1);
  }

};

__decorate([(0, common_1["Post"])("sign"), (0, swagger_1["ApiOperation"])({
  'summary': '用户签到'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1['JwtAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata('design:returntype', Promise)], SigninController["prototype"], "sign", null);

__decorate([(0, common_1['Get'])("signinLog"), (0, swagger_1['ApiOperation'])({
  'summary': "获取用户签到信息"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Req'])()), __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata("design:returntype", Promise)], SigninController['prototype'], "getSigninLog", null);

SigninController = __decorate([(0, swagger_1['ApiTags'])("signIn"), (0, common_1["Controller"])("signin"), __metadata("design:paramtypes", [signin_service_1['SigninService']])], SigninController);
exports["SigninController"] = SigninController;