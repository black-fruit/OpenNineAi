'use strict';

var __decorate = this && this["__decorate"] || function (_0xbe7f7, _0x749a4d, _0x10e785, _0x2b5f70) {
  var _0x2b61a2 = arguments["length"],
      _0x5e645a = _0x2b61a2 < 3 ? _0x749a4d : _0x2b5f70 === null ? _0x2b5f70 = Object["getOwnPropertyDescriptor"](_0x749a4d, _0x10e785) : _0x2b5f70,
      _0x400393;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5e645a = Reflect["decorate"](_0xbe7f7, _0x749a4d, _0x10e785, _0x2b5f70);
  } else {
    for (var _0x5f26fe = _0xbe7f7['length'] - 1; _0x5f26fe >= 0; _0x5f26fe--) {
      if (_0x400393 = _0xbe7f7[_0x5f26fe]) {
        _0x5e645a = (_0x2b61a2 < 3 ? _0x400393(_0x5e645a) : _0x2b61a2 > 3 ? _0x400393(_0x749a4d, _0x10e785, _0x5e645a) : _0x400393(_0x749a4d, _0x10e785)) || _0x5e645a;
      }
    }
  }

  _0x2b61a2 > 3 && _0x5e645a && Object["defineProperty"](_0x749a4d, _0x10e785, _0x5e645a);
  return _0x5e645a;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SigninModule"] = void 0;

const common_1 = require('@nestjs/common'),
      signin_controller_1 = require('./signin.controller'),
      signin_service_1 = require("./signin.service"),
      typeorm_1 = require("@nestjs/typeorm"),
      signIn_entity_1 = require("./signIn.entity"),
      user_entity_1 = require("../user/user.entity");

let SigninModule = class SigninModule {};
SigninModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]['forFeature']([signIn_entity_1["SigninEntity"], user_entity_1["UserEntity"]])],
  'controllers': [signin_controller_1["SigninController"]],
  'providers': [signin_service_1["SigninService"]],
  'exports': [signin_service_1["SigninService"]]
})], SigninModule);
exports['SigninModule'] = SigninModule;