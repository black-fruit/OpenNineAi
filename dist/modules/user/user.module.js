'use strict';

var __decorate = this && this["__decorate"] || function (_0x3aef8c, _0x3d6e39, _0x85e600, _0x5c1ea0) {
  var _0x56f380 = arguments["length"],
      _0x29ffc2 = _0x56f380 < 3 ? _0x3d6e39 : _0x5c1ea0 === null ? _0x5c1ea0 = Object["getOwnPropertyDescriptor"](_0x3d6e39, _0x85e600) : _0x5c1ea0,
      _0x21a5ab;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0x29ffc2 = Reflect["decorate"](_0x3aef8c, _0x3d6e39, _0x85e600, _0x5c1ea0);
  } else {
    for (var _0x107d7a = _0x3aef8c["length"] - 1; _0x107d7a >= 0; _0x107d7a--) {
      if (_0x21a5ab = _0x3aef8c[_0x107d7a]) {
        _0x29ffc2 = (_0x56f380 < 3 ? _0x21a5ab(_0x29ffc2) : _0x56f380 > 3 ? _0x21a5ab(_0x3d6e39, _0x85e600, _0x29ffc2) : _0x21a5ab(_0x3d6e39, _0x85e600)) || _0x29ffc2;
      }
    }
  }

  _0x56f380 > 3 && _0x29ffc2 && Object["defineProperty"](_0x3d6e39, _0x85e600, _0x29ffc2);
  return _0x29ffc2;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['UserModule'] = void 0;

const verifycation_entity_1 = require("./../verification/verifycation.entity"),
      verification_service_1 = require("./../verification/verification.service"),
      common_1 = require('@nestjs/common'),
      typeorm_1 = require("@nestjs/typeorm"),
      user_controller_1 = require("./user.controller"),
      user_service_1 = require("./user.service"),
      user_entity_1 = require("./user.entity"),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      balance_entity_1 = require("../userBalance/balance.entity"),
      accountLog_entity_1 = require("../userBalance/accountLog.entity"),
      config_entity_1 = require('../globalConfig/config.entity'),
      cramiPackage_entity_1 = require("../crami/cramiPackage.entity"),
      whiteList_entity_1 = require("../chatgpt/whiteList.entity"),
      userBalance_entity_1 = require("../userBalance/userBalance.entity"),
      salesUsers_entity_1 = require("../sales/salesUsers.entity"),
      redisCache_service_1 = require("../redisCache/redisCache.service");

let UserModule = class UserModule {};
UserModule = __decorate([(0, common_1['Global'])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([user_entity_1["UserEntity"], verifycation_entity_1["VerifycationEntity"], balance_entity_1["BalanceEntity"], accountLog_entity_1["AccountLogEntity"], config_entity_1["ConfigEntity"], cramiPackage_entity_1["CramiPackageEntity"], whiteList_entity_1['WhiteListEntity'], userBalance_entity_1["UserBalanceEntity"], salesUsers_entity_1["SalesUsersEntity"]])],
  'controllers': [user_controller_1["UserController"]],
  'providers': [user_service_1["UserService"], verification_service_1["VerificationService"], userBalance_service_1['UserBalanceService'], redisCache_service_1["RedisCacheService"]],
  'exports': [user_service_1['UserService']]
})], UserModule);
exports["UserModule"] = UserModule;