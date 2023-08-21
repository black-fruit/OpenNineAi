'use strict';

var __decorate = this && this["__decorate"] || function (_0x5e657a, _0x41f0ea, _0x267e3d, _0x3e71c1) {
  var _0x3a02a8 = arguments["length"],
      _0x3e1c24 = _0x3a02a8 < 3 ? _0x41f0ea : _0x3e71c1 === null ? _0x3e71c1 = Object['getOwnPropertyDescriptor'](_0x41f0ea, _0x267e3d) : _0x3e71c1,
      _0x146dda;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3e1c24 = Reflect["decorate"](_0x5e657a, _0x41f0ea, _0x267e3d, _0x3e71c1);
  } else {
    for (var _0x2c4708 = _0x5e657a["length"] - 1; _0x2c4708 >= 0; _0x2c4708--) {
      if (_0x146dda = _0x5e657a[_0x2c4708]) {
        _0x3e1c24 = (_0x3a02a8 < 3 ? _0x146dda(_0x3e1c24) : _0x3a02a8 > 3 ? _0x146dda(_0x41f0ea, _0x267e3d, _0x3e1c24) : _0x146dda(_0x41f0ea, _0x267e3d)) || _0x3e1c24;
      }
    }
  }

  _0x3a02a8 > 3 && _0x3e1c24 && Object['defineProperty'](_0x41f0ea, _0x267e3d, _0x3e1c24);
  return _0x3e1c24;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["CramiModule"] = void 0;

const common_1 = require("@nestjs/common"),
      crami_service_1 = require("./crami.service"),
      crami_controller_1 = require('./crami.controller'),
      typeorm_1 = require("@nestjs/typeorm"),
      crami_entity_1 = require("./crami.entity"),
      cramiPackage_entity_1 = require('./cramiPackage.entity'),
      user_entity_1 = require("../user/user.entity"),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      balance_entity_1 = require("../userBalance/balance.entity"),
      accountLog_entity_1 = require("../userBalance/accountLog.entity"),
      config_entity_1 = require('../globalConfig/config.entity'),
      userBalance_entity_1 = require("../userBalance/userBalance.entity"),
      salesUsers_entity_1 = require('../sales/salesUsers.entity'),
      whiteList_entity_1 = require("../chatgpt/whiteList.entity");

let CramiModule = class CramiModule {};
CramiModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1['TypeOrmModule']["forFeature"]([salesUsers_entity_1["SalesUsersEntity"], crami_entity_1["CramiEntity"], cramiPackage_entity_1["CramiPackageEntity"], user_entity_1['UserEntity'], balance_entity_1["BalanceEntity"], accountLog_entity_1["AccountLogEntity"], config_entity_1["ConfigEntity"], userBalance_entity_1["UserBalanceEntity"], whiteList_entity_1['WhiteListEntity']])],
  'providers': [crami_service_1["CramiService"], userBalance_service_1["UserBalanceService"]],
  'controllers': [crami_controller_1["CramiController"]],
  'exports': [crami_service_1['CramiService']]
})], CramiModule);
exports['CramiModule'] = CramiModule;