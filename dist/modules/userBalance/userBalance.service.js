'use strict';

var __decorate = this && this["__decorate"] || function (_0x2463a8, _0x16cc52, _0x378ebb, _0xfe8963) {
  var _0x4a9daf = arguments['length'],
      _0x3be9c5 = _0x4a9daf < 3 ? _0x16cc52 : _0xfe8963 === null ? _0xfe8963 = Object["getOwnPropertyDescriptor"](_0x16cc52, _0x378ebb) : _0xfe8963,
      _0x462ece;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3be9c5 = Reflect["decorate"](_0x2463a8, _0x16cc52, _0x378ebb, _0xfe8963);
  } else {
    for (var _0xa3cfee = _0x2463a8["length"] - 1; _0xa3cfee >= 0; _0xa3cfee--) {
      if (_0x462ece = _0x2463a8[_0xa3cfee]) {
        _0x3be9c5 = (_0x4a9daf < 3 ? _0x462ece(_0x3be9c5) : _0x4a9daf > 3 ? _0x462ece(_0x16cc52, _0x378ebb, _0x3be9c5) : _0x462ece(_0x16cc52, _0x378ebb)) || _0x3be9c5;
      }
    }
  }

  _0x4a9daf > 3 && _0x3be9c5 && Object["defineProperty"](_0x16cc52, _0x378ebb, _0x3be9c5);
  return _0x3be9c5;
},
    __metadata = this && this['__metadata'] || function (_0x5f2234, _0x519708) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5f2234, _0x519708);
  }
},
    __param = this && this["__param"] || function (_0x17a4f1, _0x24ed30) {
  return function (_0x463860, _0x42872c) {
    _0x24ed30(_0x463860, _0x42872c, _0x17a4f1);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UserBalanceService"] = void 0;

const globalConfig_service_1 = require("./../globalConfig/globalConfig.service"),
      typeorm_1 = require('@nestjs/typeorm'),
      balance_entity_1 = require("./balance.entity"),
      common_1 = require('@nestjs/common'),
      typeorm_2 = require("typeorm"),
      balance_constant_1 = require("../../common/constants/balance.constant"),
      accountLog_entity_1 = require('./accountLog.entity'),
      utils_1 = require("../../common/utils"),
      config_entity_1 = require("../globalConfig/config.entity"),
      cramiPackage_entity_1 = require("../crami/cramiPackage.entity"),
      userBalance_entity_1 = require("./userBalance.entity"),
      date_1 = require("../../common/utils/date"),
      user_entity_1 = require("../user/user.entity"),
      salesUsers_entity_1 = require("../sales/salesUsers.entity"),
      sales_service_1 = require("../sales/sales.service"),
      whiteList_entity_1 = require("../chatgpt/whiteList.entity");

let UserBalanceService = class UserBalanceService {
  constructor(_0x53bafa, _0x597556, _0x2b006d, _0x1318ad, _0xa21835, _0xc8ae9, _0x3b6b53, _0x252b05, _0x38968a, _0x5cb14a) {
    this["balanceEntity"] = _0x53bafa;
    this["userBalanceEntity"] = _0x597556;
    this["accountLogEntity"] = _0x2b006d;
    this["cramiPackageEntity"] = _0x1318ad;
    this['configEntity'] = _0xa21835;
    this["userEntity"] = _0xc8ae9;
    this["salesUsersEntity"] = _0x3b6b53;
    this["whiteListEntity"] = _0x252b05;
    this['salesService'] = _0x38968a;
    this["globalConfigService"] = _0x5cb14a;
  }

  async ["addBalanceToNewUser"](_0x2979ab, _0x5ba264) {
    try {
      const _0x276d4d = await this["configEntity"]["find"]({
        'where': {
          'configKey': (0, typeorm_2['In'])(['registerSendStatus', 'registerSendModel3Count', "registerSendModel4Count", 'registerSendDrawMjCount', "firstRegisterSendStatus", "firstRegisterSendRank", "firstRregisterSendModel3Count", "firstRregisterSendModel4Count", 'firstRregisterSendDrawMjCount', "inviteSendStatus", 'inviteGiveSendModel3Count', 'inviteGiveSendModel4Count', "inviteGiveSendDrawMjCount", "invitedGuestSendModel3Count", 'invitedGuestSendDrawMjCount', "invitedGuestSendModel4Count"])
        }
      }),
            _0x1788e9 = _0x276d4d['reduce']((_0xe68274, _0x428ebe) => {
        const _0x1765ed = Number(_0x428ebe["configVal"]),
              _0x295700 = Number["isInteger"](_0x1765ed) && _0x1765ed > 0 ? _0x1765ed : 0;

        _0xe68274[_0x428ebe["configKey"]] = _0x295700;
        return _0xe68274;
      }, {});

      let _0x40c7a2 = 0,
          _0x12ef15 = 0,
          _0x52aa4d = 0;
      _0x1788e9["registerSendStatus"] === 1 && (_0x40c7a2 = _0x40c7a2 + _0x1788e9["registerSendModel3Count"], _0x12ef15 = _0x12ef15 + _0x1788e9['registerSendModel4Count'], _0x52aa4d = _0x52aa4d + _0x1788e9["registerSendDrawMjCount"]);
      _0x1788e9["registerSendStatus"] === 1 && _0x1788e9['firstRegisterSendStatus'] === 1 && _0x2979ab <= _0x1788e9["firstRegisterSendRank"] && (_0x40c7a2 = _0x40c7a2 + _0x1788e9['firstRregisterSendModel3Count'], _0x12ef15 = _0x12ef15 + _0x1788e9["firstRregisterSendModel4Count"], _0x52aa4d = _0x52aa4d + _0x1788e9["firstRregisterSendDrawMjCount"]);
      await this["saveRecordRechargeLog"]({
        'userId': _0x2979ab,
        'rechargeType': balance_constant_1["RechargeType"]["REG_GIFT"],
        'model3Count': _0x40c7a2,
        'drawMjCount': _0x52aa4d,
        'model4Count': _0x12ef15
      });
      _0x5ba264 && Number(_0x1788e9["inviteSendStatus"]) === 1 && (_0x40c7a2 = _0x40c7a2 + Number(_0x1788e9["invitedGuestSendModel3Count"]), _0x12ef15 = _0x12ef15 + Number(_0x1788e9["invitedGuestSendModel4Count"]), _0x52aa4d = _0x52aa4d + Number(_0x1788e9["invitedGuestSendDrawMjCount"]), await this["saveRecordRechargeLog"]({
        'userId': _0x2979ab,
        'rechargeType': balance_constant_1["RechargeType"]["INVITE_GIFT"],
        'model3Count': _0x1788e9["invitedGuestSendModel3Count"],
        'model4Count': _0x1788e9["invitedGuestSendModel4Count"],
        'drawMjCount': _0x1788e9["invitedGuestSendDrawMjCount"]
      }), await this['addBalanceToUser'](_0x5ba264, {
        'model3Count': _0x1788e9["inviteGiveSendModel3Count"],
        'model4Count': _0x1788e9['inviteGiveSendModel4Count'],
        'drawMjCount': _0x1788e9["inviteGiveSendDrawMjCount"]
      }), await this["saveRecordRechargeLog"]({
        'userId': _0x5ba264,
        'rechargeType': balance_constant_1["RechargeType"]["REFER_GIFT"],
        'model3Count': _0x1788e9["inviteGiveSendModel3Count"],
        'model4Count': _0x1788e9['inviteGiveSendModel4Count'],
        'drawMjCount': _0x1788e9["inviteGiveSendDrawMjCount"]
      }));
      await this["userBalanceEntity"]["save"]({
        'userId': _0x2979ab,
        'model3Count': _0x40c7a2,
        'model4Count': _0x12ef15,
        'drawMjCount': _0x52aa4d,
        'useTokens': 0
      });
    } catch (_0x43469b) {
      console["log"]("error: ", _0x43469b);
      throw new common_1['HttpException']('注册赠送失败,请联系管理员！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["validateBalance"](_0x52094f, _0x25c31e, _0xd7754d) {
    let _0x480bb6 = await this["userBalanceEntity"]["findOne"]({
      'where': {
        'userId': _0x52094f
      }
    });

    !_0x480bb6 && (_0x480bb6 = await this["createBaseUserBalance"](_0x52094f));

    const _0x1a732a = await this["configEntity"]['findOne']({
      'where': {
        'configKey': 'vxNumber'
      }
    }),
          _0x44f549 = _0x1a732a ? _0x1a732a['configVal'] : '---',
          _0x7e3387 = _0x25c31e === "model3" ? "memberModel3Count" : _0x25c31e === 'model4' ? 'memberModel4Count' : _0x25c31e === "mjDraw" ? "memberDrawMjCount" : null,
          _0x1dfa16 = _0x25c31e === "model3" ? "model3Count" : _0x25c31e === "model4" ? "model4Count" : _0x25c31e === 'mjDraw' ? "drawMjCount" : null;

    if (_0x480bb6["packageId"] && _0x480bb6[_0x7e3387] < _0xd7754d) {
      if (_0x480bb6[_0x1dfa16] < _0xd7754d) {
        throw new common_1["HttpException"]("您的账户余额不足,如果想继续体验服务,请联系管理员 <VX: " + _0x44f549 + "> 或购买专属套餐 ！", common_1["HttpStatus"]["PAYMENT_REQUIRED"]);
      }
    }

    if (!_0x480bb6["packageId"] && _0x480bb6[_0x1dfa16] < _0xd7754d) {
      throw new common_1["HttpException"]("您的账户余额不足,如果想继续体验服务,请联系管理员 <VX: " + _0x44f549 + "> 或购买专属套餐 ！", common_1["HttpStatus"]["PAYMENT_REQUIRED"]);
    }

    return _0x480bb6;
  }

  async ["deductFromBalance"](_0x2d1587, _0x5d657d, _0x8f1f52, _0x5802b0 = 0) {
    const _0x4636ad = await this["userBalanceEntity"]["findOne"]({
      'where': {
        'userId': _0x2d1587
      }
    });

    if (!_0x4636ad) {
      throw new common_1["HttpException"]("缺失当前用户账户记录！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x38f8cc = _0x5d657d === "model3" ? "memberModel3Count" : _0x5d657d === 'model4' ? "memberModel4Count" : _0x5d657d === "mjDraw" ? "memberDrawMjCount" : null,
          _0x15e535 = _0x5d657d === "model3" ? "model3Count" : _0x5d657d === "model4" ? "model4Count" : _0x5d657d === "mjDraw" ? "drawMjCount" : null,
          _0x4c461d = _0x4636ad["packageId"] && _0x4636ad[_0x38f8cc] < _0x8f1f52 ? _0x15e535 : _0x4636ad["packageId"] ? _0x38f8cc : _0x15e535;

    let _0x5e0b0b = null;
    _0x4c461d["includes"]('odel3') && (_0x5e0b0b = 'useModel3Token');
    _0x4c461d["includes"]("odel4") && (_0x5e0b0b = 'useModel4Token');
    _0x4c461d["includes"]("MjCount") && (_0x5e0b0b = "useDrawMjToken");
    const _0x5312e5 = {
      [_0x4c461d]: _0x4636ad[_0x4c461d] - _0x8f1f52 < 0 ? 0 : _0x4636ad[_0x4c461d] - _0x8f1f52,
      [_0x5e0b0b]: _0x4636ad[_0x5e0b0b] + _0x5802b0
    };
    _0x5e0b0b === "useModel3Token" && (_0x5312e5['useModel3Count'] = _0x4636ad['useModel3Count'] + 1);
    _0x5e0b0b === "useModel4Token" && (_0x5312e5["useModel4Count"] = _0x4636ad["useModel4Count"] + 1);

    const _0x2eb59f = await this["userBalanceEntity"]["update"]({
      'userId': _0x2d1587
    }, _0x5312e5);

    if (_0x2eb59f["affected"] === 0) {
      throw new common_1["HttpException"]('消费余额失败！', common_1['HttpStatus']['BAD_REQUEST']);
    }
  }

  async ["queryUserBalance"](_0x328852) {
    try {
      const _0x12f5ca = await this["userBalanceEntity"]["findOne"]({
        'where': {
          'userId': _0x328852
        },
        'select': ["packageId", "model3Count", "model4Count", 'drawMjCount', 'memberModel3Count', "memberModel4Count", 'memberDrawMjCount', "useModel3Count", "useModel4Count", "useModel3Token", "useModel4Token", "useDrawMjToken", "expirationTime"]
      });

      if (!_0x12f5ca) {
        const _0x5657d9 = await this["createBaseUserBalance"](_0x328852);

        if (_0x5657d9) {
          return await this["queryUserBalance"](_0x328852);
        } else {
          throw new common_1["HttpException"]("查询当前用户余额失败！", common_1['HttpStatus']["BAD_REQUEST"]);
        }
      }

      _0x12f5ca["sumModel3Count"] = _0x12f5ca["packageId"] ? _0x12f5ca["model3Count"] + _0x12f5ca["memberModel3Count"] : _0x12f5ca["model3Count"];
      _0x12f5ca["sumModel4Count"] = _0x12f5ca['packageId'] ? _0x12f5ca["model4Count"] + _0x12f5ca["memberModel4Count"] : _0x12f5ca['model4Count'];
      _0x12f5ca["sumDrawMjCount"] = _0x12f5ca["packageId"] ? _0x12f5ca["drawMjCount"] + _0x12f5ca["memberDrawMjCount"] : _0x12f5ca["drawMjCount"];
      _0x12f5ca['expirationTime'] = _0x12f5ca["expirationTime"] ? (0, date_1["formatDate"])(_0x12f5ca['expirationTime'], "YYYY-MM-DD") : null;
      return _0x12f5ca;
    } catch (_0x331f9c) {
      console['log']("error: ", _0x331f9c);
    }
  }

  async ["saveRecordRechargeLog"](_0x241a56) {
    const {
      "userId": _0x2e485b,
      "rechargeType": _0x37fccd,
      "model3Count": _0x3f624f,
      "model4Count": _0x39410f,
      "drawMjCount": _0xc4c05,
      "days": days = -1,
      "pkgName": pkgName = '',
      "extent": extent = ''
    } = _0x241a56;

    if (!_0x2e485b) {
      throw new common_1["HttpException"]('当前用户不存在,记录充值日志异常', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x109fda = (0, utils_1["createRandomUid"])();

    return await this["accountLogEntity"]["save"]({
      'userId': _0x2e485b,
      'rechargeType': _0x37fccd,
      'model3Count': _0x3f624f,
      'model4Count': _0x39410f,
      'drawMjCount': _0xc4c05,
      'days': days,
      'extent': extent,
      'uid': _0x109fda,
      'pkgName': pkgName
    });
  }

  async ["createBaseUserBalance"](_0x4d3f93, _0x3cdc98 = {}) {
    const {
      "model3Count": model3Count = 0,
      "model4Count": model4Count = 0,
      "drawMjCount": drawMjCount = 0
    } = _0x3cdc98,
          _0x38b7e6 = await this["userBalanceEntity"]["findOne"]({
      'where': {
        'userId': _0x4d3f93
      }
    });

    if (_0x38b7e6) {
      throw new common_1["HttpException"]('当前用户无需创建账户信息！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return await this['userBalanceEntity']["save"]({
      'userId': _0x4d3f93,
      'model3Count': model3Count,
      'model4Count': model4Count,
      'drawMjCount': drawMjCount
    });
  }

  async ["addBalanceToUser"](_0x318a47, _0x5f2649, _0x39ee76 = -1) {
    try {
      const _0x3112bc = (await this["userBalanceEntity"]["findOne"]({
        'where': {
          'userId': _0x318a47
        }
      })) || (await this["createBaseUserBalance"](_0x318a47));

      if (!_0x3112bc) {
        throw new common_1["HttpException"]("查询用户账户信息失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "model3Count": _0x275211,
        "model4Count": _0x187c92,
        "drawMjCount": _0x50c79b,
        "memberModel3Count": _0x20be25,
        "memberModel4Count": _0x512bde,
        "memberDrawMjCount": _0x5a9185
      } = _0x3112bc;
      let _0x339108 = {};

      if (_0x39ee76 > 0) {
        const {
          "packageId": _0x3b0f68
        } = _0x5f2649;

        if (!_0x3b0f68) {
          throw new common_1["HttpException"]('缺失当前套餐ID、充值失败！', common_1["HttpStatus"]["BAD_REQUEST"]);
        }

        const _0x1bbec9 = await this["cramiPackageEntity"]["findOne"]({
          'where': {
            'id': _0x3b0f68
          }
        });

        if (!_0x1bbec9) {
          throw new common_1['HttpException']("当前套餐不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
        }

        const {
          "weight": _0x471d5a
        } = _0x1bbec9;

        if (!_0x3112bc["packageId"]) {
          _0x339108 = {
            'memberModel3Count': _0x275211 + _0x5f2649["model3Count"],
            'memberModel4Count': _0x187c92 + _0x5f2649["model4Count"],
            'memberDrawMjCount': _0x50c79b + _0x5f2649["drawMjCount"],
            'expirationTime': (0, date_1["default"])()["add"](_0x39ee76 > 0 ? _0x39ee76 : 0, "day")["format"]("YYYY-MM-DD HH:mm:ss"),
            'packageId': _0x3b0f68
          };
        } else {
          const _0x114867 = await this['cramiPackageEntity']["findOne"]({
            'where': {
              'id': _0x3112bc["packageId"]
            }
          });

          _0x471d5a >= _0x114867['weight'] && (_0x339108 = {
            'memberModel3Count': _0x20be25 + _0x5f2649["model3Count"],
            'memberModel4Count': _0x512bde + _0x5f2649["model4Count"],
            'memberDrawMjCount': _0x5a9185 + _0x5f2649["drawMjCount"],
            'expirationTime': (0, date_1["default"])(_0x3112bc["expirationTime"])["add"](_0x39ee76 > 0 ? _0x39ee76 : 0, "day")["format"]("YYYY-MM-DD HH:mm:ss"),
            'packageId': _0x3b0f68
          });
          _0x471d5a < _0x114867["weight"] && (_0x339108 = {
            'memberModel3Count': _0x20be25 + _0x5f2649["model3Count"],
            'memberModel4Count': _0x512bde + _0x5f2649["model4Count"],
            'memberDrawMjCount': _0x5a9185 + _0x5f2649["drawMjCount"]
          });
        }
      }

      _0x39ee76 <= 0 && (_0x339108 = {
        'model3Count': _0x275211 + _0x5f2649["model3Count"],
        'model4Count': _0x187c92 + _0x5f2649["model4Count"],
        'drawMjCount': _0x50c79b + _0x5f2649["drawMjCount"]
      });

      const _0x4e706f = await this["userBalanceEntity"]['update']({
        'userId': _0x318a47
      }, _0x339108);

      if (_0x4e706f['affected'] === 0) {
        throw new common_1["HttpException"](_0x318a47 + "充值失败", common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    } catch (_0x3a5bc4) {
      console['log']("error: ", _0x3a5bc4);
      throw new common_1['HttpException']("用户充值失败！", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["addBalanceToOrder"](_0x275235) {
    console['log']("充值的工单信息:", _0x275235);

    try {
      const {
        "userId": _0x45a611,
        "goodsId": _0xa7cdc6
      } = _0x275235,
            _0x4662cb = await this['cramiPackageEntity']['findOne']({
        'where': {
          'id': _0x275235["goodsId"],
          'status': 1
        }
      });

      if (!_0x4662cb) {
        throw new common_1["HttpException"]("非法操作、当前充值套餐暂不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "model3Count": _0x2fc0dc,
        "model4Count": _0x935ca,
        "drawMjCount": _0x5b4123,
        "days": _0x289f43,
        "name": _0xbdf981
      } = _0x4662cb,
            _0x5be403 = {
        'model3Count': _0x2fc0dc,
        'model4Count': _0x935ca,
        'drawMjCount': _0x5b4123,
        'days': _0x289f43,
        'packageId': _0x275235["goodsId"]
      };
      await this["addBalanceToUser"](_0x45a611, _0x5be403, _0x289f43);
      await this["saveRecordRechargeLog"]({
        'userId': _0x45a611,
        'rechargeType': balance_constant_1['RechargeType']['SCAN_PAY'],
        'model3Count': _0x2fc0dc,
        'model4Count': _0x935ca,
        'drawMjCount': _0x5b4123,
        'pkgName': _0xbdf981,
        'days': _0x289f43
      });

      const _0x4fa6cf = await this["userEntity"]["findOne"]({
        'where': {
          'id': _0x45a611
        }
      }),
            {
        "invitedBy": _0x5c7b83
      } = _0x4fa6cf;

      if (_0x5c7b83) {
        const _0x1dca78 = await this["userEntity"]["findOne"]({
          'where': {
            'inviteCode': _0x5c7b83
          }
        }),
              _0x2cc0af = await this["salesUsersEntity"]['findOne']({
          'where': {
            'userId': _0x1dca78['id']
          }
        });

        if (!_0x1dca78) {
          return;
        }

        const {
          "id": _0x33136d
        } = _0x1dca78,
              {
          "performanceRatio": _0x53201c
        } = _0x2cc0af,
              _0xf8c82e = {
          'inviterUserId': _0x33136d,
          'inviteeUserId': _0x45a611,
          'orderId': _0x275235['id'],
          'orderPrice': _0x275235['total'],
          'commissionPercentage': _0x53201c,
          'commissionAmount': (_0x275235["total"] * _0x53201c / 100)["toFixed"](2)
        };
        await this["salesService"]["createSalesRecords"](_0xf8c82e);
        await this["salesService"]["saveCommissionAmount"](_0x33136d, _0xf8c82e["commissionAmount"]);
      }
    } catch (_0x13dc07) {
      console['log']("error: ", _0x13dc07);
      throw new common_1["HttpException"]("充值失败！", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["getRechargeLog"](_0x35661b, _0xb1fd22) {
    const {
      "page": page = 1,
      "size": size = 20
    } = _0xb1fd22,
          {
      "id": _0x511e21
    } = _0x35661b["user"],
          [_0x3ceb10, _0x58c227] = await this["accountLogEntity"]["findAndCount"]({
      'where': {
        'userId': _0x511e21
      },
      'order': {
        'id': "DESC"
      },
      'skip': (page - 1) * size,
      'take': size
    });

    _0x3ceb10['forEach'](_0x234901 => {
      _0x234901["expireDateCn"] = _0x234901["days"] > 0 ? _0x234901["days"] + '天' : '永久';
    });

    return {
      'rows': (0, date_1['formatCreateOrUpdateDate'])(_0x3ceb10),
      'count': _0x58c227
    };
  }

  async ["getAccountLog"](_0x3e267f, _0x51fe8b) {
    try {
      const {
        "page": page = 1,
        "size": size = 10,
        "userId": _0xf14ebd,
        "rechargeType": _0x13faea,
        "packageId": _0x17bb99
      } = _0x51fe8b,
            {
        "role": _0xb2a585
      } = _0x3e267f['user'],
            _0x4ee62f = {};
      _0x13faea && (_0x4ee62f["rechargeType"] = _0x13faea);
      _0xf14ebd && (_0x4ee62f['userId'] = _0xf14ebd);
      _0x17bb99 && (_0x4ee62f["packageId"] = {
        '$like': '%' + _0x17bb99 + '%'
      });

      const [_0x412782, _0x4b5564] = await this['accountLogEntity']["findAndCount"]({
        'where': _0x4ee62f,
        'order': {
          'id': 'DESC'
        },
        'skip': (page - 1) * size,
        'take': size
      }),
            _0x3279bb = _0x412782["map"](_0x154410 => _0x154410["userId"]),
            _0x596940 = await this["userEntity"]["find"]({
        'where': {
          'id': (0, typeorm_2['In'])(_0x3279bb)
        }
      });

      _0x412782["forEach"](_0x2c0129 => {
        const _0x5b04b0 = _0x596940['find'](_0x50e6a8 => _0x50e6a8['id'] === _0x2c0129["userId"]);

        _0x2c0129["username"] = _0x5b04b0['username'];
        _0x2c0129['email'] = _0x5b04b0["email"];
        _0x2c0129['phone'] = _0x5b04b0["phone"];
        _0x2c0129['status'] = _0x5b04b0["status"];
        _0x2c0129["avatar"] = _0x5b04b0['avatar'];
      });

      _0xb2a585 !== "super" && _0x412782["forEach"](_0x175edd => {
        _0x175edd["email"] = _0x175edd["email"] ? (0, utils_1["hideString"])(_0x175edd['email']) : '';
        _0x175edd["phone"] = _0x175edd['phone'] ? (0, utils_1["hideString"])(_0x175edd["phone"]) : '';
      });
      return {
        'rows': _0x412782,
        'count': _0x4b5564
      };
    } catch (_0x48e9b8) {
      console['log']("error: ", _0x48e9b8);
      throw new common_1['HttpException']("查询用户账户失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["queryUserBalanceByIds"](_0x43a840) {
    return await this["userBalanceEntity"]['find']({
      'where': {
        'userId': (0, typeorm_2['In'])(_0x43a840)
      }
    });
  }

  async ["refundMjBalance"](_0x142e3c, _0x3ce4d9) {
    await this["addBalanceToUser"](_0x142e3c, {
      'model3Count': 0,
      'model4Count': 0,
      'drawMjCount': _0x3ce4d9
    });
    await this['saveRecordRechargeLog']({
      'userId': _0x142e3c,
      'rechargeType': balance_constant_1["RechargeType"]['DRAW_FAIL_REFUND'],
      'model3Count': 0,
      'model4Count': 0,
      'drawMjCount': _0x3ce4d9
    });
    common_1["Logger"]["debug"]('用户' + _0x142e3c + "绘画失败退款--------》" + _0x3ce4d9, "BalanceService");
  }

  async ["upgradeBalance"]() {
    const _0x2becb2 = await this['userEntity']["find"]();

    if (!_0x2becb2['length']) {
      return;
    }

    const _0x4a9bdd = await this['globalConfigService']["getConfigs"](['upgradeStatus']);

    if (!_0x4a9bdd) {
      await this["globalConfigService"]["setConfig"]({
        'settings': [{
          'configKey': "upgradeStatus",
          'configVal': '1'
        }]
      });
    } else {
      throw new common_1['HttpException']('您已经升级过了、请勿重复操作！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    _0x2becb2['forEach'](_0x237c8a => {
      const {
        "id": _0x486989
      } = _0x237c8a;
      this["balanceEntity"]['findOne']({
        'where': {
          'userId': _0x486989
        }
      })["then"](_0xb84bcd => {
        if (!_0xb84bcd) {
          return;
        }

        this["writeOldBalanceToNewTable"](_0x486989, _0xb84bcd);
      });
    });
  }

  async ['writeOldBalanceToNewTable'](_0x23b453, _0x5714ab) {
    const {
      "balance": balance = 0,
      "usesLeft": usesLeft = 0,
      "paintCount": paintCount = 0,
      "useTokens": useTokens = 0,
      "useChats": useChats = 0,
      "usePaints": usePaints = 0
    } = _0x5714ab,
          _0x2f52e2 = await this['whiteListEntity']["findOne"]({
      'where': {
        'userId': _0x23b453
      }
    }),
          _0x487b13 = {
      'userId': _0x23b453,
      'model3Count': Number(usesLeft),
      'model4Count': (_0x2f52e2 === null || _0x2f52e2 === void 0 ? void 0 : _0x2f52e2["count"]) || 0,
      'drawMjCount': Number(balance),
      'useModel3Count': Number(useChats),
      'useModel4Count': (_0x2f52e2 === null || _0x2f52e2 === void 0 ? void 0 : _0x2f52e2["useCount"]) || 0,
      'useDrawMjCount': Number(usePaints),
      'useModel3Token': Number(useTokens),
      'useModel4Token': 0,
      'useDrawMjToken': 0
    },
          _0x15996e = await this["userBalanceEntity"]["findOne"]({
      'where': {
        'userId': _0x23b453
      }
    });

    _0x15996e ? common_1["Logger"]["debug"]('用户' + _0x23b453 + "账户信息已经存在、迁移无效", "BalanceService") : this["userBalanceEntity"]["save"](_0x487b13)["then"](_0x3c4213 => {
      common_1["Logger"]["debug"]('用户' + _0x23b453 + "旧账户信息迁移成功", "BalanceService");
    })["catch"](_0x1de5c2 => {
      console["log"]("error: ", _0x1de5c2);
      common_1["Logger"]["debug"]('用户' + _0x23b453 + '旧账户信息迁移失败', "BalanceService");
    });
  }

};
UserBalanceService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(balance_entity_1["BalanceEntity"])), __param(1, (0, typeorm_1['InjectRepository'])(userBalance_entity_1["UserBalanceEntity"])), __param(2, (0, typeorm_1["InjectRepository"])(accountLog_entity_1["AccountLogEntity"])), __param(3, (0, typeorm_1["InjectRepository"])(cramiPackage_entity_1["CramiPackageEntity"])), __param(4, (0, typeorm_1["InjectRepository"])(config_entity_1["ConfigEntity"])), __param(5, (0, typeorm_1["InjectRepository"])(user_entity_1['UserEntity'])), __param(6, (0, typeorm_1['InjectRepository'])(salesUsers_entity_1["SalesUsersEntity"])), __param(7, (0, typeorm_1["InjectRepository"])(whiteList_entity_1["WhiteListEntity"])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2['Repository'], typeorm_2['Repository'], typeorm_2["Repository"], typeorm_2['Repository'], typeorm_2["Repository"], typeorm_2['Repository'], sales_service_1["SalesService"], globalConfig_service_1['GlobalConfigService']])], UserBalanceService);
exports['UserBalanceService'] = UserBalanceService;