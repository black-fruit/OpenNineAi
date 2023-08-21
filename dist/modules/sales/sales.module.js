'use strict';

var __decorate = this && this["__decorate"] || function (_0x36e02f, _0x4caf95, _0x53246f, _0x3c1cbb) {
  var _0x4c7c80 = arguments["length"],
      _0xc6bb94 = _0x4c7c80 < 3 ? _0x4caf95 : _0x3c1cbb === null ? _0x3c1cbb = Object["getOwnPropertyDescriptor"](_0x4caf95, _0x53246f) : _0x3c1cbb,
      _0x17f8ce;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0xc6bb94 = Reflect['decorate'](_0x36e02f, _0x4caf95, _0x53246f, _0x3c1cbb);
  } else {
    for (var _0x57ec1a = _0x36e02f["length"] - 1; _0x57ec1a >= 0; _0x57ec1a--) {
      if (_0x17f8ce = _0x36e02f[_0x57ec1a]) {
        _0xc6bb94 = (_0x4c7c80 < 3 ? _0x17f8ce(_0xc6bb94) : _0x4c7c80 > 3 ? _0x17f8ce(_0x4caf95, _0x53246f, _0xc6bb94) : _0x17f8ce(_0x4caf95, _0x53246f)) || _0xc6bb94;
      }
    }
  }

  _0x4c7c80 > 3 && _0xc6bb94 && Object["defineProperty"](_0x4caf95, _0x53246f, _0xc6bb94);
  return _0xc6bb94;
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["SalesModule"] = void 0;

const common_1 = require('@nestjs/common'),
      sales_controller_1 = require("./sales.controller"),
      sales_service_1 = require("./sales.service"),
      typeorm_1 = require("@nestjs/typeorm"),
      salesUsers_entity_1 = require("./salesUsers.entity"),
      salesRecords_entity_1 = require("./salesRecords.entity"),
      user_entity_1 = require('../user/user.entity'),
      salesOrder_entity_1 = require("./salesOrder.entity");

let SalesModule = class SalesModule {};
SalesModule = __decorate([(0, common_1['Global'])(), (0, common_1['Module'])({
  'imports': [typeorm_1["TypeOrmModule"]['forFeature']([salesUsers_entity_1['SalesUsersEntity'], salesRecords_entity_1["SalesRecordsEntity"], user_entity_1['UserEntity'], salesOrder_entity_1["SalesOrderEntity"]])],
  'controllers': [sales_controller_1['SalesController']],
  'providers': [sales_service_1["SalesService"]],
  'exports': [sales_service_1["SalesService"]]
})], SalesModule);
exports["SalesModule"] = SalesModule;