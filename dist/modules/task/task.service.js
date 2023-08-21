'use strict';

var __decorate = this && this['__decorate'] || function (_0x1dec8c, _0x54321f, _0x3f1592, _0x468362) {
  var _0x2fb656 = arguments["length"],
      _0x5ca783 = _0x2fb656 < 3 ? _0x54321f : _0x468362 === null ? _0x468362 = Object["getOwnPropertyDescriptor"](_0x54321f, _0x3f1592) : _0x468362,
      _0x5efc41;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x5ca783 = Reflect["decorate"](_0x1dec8c, _0x54321f, _0x3f1592, _0x468362);
  } else {
    for (var _0x179a32 = _0x1dec8c["length"] - 1; _0x179a32 >= 0; _0x179a32--) {
      if (_0x5efc41 = _0x1dec8c[_0x179a32]) {
        _0x5ca783 = (_0x2fb656 < 3 ? _0x5efc41(_0x5ca783) : _0x2fb656 > 3 ? _0x5efc41(_0x54321f, _0x3f1592, _0x5ca783) : _0x5efc41(_0x54321f, _0x3f1592)) || _0x5ca783;
      }
    }
  }

  _0x2fb656 > 3 && _0x5ca783 && Object["defineProperty"](_0x54321f, _0x3f1592, _0x5ca783);
  return _0x5ca783;
},
    __metadata = this && this['__metadata'] || function (_0x1f23b5, _0x1ff60c) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x1f23b5, _0x1ff60c);
  }
},
    __param = this && this['__param'] || function (_0x3186e4, _0x2bdc42) {
  return function (_0x5d9d0f, _0x44d912) {
    _0x2bdc42(_0x5d9d0f, _0x44d912, _0x3186e4);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["TaskService"] = void 0;

const globalConfig_service_1 = require('./../globalConfig/globalConfig.service'),
      common_1 = require('@nestjs/common'),
      schedule_1 = require("@nestjs/schedule"),
      userBalance_entity_1 = require('../userBalance/userBalance.entity'),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm");

let TaskService = class TaskService {
  constructor(_0x553eb4, _0x20495f) {
    this["userBalanceEntity"] = _0x553eb4;
    this["globalConfigService"] = _0x20495f;
  }

  ["handleCron"]() {
    common_1["Logger"]["debug"]("Automatically refresh WeChat access every hour Token", "TaskService");
    this["globalConfigService"]['getWechatAccessToken']();
  }

  ['checkauth']() {
    common_1['Logger']["debug"]("check nineai auth", "TaskService");
    this['globalConfigService']['nineAiCheckAuth']();
  }

  async ["checkUserMemerExpire"]() {
    const _0x2066c1 = await this['userBalanceEntity']["find"]({
      'where': {
        'expirationTime': (0, typeorm_2["LessThanOrEqual"])(new Date())
      }
    });

    if (!_0x2066c1 || !_0x2066c1["length"]) {
      return;
    }

    _0x2066c1["forEach"](_0x41337b => {
      this["userBalanceEntity"]["update"]({
        'id': _0x41337b['id']
      }, {
        'expirationTime': null,
        'packageId': 0,
        'memberModel3Count': 0,
        'memberModel4Count': 0,
        'memberDrawMjCount': 0
      })["then"](_0x4af4dd => {
        common_1["Logger"]['debug'](_0x41337b['id'] + "会员已到期、清空所有余额并移除会员身份！", "TaskService");
      });
    });
  }

};

__decorate([(0, schedule_1["Cron"])(schedule_1['CronExpression']['EVERY_HOUR']), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata('design:returntype', void 0)], TaskService["prototype"], "handleCron", null);

__decorate([(0, schedule_1["Cron"])(schedule_1["CronExpression"]['EVERY_HOUR']), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], TaskService["prototype"], "checkauth", null);

__decorate([(0, schedule_1['Cron'])(schedule_1["CronExpression"]['EVERY_5_MINUTES']), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], TaskService["prototype"], "checkUserMemerExpire", null);

TaskService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(userBalance_entity_1['UserBalanceEntity'])), __metadata("design:paramtypes", [typeorm_2["Repository"], globalConfig_service_1["GlobalConfigService"]])], TaskService);
exports['TaskService'] = TaskService;