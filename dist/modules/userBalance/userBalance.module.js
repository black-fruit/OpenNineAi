'use strict';

var __decorate = this && this['__decorate'] || function (_0x5170bc, _0x440e3f, _0xb1f09, _0x178390) {
  var _0x34e433 = arguments["length"],
      _0x2ad5fe = _0x34e433 < 3 ? _0x440e3f : _0x178390 === null ? _0x178390 = Object['getOwnPropertyDescriptor'](_0x440e3f, _0xb1f09) : _0x178390,
      _0xcf488;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x2ad5fe = Reflect["decorate"](_0x5170bc, _0x440e3f, _0xb1f09, _0x178390);
  } else {
    for (var _0xca1879 = _0x5170bc["length"] - 1; _0xca1879 >= 0; _0xca1879--) {
      if (_0xcf488 = _0x5170bc[_0xca1879]) {
        _0x2ad5fe = (_0x34e433 < 3 ? _0xcf488(_0x2ad5fe) : _0x34e433 > 3 ? _0xcf488(_0x440e3f, _0xb1f09, _0x2ad5fe) : _0xcf488(_0x440e3f, _0xb1f09)) || _0x2ad5fe;
      }
    }
  }

  _0x34e433 > 3 && _0x2ad5fe && Object['defineProperty'](_0x440e3f, _0xb1f09, _0x2ad5fe);
  return _0x2ad5fe;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UserBalanceModule"] = void 0;

const common_1 = require("@nestjs/common"),
      userBalance_service_1 = require('./userBalance.service'),
      typeorm_1 = require("@nestjs/typeorm"),
      balance_entity_1 = require("./balance.entity"),
      verification_service_1 = require("../verification/verification.service"),
      verifycation_entity_1 = require("../verification/verifycation.entity"),
      accountLog_entity_1 = require("./accountLog.entity"),
      userBalance_controller_1 = require('./userBalance.controller'),
      config_entity_1 = require("../globalConfig/config.entity"),
      cramiPackage_entity_1 = require("../crami/cramiPackage.entity"),
      userBalance_entity_1 = require("./userBalance.entity"),
      user_entity_1 = require("../user/user.entity"),
      salesUsers_entity_1 = require("../sales/salesUsers.entity"),
      whiteList_entity_1 = require('../chatgpt/whiteList.entity'),
      redisCache_service_1 = require("../redisCache/redisCache.service");

let UserBalanceModule = class UserBalanceModule {};
UserBalanceModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([balance_entity_1["BalanceEntity"], userBalance_entity_1["UserBalanceEntity"], verifycation_entity_1["VerifycationEntity"], accountLog_entity_1["AccountLogEntity"], config_entity_1['ConfigEntity'], cramiPackage_entity_1['CramiPackageEntity'], user_entity_1['UserEntity'], salesUsers_entity_1["SalesUsersEntity"], whiteList_entity_1['WhiteListEntity']])],
  'controllers': [userBalance_controller_1["UserBalanceController"]],
  'providers': [userBalance_service_1['UserBalanceService'], verification_service_1['VerificationService'], redisCache_service_1["RedisCacheService"]],
  'exports': [userBalance_service_1['UserBalanceService']]
})], UserBalanceModule);
exports["UserBalanceModule"] = UserBalanceModule;