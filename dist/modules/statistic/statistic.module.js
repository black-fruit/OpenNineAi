'use strict';

var __decorate = this && this["__decorate"] || function (_0x176e5b, _0x30da6f, _0x1c0e3c, _0x25c3ac) {
  var _0x45d932 = arguments["length"],
      _0x179deb = _0x45d932 < 3 ? _0x30da6f : _0x25c3ac === null ? _0x25c3ac = Object["getOwnPropertyDescriptor"](_0x30da6f, _0x1c0e3c) : _0x25c3ac,
      _0x19c0ec;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x179deb = Reflect["decorate"](_0x176e5b, _0x30da6f, _0x1c0e3c, _0x25c3ac);
  } else {
    for (var _0x48df24 = _0x176e5b["length"] - 1; _0x48df24 >= 0; _0x48df24--) {
      if (_0x19c0ec = _0x176e5b[_0x48df24]) {
        _0x179deb = (_0x45d932 < 3 ? _0x19c0ec(_0x179deb) : _0x45d932 > 3 ? _0x19c0ec(_0x30da6f, _0x1c0e3c, _0x179deb) : _0x19c0ec(_0x30da6f, _0x1c0e3c)) || _0x179deb;
      }
    }
  }

  _0x45d932 > 3 && _0x179deb && Object["defineProperty"](_0x30da6f, _0x1c0e3c, _0x179deb);
  return _0x179deb;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["StatisticModule"] = void 0;

const common_1 = require("@nestjs/common"),
      statistic_controller_1 = require("./statistic.controller"),
      statistic_service_1 = require("./statistic.service"),
      typeorm_1 = require('@nestjs/typeorm'),
      user_entity_1 = require("../user/user.entity"),
      chatLog_entity_1 = require("../chatLog/chatLog.entity"),
      config_entity_1 = require('../globalConfig/config.entity'),
      order_entity_1 = require("../order/order.entity"),
      midjourney_entity_1 = require("../midjourney/midjourney.entity");

let StatisticModule = class StatisticModule {};
StatisticModule = __decorate([(0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]['forFeature']([user_entity_1["UserEntity"], chatLog_entity_1["ChatLogEntity"], config_entity_1["ConfigEntity"], order_entity_1["OrderEntity"], midjourney_entity_1['MidjourneyEntity']])],
  'controllers': [statistic_controller_1["StatisticController"]],
  'providers': [statistic_service_1['StatisticService']]
})], StatisticModule);
exports["StatisticModule"] = StatisticModule;