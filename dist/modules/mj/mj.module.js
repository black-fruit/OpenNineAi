'use strict';

var __decorate = this && this['__decorate'] || function (_0x1611ae, _0x439765, _0x77b75e, _0x346455) {
  var _0x1453ad = arguments["length"],
      _0x1948a8 = _0x1453ad < 3 ? _0x439765 : _0x346455 === null ? _0x346455 = Object["getOwnPropertyDescriptor"](_0x439765, _0x77b75e) : _0x346455,
      _0xa2cf1c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x1948a8 = Reflect["decorate"](_0x1611ae, _0x439765, _0x77b75e, _0x346455);
  } else {
    for (var _0x5c3867 = _0x1611ae["length"] - 1; _0x5c3867 >= 0; _0x5c3867--) {
      if (_0xa2cf1c = _0x1611ae[_0x5c3867]) {
        _0x1948a8 = (_0x1453ad < 3 ? _0xa2cf1c(_0x1948a8) : _0x1453ad > 3 ? _0xa2cf1c(_0x439765, _0x77b75e, _0x1948a8) : _0xa2cf1c(_0x439765, _0x77b75e)) || _0x1948a8;
      }
    }
  }

  _0x1453ad > 3 && _0x1948a8 && Object['defineProperty'](_0x439765, _0x77b75e, _0x1948a8);
  return _0x1948a8;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["MjModule"] = void 0;

const chatLog_entity_1 = require('./../chatLog/chatLog.entity'),
      common_1 = require("@nestjs/common"),
      mj_service_1 = require('./mj.service'),
      mj_controller_1 = require("./mj.controller"),
      typeorm_1 = require("@nestjs/typeorm"),
      balance_entity_1 = require('../userBalance/balance.entity');

let MjModule = class MjModule {};
MjModule = __decorate([(0, common_1["Global"])(), (0, common_1['Module'])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([chatLog_entity_1["ChatLogEntity"], balance_entity_1['BalanceEntity']])],
  'providers': [mj_service_1["MjService"]],
  'controllers': [mj_controller_1["MjController"]],
  'exports': [mj_service_1['MjService']]
})], MjModule);
exports["MjModule"] = MjModule;