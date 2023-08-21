'use strict';

var __decorate = this && this["__decorate"] || function (_0x3cac9d, _0x1bbd41, _0x6d40ae, _0x4bcb5e) {
  var _0x57488f = arguments["length"],
      _0x5b060a = _0x57488f < 3 ? _0x1bbd41 : _0x4bcb5e === null ? _0x4bcb5e = Object["getOwnPropertyDescriptor"](_0x1bbd41, _0x6d40ae) : _0x4bcb5e,
      _0x5c5a0a;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x5b060a = Reflect["decorate"](_0x3cac9d, _0x1bbd41, _0x6d40ae, _0x4bcb5e);
  } else {
    for (var _0x5765c0 = _0x3cac9d['length'] - 1; _0x5765c0 >= 0; _0x5765c0--) {
      if (_0x5c5a0a = _0x3cac9d[_0x5765c0]) {
        _0x5b060a = (_0x57488f < 3 ? _0x5c5a0a(_0x5b060a) : _0x57488f > 3 ? _0x5c5a0a(_0x1bbd41, _0x6d40ae, _0x5b060a) : _0x5c5a0a(_0x1bbd41, _0x6d40ae)) || _0x5b060a;
      }
    }
  }

  _0x57488f > 3 && _0x5b060a && Object["defineProperty"](_0x1bbd41, _0x6d40ae, _0x5b060a);
  return _0x5b060a;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AuthModule"] = void 0;

const verifycation_entity_1 = require("./../verification/verifycation.entity"),
      typeorm_1 = require("@nestjs/typeorm"),
      verification_service_1 = require("./../verification/verification.service"),
      mailer_service_1 = require("../mailer/mailer.service"),
      nestjs_config_1 = require("nestjs-config"),
      auth_controller_1 = require("./auth.controller"),
      common_1 = require("@nestjs/common"),
      auth_service_1 = require("./auth.service"),
      user_module_1 = require("../user/user.module"),
      passport_1 = require("@nestjs/passport"),
      jwt_1 = require("@nestjs/jwt"),
      jwt_strategy_1 = require('../../common/auth/jwt.strategy'),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      balance_entity_1 = require("../userBalance/balance.entity"),
      accountLog_entity_1 = require('../userBalance/accountLog.entity'),
      config_entity_1 = require('../globalConfig/config.entity'),
      cramiPackage_entity_1 = require("../crami/cramiPackage.entity"),
      redisCache_service_1 = require('../redisCache/redisCache.service'),
      redisCache_module_1 = require("../redisCache/redisCache.module"),
      userBalance_entity_1 = require("../userBalance/userBalance.entity"),
      salesUsers_entity_1 = require("../sales/salesUsers.entity"),
      user_entity_1 = require("../user/user.entity"),
      whiteList_entity_1 = require("../chatgpt/whiteList.entity");

let AuthModule = class AuthModule {};
AuthModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [user_module_1["UserModule"], passport_1["PassportModule"]["register"]({
    'defaultStrategy': "jwt"
  }), jwt_1["JwtModule"]['registerAsync']({
    'useFactory': async _0x285812 => _0x285812["get"]("jwt"),
    'inject': [nestjs_config_1["ConfigService"]]
  }), typeorm_1["TypeOrmModule"]["forFeature"]([verifycation_entity_1["VerifycationEntity"], balance_entity_1["BalanceEntity"], accountLog_entity_1["AccountLogEntity"], config_entity_1['ConfigEntity'], cramiPackage_entity_1["CramiPackageEntity"], redisCache_module_1["RedisCacheModule"], userBalance_entity_1["UserBalanceEntity"], salesUsers_entity_1["SalesUsersEntity"], user_entity_1['UserEntity'], whiteList_entity_1['WhiteListEntity']])],
  'controllers': [auth_controller_1["AuthController"]],
  'providers': [auth_service_1["AuthService"], jwt_strategy_1['JwtStrategy'], jwtAuth_guard_1["JwtAuthGuard"], mailer_service_1["MailerService"], verification_service_1['VerificationService'], userBalance_service_1["UserBalanceService"], redisCache_service_1["RedisCacheService"]],
  'exports': [auth_service_1["AuthService"]]
})], AuthModule);
exports["AuthModule"] = AuthModule;