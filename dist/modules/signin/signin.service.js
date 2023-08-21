'use strict';

var __decorate = this && this["__decorate"] || function (_0x1f1031, _0x33eec0, _0x4054b7, _0x3e7716) {
  var _0x184ead = arguments["length"],
      _0x356b79 = _0x184ead < 3 ? _0x33eec0 : _0x3e7716 === null ? _0x3e7716 = Object['getOwnPropertyDescriptor'](_0x33eec0, _0x4054b7) : _0x3e7716,
      _0x21d2dd;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x356b79 = Reflect["decorate"](_0x1f1031, _0x33eec0, _0x4054b7, _0x3e7716);
  } else {
    for (var _0x28313a = _0x1f1031['length'] - 1; _0x28313a >= 0; _0x28313a--) {
      if (_0x21d2dd = _0x1f1031[_0x28313a]) {
        _0x356b79 = (_0x184ead < 3 ? _0x21d2dd(_0x356b79) : _0x184ead > 3 ? _0x21d2dd(_0x33eec0, _0x4054b7, _0x356b79) : _0x21d2dd(_0x33eec0, _0x4054b7)) || _0x356b79;
      }
    }
  }

  _0x184ead > 3 && _0x356b79 && Object["defineProperty"](_0x33eec0, _0x4054b7, _0x356b79);
  return _0x356b79;
},
    __metadata = this && this["__metadata"] || function (_0xef584a, _0x15ff2b) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect['metadata'](_0xef584a, _0x15ff2b);
  }
},
    __param = this && this['__param'] || function (_0x191257, _0x931259) {
  return function (_0x32b40e, _0x51cfa9) {
    _0x931259(_0x32b40e, _0x51cfa9, _0x191257);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SigninService"] = void 0;

const globalConfig_service_1 = require("./../globalConfig/globalConfig.service"),
      userBalance_service_1 = require("./../userBalance/userBalance.service"),
      common_1 = require('@nestjs/common'),
      signIn_entity_1 = require("./signIn.entity"),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm"),
      date_1 = require("../../common/utils/date"),
      user_entity_1 = require('../user/user.entity'),
      balance_constant_1 = require("../../common/constants/balance.constant");

let SigninService = class SigninService {
  constructor(_0x5aab43, _0x2c68d6, _0x3f7a86, _0x328583) {
    this['signinEntity'] = _0x5aab43;
    this["userEntity"] = _0x2c68d6;
    this["userBalanceService"] = _0x3f7a86;
    this["globalConfigService"] = _0x328583;
  }

  async ["sign"](_0x59efbd) {
    const {
      "id": _0x4f4eb0
    } = _0x59efbd["user"],
          _0x2b5071 = (0, date_1['default'])(new Date())['format']('YYYY-MM-DD'),
          _0x3935d4 = await this["signinEntity"]["findOne"]({
      'where': {
        'userId': _0x4f4eb0,
        'signInDate': _0x2b5071
      }
    });

    if (_0x3935d4) {
      throw new common_1["HttpException"]("今日已签到、改天再来吧!.", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "model3Count": _0x792de8,
      "model4Count": _0x40d9b6,
      "drawMjCount": _0x5dd8ad
    } = await this["globalConfigService"]["getSignatureGiftConfig"]();
    await this['signinEntity']["save"]({
      'userId': _0x4f4eb0,
      'signInTime': new Date(),
      'signInDate': _0x2b5071,
      'isSigned': true
    });
    await this["userBalanceService"]["addBalanceToUser"](_0x4f4eb0, {
      'model3Count': _0x792de8,
      'model4Count': _0x40d9b6,
      'drawMjCount': _0x5dd8ad
    });
    await this["userBalanceService"]["saveRecordRechargeLog"]({
      'userId': _0x4f4eb0,
      'rechargeType': balance_constant_1['RechargeType']["SIGN_IN"],
      'model3Count': _0x792de8,
      'model4Count': _0x40d9b6,
      'drawMjCount': _0x5dd8ad
    });

    const _0x2a7777 = (0, date_1["default"])(new Date())['subtract'](1, "day")["format"]('YYYY-MM-DD'),
          _0x34ecc6 = await this["signinEntity"]["findOne"]({
      'where': {
        'userId': _0x4f4eb0,
        'signInDate': _0x2a7777
      }
    });

    if (_0x34ecc6) {
      common_1["Logger"]["debug"]('用户' + _0x4f4eb0 + "昨天签到了、今天是连续签到！", 'SigninService');

      const _0x2300d4 = await this['userEntity']["findOne"]({
        'where': {
          'id': _0x4f4eb0
        }
      });

      if (!_0x2300d4) {
        throw new common_1["HttpException"]("用户不存在", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "consecutiveDays": consecutiveDays = 0
      } = _0x2300d4;
      await this["userEntity"]['update']({
        'id': _0x4f4eb0
      }, {
        'consecutiveDays': consecutiveDays + 1
      });
    } else {
      common_1["Logger"]["debug"]('用户' + _0x4f4eb0 + "昨天没签到、今天重置天数！", 'SigninService');
      await this["userEntity"]["update"]({
        'id': _0x4f4eb0
      }, {
        'consecutiveDays': 1
      });
    }

    return "Sign in successful.";
  }

  async ['getSigninLog'](_0x5668cd) {
    try {
      const {
        "id": _0x2d7044
      } = _0x5668cd["user"],
            _0xc95c86 = (0, date_1['default'])()['startOf']("month")['format']("YYYY-MM-DD HH:mm:ss"),
            _0x5078f6 = (0, date_1['default'])()["endOf"]("month")["format"]("YYYY-MM-DD HH:mm:ss"),
            _0xc0c736 = this['signinEntity']['createQueryBuilder']('signin'),
            _0x27d922 = await _0xc0c736["select"]("signin.signInDate as signInDate, signin.isSigned as isSigned")['andWhere']("signin.userId = :userId", {
        'userId': _0x5668cd["user"]['id']
      })["andWhere"]("signin.signInTime >= :firstDay", {
        'firstDay': _0xc95c86
      })["andWhere"]("signin.signInTime <= :lastDay", {
        'lastDay': _0x5078f6
      })["getRawMany"](),
            _0x4c7e0e = new Date(_0xc95c86),
            _0x5482b1 = new Date(_0x5078f6),
            _0x2b80de = [],
            _0x55bfe2 = new Date(_0x4c7e0e);

      while (_0x55bfe2 <= _0x5482b1) {
        _0x2b80de["push"]((0, date_1["default"])(new Date(_0x55bfe2))["format"]('YYYY-MM-DD'));

        _0x55bfe2["setDate"](_0x55bfe2["getDate"]() + 1);
      }

      const _0x53f2aa = [];

      for (const _0x2215fb of _0x2b80de) {
        const _0x3909c7 = _0x27d922["find"](_0x2c133c => _0x2c133c["signInDate"] === _0x2215fb);

        !_0x3909c7 ? _0x53f2aa["push"]({
          'signInDate': _0x2215fb,
          'isSigned': false
        }) : (_0x3909c7["isSigned"] = true, _0x53f2aa["push"](_0x3909c7));
      }

      return _0x53f2aa;
    } catch (_0x5410eb) {
      console["log"]("error: ", _0x5410eb);
      throw new common_1['HttpException']('获取签到数据失败！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

};
SigninService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(signIn_entity_1['SigninEntity'])), __param(1, (0, typeorm_1["InjectRepository"])(user_entity_1["UserEntity"])), __metadata("design:paramtypes", [typeorm_2['Repository'], typeorm_2["Repository"], userBalance_service_1["UserBalanceService"], globalConfig_service_1["GlobalConfigService"]])], SigninService);
exports["SigninService"] = SigninService;