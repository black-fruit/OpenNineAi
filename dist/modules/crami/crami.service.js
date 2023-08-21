'use strict';

var __decorate = this && this["__decorate"] || function (_0x2a3319, _0x21406e, _0x2f9171, _0x41ee97) {
  var _0x3b5193 = arguments['length'],
      _0xa675bb = _0x3b5193 < 3 ? _0x21406e : _0x41ee97 === null ? _0x41ee97 = Object["getOwnPropertyDescriptor"](_0x21406e, _0x2f9171) : _0x41ee97,
      _0x1de326;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0xa675bb = Reflect["decorate"](_0x2a3319, _0x21406e, _0x2f9171, _0x41ee97);
  } else {
    for (var _0x1f98a7 = _0x2a3319['length'] - 1; _0x1f98a7 >= 0; _0x1f98a7--) {
      if (_0x1de326 = _0x2a3319[_0x1f98a7]) {
        _0xa675bb = (_0x3b5193 < 3 ? _0x1de326(_0xa675bb) : _0x3b5193 > 3 ? _0x1de326(_0x21406e, _0x2f9171, _0xa675bb) : _0x1de326(_0x21406e, _0x2f9171)) || _0xa675bb;
      }
    }
  }

  _0x3b5193 > 3 && _0xa675bb && Object["defineProperty"](_0x21406e, _0x2f9171, _0xa675bb);
  return _0xa675bb;
},
    __metadata = this && this["__metadata"] || function (_0x3b8c9d, _0x446ad6) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3b8c9d, _0x446ad6);
  }
},
    __param = this && this['__param'] || function (_0x47d62e, _0x356736) {
  return function (_0x402ecc, _0x39e725) {
    _0x356736(_0x402ecc, _0x39e725, _0x47d62e);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['CramiService'] = void 0;

const common_1 = require('@nestjs/common'),
      crami_entity_1 = require('./crami.entity'),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm"),
      cramiPackage_entity_1 = require("./cramiPackage.entity"),
      utils_1 = require("../../common/utils"),
      user_entity_1 = require("../user/user.entity"),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      balance_constant_1 = require('../../common/constants/balance.constant');

let CramiService = class CramiService {
  constructor(_0x4ae562, _0x4dbdeb, _0x189642, _0x3f3fc2) {
    this['cramiEntity'] = _0x4ae562;
    this['cramiPackageEntity'] = _0x4dbdeb;
    this['userEntity'] = _0x189642;
    this['userBalanceService'] = _0x3f3fc2;
  }

  async ['queryOnePackage'](_0x44fe94) {
    return await this["cramiPackageEntity"]["findOne"]({
      'where': {
        'id': _0x44fe94
      }
    });
  }

  async ["queryAllPackage"](_0x2c05ac) {
    try {
      const {
        "page": page = 1,
        "size": size = 10,
        "name": _0x652840,
        "status": _0x4002b5,
        "type": _0x56a621
      } = _0x2c05ac,
            _0x45807c = {};
      _0x652840 && Object['assign'](_0x45807c, {
        'name': (0, typeorm_2["Like"])('%' + _0x652840 + '%')
      });
      _0x4002b5 && Object["assign"](_0x45807c, {
        'status': _0x4002b5
      });
      _0x56a621 && (_0x56a621 > 0 ? Object["assign"](_0x45807c, {
        'days': (0, typeorm_2["MoreThan"])(0)
      }) : Object['assign'](_0x45807c, {
        'days': (0, typeorm_2["LessThanOrEqual"])(0)
      }));
      const [_0x5eaab4, _0x3ef300] = await this["cramiPackageEntity"]["findAndCount"]({
        'skip': (page - 1) * size,
        'take': size,
        'where': _0x45807c,
        'order': {
          'order': "DESC"
        }
      });
      return {
        'rows': _0x5eaab4,
        'count': _0x3ef300
      };
    } catch (_0x5bf184) {
      console["log"]("error: ", _0x5bf184);
    }
  }

  async ["createPackage"](_0x2f89f3) {
    const {
      "name": _0x2b159b,
      "weight": _0x120310
    } = _0x2f89f3,
          _0xf79f60 = await this["cramiPackageEntity"]["findOne"]({
      'where': [{
        'name': _0x2b159b
      }, {
        'weight': _0x120310
      }]
    });

    if (_0xf79f60) {
      throw new common_1["HttpException"]("套餐名称或套餐等级重复、请检查！", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    try {
      return await this["cramiPackageEntity"]["save"](_0x2f89f3);
    } catch (_0x227c9d) {
      console["log"]("error: ", _0x227c9d);
      throw new common_1["HttpException"](_0x227c9d, common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["updatePackage"](_0x1535ce) {
    const {
      "id": _0x33d757,
      "name": _0x18474c,
      "weight": _0x19717b
    } = _0x1535ce,
          _0x54bf2f = await this["cramiPackageEntity"]["findOne"]({
      'where': {
        'id': _0x33d757
      }
    });

    if (!_0x54bf2f) {
      throw new common_1['HttpException']('当前套餐不存在、请检查你的输入参数！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x34d69d = await this["cramiPackageEntity"]["count"]({
      'where': [{
        'name': _0x18474c,
        'id': (0, typeorm_2["Not"])(_0x33d757)
      }, {
        'weight': _0x19717b,
        'id': (0, typeorm_2["Not"])(_0x33d757)
      }]
    });

    if (_0x34d69d) {
      throw new common_1["HttpException"]("套餐名称或套餐等级重复、请检查！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x2c7ff0 = await this["cramiPackageEntity"]["update"]({
      'id': _0x33d757
    }, _0x1535ce);

    if (_0x2c7ff0['affected'] > 0) {
      return '更新套餐成功！';
    } else {
      throw new common_1['HttpException']("更新套餐失败、请重试！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['delPackage'](_0x51d928) {
    const {
      "id": _0xe76be1
    } = _0x51d928,
          _0x9735ea = await this['cramiEntity']['count']({
      'where': {
        'packageId': _0xe76be1
      }
    });

    if (_0x9735ea) {
      throw new common_1['HttpException']("当前套餐下存在卡密、请先删除卡密后才可删除套餐！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return await this["cramiPackageEntity"]["delete"]({
      'id': _0xe76be1
    });
  }

  async ["createCrami"](_0x1b820f) {
    const {
      "packageId": _0x1939d0,
      "count": count = 1
    } = _0x1b820f;

    if (_0x1939d0) {
      const _0x2915a0 = await this["cramiPackageEntity"]["findOne"]({
        'where': {
          'id': _0x1939d0
        }
      });

      if (!_0x2915a0) {
        throw new common_1["HttpException"]("当前套餐不存在、请确认您选择的套餐是否存在！", common_1['HttpStatus']["BAD_REQUEST"]);
      }

      const {
        "days": days = -1,
        "model3Count": model3Count = 0,
        "model4Count": model4Count = 0,
        "drawMjCount": drawMjCount = 0
      } = _0x2915a0,
            _0x4c89ce = {
        'packageId': _0x1939d0,
        'days': days,
        'model3Count': model3Count,
        'model4Count': model4Count,
        'drawMjCount': drawMjCount
      };
      return await this["generateCrami"](_0x4c89ce, count);
    }

    if (!_0x1939d0) {
      const {
        "model3Count": model3Count = 0,
        "model4Count": model4Count = 0,
        "drawMjCount": drawMjCount = 0
      } = _0x1b820f;

      if ([model3Count, model4Count, drawMjCount]["every"](_0x2434e9 => !_0x2434e9)) {
        throw new common_1["HttpException"]('自定义卡密必须至少一项余额不为0️零！', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0x3a8610 = {
        'days': -1,
        'model3Count': model3Count,
        'model4Count': model4Count,
        'drawMjCount': drawMjCount
      };
      return await this["generateCrami"](_0x3a8610, count);
    }
  }

  async ["generateCrami"](_0x11f5b7, _0xd893b0) {
    const _0x3de24c = [];

    for (let _0x35c92a = 0; _0x35c92a < _0xd893b0; _0x35c92a++) {
      const _0x597fe0 = (0, utils_1['generateCramiCode'])(),
            _0x2d95bd = this['cramiEntity']['create'](Object["assign"](Object['assign']({}, _0x11f5b7), {
        'code': _0x597fe0
      }));

      _0x3de24c['push'](_0x2d95bd);
    }

    return await this["cramiEntity"]['save'](_0x3de24c);
  }

  async ["useCrami"](_0x4d5547, _0x2d4a11) {
    const {
      "id": _0xf7b74c
    } = _0x4d5547['user'],
          _0x32bd14 = await this["cramiEntity"]['findOne']({
      'where': {
        'code': _0x2d4a11["code"]
      }
    });

    if (!_0x32bd14) {
      throw new common_1['HttpException']("当前卡密不存在、请确认您输入的卡密是否正确！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "status": _0xd8b9a9,
      "days": days = -1,
      "model3Count": model3Count = 0,
      "model4Count": model4Count = 0,
      "drawMjCount": drawMjCount = 0,
      "packageId": _0x3577f0
    } = _0x32bd14;

    if (_0xd8b9a9 === 1) {
      throw new common_1["HttpException"]("当前卡密已被使用、请确认您输入的卡密是否正确！", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x4b9d2e = {
      'model3Count': model3Count,
      'model4Count': model4Count,
      'drawMjCount': drawMjCount,
      'packageId': _0x3577f0
    };
    await this['userBalanceService']["addBalanceToUser"](_0xf7b74c, Object['assign']({}, _0x4b9d2e), days);
    await this["userBalanceService"]["saveRecordRechargeLog"]({
      'userId': _0xf7b74c,
      'rechargeType': balance_constant_1['RechargeType']['PACKAGE_GIFT'],
      'model3Count': model3Count,
      'model4Count': model4Count,
      'drawMjCount': drawMjCount,
      'days': days
    });
    await this["cramiEntity"]["update"]({
      'code': _0x2d4a11["code"]
    }, {
      'useId': _0xf7b74c,
      'status': 1
    });
    return "使用卡密成功";
  }

  async ["queryAllCrami"](_0x2791ae, _0x52a1fb) {
    const {
      "page": page = 1,
      "size": size = 10,
      "status": _0x1f7dfe,
      "useId": _0x8159d2
    } = _0x2791ae,
          _0x4016bd = {};
    _0x1f7dfe && Object["assign"](_0x4016bd, {
      'status': _0x1f7dfe
    });
    _0x8159d2 && Object["assign"](_0x4016bd, {
      'useId': _0x8159d2
    });

    const [_0x2ab40c, _0x25ba87] = await this["cramiEntity"]['findAndCount']({
      'skip': (page - 1) * size,
      'take': size,
      'order': {
        'createdAt': "DESC"
      },
      'where': _0x4016bd
    }),
          _0x20ece3 = _0x2ab40c["map"](_0xc50ece => _0xc50ece['useId']),
          _0x408126 = _0x2ab40c["map"](_0x354d00 => _0x354d00['packageId']),
          _0x2165e6 = await this["userEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x20ece3)
      }
    }),
          _0x2ecd7d = await this["cramiPackageEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x408126)
      }
    });

    _0x2ab40c["forEach"](_0x26ee94 => {
      var _0xb1e022, _0x40d754, _0x545bb4;

      _0x26ee94['username'] = (_0xb1e022 = _0x2165e6["find"](_0x4c37d6 => _0x4c37d6['id'] === _0x26ee94["useId"])) === null || _0xb1e022 === void 0 ? void 0 : _0xb1e022["username"];
      _0x26ee94["email"] = (_0x40d754 = _0x2165e6["find"](_0x37d18b => _0x37d18b['id'] === _0x26ee94["useId"])) === null || _0x40d754 === void 0 ? void 0 : _0x40d754["email"];
      _0x26ee94["packageName"] = (_0x545bb4 = _0x2ecd7d["find"](_0x36d57b => _0x36d57b['id'] === _0x26ee94["packageId"])) === null || _0x545bb4 === void 0 ? void 0 : _0x545bb4["name"];
    });

    _0x52a1fb["user"]['role'] !== "super" && _0x2ab40c['forEach'](_0x1693c4 => _0x1693c4['email'] = (0, utils_1["maskEmail"])(_0x1693c4["email"]));
    _0x52a1fb["user"]["role"] !== "super" && _0x2ab40c["forEach"](_0x2eb954 => _0x2eb954["code"] = (0, utils_1["maskCrami"])(_0x2eb954['code']));
    return {
      'rows': _0x2ab40c,
      'count': _0x25ba87
    };
  }

  async ["delCrami"](_0x27074f) {
    const _0x5a29b1 = await this["cramiEntity"]['findOne']({
      'where': {
        'id': _0x27074f
      }
    });

    if (!_0x5a29b1) {
      throw new common_1['HttpException']("当前卡密不存在、请确认您要删除的卡密是否存在！", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    if (_0x5a29b1["status"] === 1) {
      throw new common_1["HttpException"]("当前卡密已被使用、已使用的卡密禁止删除！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return await this["cramiEntity"]["delete"]({
      'id': _0x27074f
    });
  }

  async ["batchDelCrami"](_0x116bf7) {
    const {
      "ids": _0x482b77
    } = _0x116bf7,
          _0x3e38f2 = await this['cramiEntity']['delete'](_0x482b77);

    if (_0x3e38f2['affected'] > 0) {
      return "删除卡密成功！";
    } else {
      throw new common_1['HttpException']('删除卡密失败、请重试！', common_1["HttpStatus"]['BAD_REQUEST']);
    }
  }

};
CramiService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(crami_entity_1["CramiEntity"])), __param(1, (0, typeorm_1["InjectRepository"])(cramiPackage_entity_1["CramiPackageEntity"])), __param(2, (0, typeorm_1["InjectRepository"])(user_entity_1["UserEntity"])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2['Repository'], userBalance_service_1["UserBalanceService"]])], CramiService);
exports["CramiService"] = CramiService;