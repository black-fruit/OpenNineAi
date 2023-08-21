'use strict';

var __decorate = this && this["__decorate"] || function (_0x25a467, _0x3bb684, _0x5f1952, _0x5aae96) {
  var _0x28ab37 = arguments["length"],
      _0xf844c7 = _0x28ab37 < 3 ? _0x3bb684 : _0x5aae96 === null ? _0x5aae96 = Object['getOwnPropertyDescriptor'](_0x3bb684, _0x5f1952) : _0x5aae96,
      _0x28eb4c;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === 'function') {
    _0xf844c7 = Reflect["decorate"](_0x25a467, _0x3bb684, _0x5f1952, _0x5aae96);
  } else {
    for (var _0x3fd7cf = _0x25a467["length"] - 1; _0x3fd7cf >= 0; _0x3fd7cf--) {
      if (_0x28eb4c = _0x25a467[_0x3fd7cf]) {
        _0xf844c7 = (_0x28ab37 < 3 ? _0x28eb4c(_0xf844c7) : _0x28ab37 > 3 ? _0x28eb4c(_0x3bb684, _0x5f1952, _0xf844c7) : _0x28eb4c(_0x3bb684, _0x5f1952)) || _0xf844c7;
      }
    }
  }

  _0x28ab37 > 3 && _0xf844c7 && Object["defineProperty"](_0x3bb684, _0x5f1952, _0xf844c7);
  return _0xf844c7;
},
    __metadata = this && this["__metadata"] || function (_0x337600, _0x460732) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === 'function') {
    return Reflect["metadata"](_0x337600, _0x460732);
  }
},
    __param = this && this["__param"] || function (_0x3725ff, _0x155598) {
  return function (_0x49ba5b, _0x597d69) {
    _0x155598(_0x49ba5b, _0x597d69, _0x3725ff);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AuthController"] = void 0;

const verifyCode_dto_1 = require("./../verification/dto/verifyCode.dto"),
      authLogin_dto_1 = require("./dto/authLogin.dto"),
      common_1 = require('@nestjs/common'),
      jwtAuth_guard_1 = require('../../common/auth/jwtAuth.guard'),
      auth_service_1 = require("./auth.service"),
      swagger_1 = require("@nestjs/swagger"),
      authRegister_dto_1 = require("./dto/authRegister.dto"),
      updatePassword_dto_1 = require("./dto/updatePassword.dto"),
      updatePassByOther_dto_1 = require('./dto/updatePassByOther.dto'),
      sendPhoneCode_dto_1 = require("./dto/sendPhoneCode.dto"),
      userRegisterByPhone_dto_1 = require('./dto/userRegisterByPhone.dto'),
      loginByPhone_dt_1 = require("./dto/loginByPhone.dt");

let AuthController = class AuthController {
  constructor(_0x100dd5) {
    this["authService"] = _0x100dd5;
  }

  async ["register"](_0x4b8c9a, _0x17c5f4) {
    return await this["authService"]["register"](_0x4b8c9a, _0x17c5f4);
  }

  async ["registerByPhone"](_0x242391, _0x442464) {
    return await this["authService"]["registerByPhone"](_0x242391, _0x442464);
  }

  async ['login'](_0x294e8e, _0x9fab39) {
    return this['authService']["login"](_0x294e8e, _0x9fab39);
  }

  async ["loginByPhone"](_0x415d1b, _0x310655) {
    return this['authService']['loginByPhone'](_0x415d1b, _0x310655);
  }

  async ['updatePassword'](_0x41a22d, _0x5c6fd4) {
    return this["authService"]["updatePassword"](_0x41a22d, _0x5c6fd4);
  }

  async ['updatePassByOther'](_0x4d3f1a, _0x23c60c) {
    return this['authService']["updatePassByOther"](_0x4d3f1a, _0x23c60c);
  }

  async ["getInfo"](_0x4dd07b) {
    return this["authService"]["getInfo"](_0x4dd07b);
  }

  async ["activateAccount"](_0x5509e8, _0x42b7a5) {
    return this["authService"]["activateAccount"](_0x5509e8, _0x42b7a5);
  }

  async ["registerSuccess"](_0x45a462) {
    const {
      "username": _0x3b7bd8,
      "id": _0x263d60,
      "email": _0x4815d7,
      "teamName": _0x32cf72,
      "registerSuccessEmailTitle": _0x40724c,
      "registerSuccessEmailTeamName": _0x57af2d,
      "registerSuccessEmaileAppend": _0x495e72
    } = _0x45a462;
    return {
      'username': _0x3b7bd8,
      'id': _0x263d60,
      'email': _0x4815d7,
      'teamName': _0x32cf72,
      'registerSuccessEmailTitle': _0x40724c,
      'registerSuccessEmailTeamName': _0x57af2d,
      'registerSuccessEmaileAppend': _0x495e72
    };
  }

  async ["registerError"](_0xbd4009) {
    const {
      "message": _0x431c3b,
      "teamName": _0x25339,
      "registerFailEmailTitle": _0x411c3f,
      "registerFailEmailTeamName": _0x4782f0
    } = _0xbd4009;
    return {
      'message': _0x431c3b,
      'teamName': _0x25339,
      'registerFailEmailTitle': _0x411c3f,
      'registerFailEmailTeamName': _0x4782f0
    };
  }

  async ["captcha"](_0xf70703) {
    return this["authService"]['captcha'](_0xf70703);
  }

  async ['sendPhoneCode'](_0x5f5b4c) {
    return this['authService']["sendPhoneCode"](_0x5f5b4c);
  }

};

__decorate([(0, common_1["Post"])('register'), (0, swagger_1["ApiOperation"])({
  'summary': "用户注册"
}), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [authRegister_dto_1['UserRegisterDto'], Object]), __metadata("design:returntype", Promise)], AuthController['prototype'], "register", null);

__decorate([(0, common_1['Post'])("registerByPhone"), (0, swagger_1["ApiOperation"])({
  'summary': "用户通过手机号注册"
}), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1["Req"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [userRegisterByPhone_dto_1["UserRegisterByPhoneDto"], Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], "registerByPhone", null);

__decorate([(0, common_1["Post"])("login"), (0, swagger_1['ApiOperation'])({
  'summary': "用户登录"
}), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [authLogin_dto_1["UserLoginDto"], Object]), __metadata("design:returntype", Promise)], AuthController['prototype'], "login", null);

__decorate([(0, common_1["Post"])('loginByPhone'), (0, swagger_1["ApiOperation"])({
  'summary': '用户登录'
}), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [loginByPhone_dt_1['LoginByPhoneDto'], Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], "loginByPhone", null);

__decorate([(0, common_1["Post"])("updatePassword"), (0, swagger_1["ApiOperation"])({
  'summary': "用户更改密码"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, updatePassword_dto_1["UpdatePasswordDto"]]), __metadata("design:returntype", Promise)], AuthController["prototype"], "updatePassword", null);

__decorate([(0, common_1["Post"])("updatePassByOther"), (0, swagger_1["ApiOperation"])({
  'summary': "用户更改密码"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, updatePassByOther_dto_1["UpdatePassByOtherDto"]]), __metadata('design:returntype', Promise)], AuthController["prototype"], "updatePassByOther", null);

__decorate([(0, common_1["Get"])("getInfo"), (0, swagger_1["ApiOperation"])({
  'summary': "获取用户个人信息"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], "getInfo", null);

__decorate([(0, common_1["Get"])("activateAccount"), (0, swagger_1['ApiOperation'])({
  'summary': "账户激活"
}), __param(0, (0, common_1["Query"])()), __param(1, (0, common_1["Res"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [verifyCode_dto_1["VerifyCodeDto"], Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], "activateAccount", null);

__decorate([(0, common_1["Get"])("registerSuccess"), (0, swagger_1["ApiOperation"])({
  'summary': "注册成功页面"
}), (0, common_1["Render"])("registerSuccess"), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], "registerSuccess", null);

__decorate([(0, common_1['Get'])("registerError"), (0, swagger_1["ApiOperation"])({
  'summary': "注册失败页面"
}), (0, common_1["Render"])('registerError'), __param(0, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], 'registerError', null);

__decorate([(0, common_1["Post"])("captcha"), (0, swagger_1["ApiOperation"])({
  'summary': "获取一个图形验证码"
}), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], AuthController["prototype"], "captcha", null);

__decorate([(0, common_1["Post"])("sendPhoneCode"), (0, swagger_1["ApiOperation"])({
  'summary': "发送手机验证码"
}), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [sendPhoneCode_dto_1["SendPhoneCodeDto"]]), __metadata("design:returntype", Promise)], AuthController["prototype"], 'sendPhoneCode', null);

AuthController = __decorate([(0, swagger_1["ApiTags"])('auth'), (0, common_1['Controller'])("auth"), __metadata("design:paramtypes", [auth_service_1['AuthService']])], AuthController);
exports['AuthController'] = AuthController;