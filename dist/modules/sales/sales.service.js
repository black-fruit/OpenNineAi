'use strict';

var __decorate = this && this['__decorate'] || function (_0xa5b725, _0x32c4fb, _0x4edd8f, _0x557d16) {
  var _0x2c1c9f = arguments["length"],
      _0x5304ce = _0x2c1c9f < 3 ? _0x32c4fb : _0x557d16 === null ? _0x557d16 = Object["getOwnPropertyDescriptor"](_0x32c4fb, _0x4edd8f) : _0x557d16,
      _0x2a2ce2;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === 'function') {
    _0x5304ce = Reflect['decorate'](_0xa5b725, _0x32c4fb, _0x4edd8f, _0x557d16);
  } else {
    for (var _0x5ef725 = _0xa5b725['length'] - 1; _0x5ef725 >= 0; _0x5ef725--) {
      if (_0x2a2ce2 = _0xa5b725[_0x5ef725]) {
        _0x5304ce = (_0x2c1c9f < 3 ? _0x2a2ce2(_0x5304ce) : _0x2c1c9f > 3 ? _0x2a2ce2(_0x32c4fb, _0x4edd8f, _0x5304ce) : _0x2a2ce2(_0x32c4fb, _0x4edd8f)) || _0x5304ce;
      }
    }
  }

  _0x2c1c9f > 3 && _0x5304ce && Object["defineProperty"](_0x32c4fb, _0x4edd8f, _0x5304ce);
  return _0x5304ce;
},
    __metadata = this && this["__metadata"] || function (_0x32ec77, _0x708f93) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x32ec77, _0x708f93);
  }
},
    __param = this && this["__param"] || function (_0x46963d, _0x161923) {
  return function (_0x2c599a, _0x1f2759) {
    _0x161923(_0x2c599a, _0x1f2759, _0x46963d);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['SalesService'] = void 0;

const globalConfig_service_1 = require("./../globalConfig/globalConfig.service"),
      common_1 = require('@nestjs/common'),
      salesUsers_entity_1 = require("./salesUsers.entity"),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm"),
      salesRecords_entity_1 = require("./salesRecords.entity"),
      utils_1 = require("../../common/utils"),
      user_entity_1 = require("../user/user.entity"),
      decimal_js_1 = require("decimal.js"),
      salesOrder_entity_1 = require("./salesOrder.entity");

let SalesService = class SalesService {
  constructor(_0xc22f8f, _0x462634, _0x44fcad, _0x5947a8, _0x32a48b) {
    this["salesUsersEntity"] = _0xc22f8f;
    this["salesRecordsEntity"] = _0x462634;
    this["userEntity"] = _0x44fcad;
    this["salesOrderEntity"] = _0x5947a8;
    this["globalConfigService"] = _0x32a48b;
  }

  async ["getMineAccount"](_0x4b960c) {
    try {
      const {
        "id": _0xf665ca
      } = _0x4b960c["user"];

      let _0x3b0be4 = await this['salesUsersEntity']['findOne']({
        'where': {
          'userId': _0xf665ca
        }
      });

      if (!_0x3b0be4) {
        const {
          "salesBaseRatio": salesBaseRatio = 10,
          "salesBaseTitle": salesBaseTitle = "新秀分销商"
        } = await this['globalConfigService']["getConfigs"](["salesBaseRatio", 'salesBaseTitle']);
        _0x3b0be4 = await this['creaetUserBaseSalesInfo']({
          'userId': _0xf665ca,
          'performanceRatio': Number(salesBaseRatio),
          'salesOutletName': salesBaseTitle
        });
      }

      const _0x4b82c8 = (0, utils_1["formatCreateOrUpdateDate"])(_0x3b0be4),
            _0x1d728f = await this["salesRecordsEntity"]['count']({
        'where': {
          'inviterUserId': _0xf665ca
        }
      }),
            _0x52d974 = await this["userEntity"]["findOne"]({
        'where': {
          'id': _0xf665ca
        }
      }),
            {
        "inviteLinkCount": _0x15c2e7,
        "inviteCode": _0x29a939
      } = _0x52d974,
            _0x552d71 = await this["userEntity"]["count"]({
        'where': {
          'invitedBy': _0x29a939
        }
      });

      return Object["assign"](Object["assign"]({}, _0x4b82c8), {
        'orderCount': _0x1d728f,
        'inviteCount': _0x552d71,
        'inviteLinkCount': _0x15c2e7
      });
    } catch (_0x799b7) {
      console["log"]("error: ", _0x799b7);
    }
  }

  async ["getMineRecords"](_0x3b1214, _0x380b46) {
    try {
      const {
        "id": _0x3df958
      } = _0x3b1214["user"],
            {
        "page": _0x387273,
        "size": _0x4b048e
      } = _0x380b46,
            [_0x33d440, _0x381593] = await this['salesRecordsEntity']["findAndCount"]({
        'where': {
          'inviterUserId': _0x3df958
        },
        'order': {
          'createdAt': "DESC"
        },
        'skip': (_0x387273 - 1) * _0x4b048e,
        'take': _0x4b048e
      });
      return {
        'rows': (0, utils_1["formatCreateOrUpdateDate"])(_0x33d440),
        'count': _0x381593
      };
    } catch (_0x2c5a3a) {
      console["log"]("error: ", _0x2c5a3a);
    }
  }

  async ["inviteRecords"](_0x2e7a5b, _0x2513ad) {
    try {
      const {
        "page": _0x44df2d,
        "size": _0x580e11,
        "orderId": _0x282766,
        "orderPrice": _0x56aa15
      } = _0x2513ad;
      let _0x47e8ae = {};
      _0x282766 && (_0x47e8ae = {
        'orderId': _0x282766
      });
      _0x56aa15 && (_0x47e8ae = {
        'orderPrice': _0x56aa15
      });
      const [_0x577257, _0x5e6958] = await this["salesRecordsEntity"]["findAndCount"]({
        'where': _0x47e8ae,
        'order': {
          'createdAt': "DESC"
        },
        'skip': (_0x44df2d - 1) * _0x580e11,
        'take': _0x580e11
      }),
            _0x20bed3 = [];

      _0x577257["map"](_0x54addb => {
        _0x20bed3["push"](_0x54addb["inviterUserId"]);

        _0x20bed3["push"](_0x54addb["inviteeUserId"]);
      });

      const _0x53eee2 = await this["userEntity"]["find"]({
        'where': {
          'id': (0, typeorm_2['In'])(_0x20bed3)
        }
      });

      _0x577257['forEach'](_0x3594d2 => {
        const _0x362310 = _0x53eee2["find"](_0x5b0590 => _0x5b0590['id'] === _0x3594d2["inviterUserId"]),
              _0x392430 = _0x53eee2['find'](_0x2a9044 => _0x2a9044['id'] === _0x3594d2["inviteeUserId"]),
              {
          "username": _0x5c35ed,
          "email": _0x7954ff,
          "avatar": _0x2593d8
        } = _0x53eee2["find"](_0x3bb70c => _0x3bb70c['id'] === _0x3594d2["inviterUserId"]);

        _0x3594d2['inviterUsername'] = _0x362310 === null || _0x362310 === void 0 ? void 0 : _0x362310["username"];
        _0x3594d2["inviterEmail"] = _0x362310 === null || _0x362310 === void 0 ? void 0 : _0x362310["email"];
        _0x3594d2["inviterAvatar"] = _0x362310 === null || _0x362310 === void 0 ? void 0 : _0x362310["avatar"];
        _0x3594d2["inviteeUsername"] = _0x392430 === null || _0x392430 === void 0 ? void 0 : _0x392430["username"];
        _0x3594d2['inviteeEmail'] = _0x392430 === null || _0x392430 === void 0 ? void 0 : _0x392430['email'];
        _0x3594d2["inviteeAvatar"] = _0x392430 === null || _0x392430 === void 0 ? void 0 : _0x392430['avatar'];
      });

      _0x2e7a5b["user"]["role"] !== "super" && _0x577257["forEach"](_0x4c7dca => {
        _0x4c7dca["inviterEmail"] = _0x4c7dca["inviterEmail"] ? (0, utils_1["hideString"])(_0x4c7dca["inviterEmail"]) : '';
        _0x4c7dca["inviteeEmail"] = _0x4c7dca["inviteeEmail"] ? (0, utils_1["hideString"])(_0x4c7dca["inviteeEmail"]) : '';
      });
      return {
        'rows': (0, utils_1["formatCreateOrUpdateDate"])(_0x577257),
        'count': _0x5e6958
      };
    } catch (_0x59fd35) {
      console["log"]("error: ", _0x59fd35);
    }
  }

  async ["creaetUserBaseSalesInfo"](_0x126831) {
    const {
      "userId": _0x40b176,
      "performanceRatio": _0x3a4bfe,
      "salesOutletName": _0x15142e
    } = _0x126831;
    return await this["salesUsersEntity"]["save"]({
      'userId': _0x40b176,
      'performanceRatio': _0x3a4bfe,
      'salesOutletName': _0x15142e
    });
  }

  async ["changeUserBaseSalesInfo"](_0x13fa37) {
    return await this["salesUsersEntity"]["save"](_0x13fa37);
  }

  async ["createSalesRecords"](_0x25dfdf) {
    return await this["salesRecordsEntity"]["save"](_0x25dfdf);
  }

  async ["saveCommissionAmount"](_0x13ea29, _0x114517) {
    const _0xc84764 = await this["salesUsersEntity"]["findOne"]({
      'where': {
        'userId': _0x13ea29
      }
    });

    if (!_0xc84764) {
      return;
    }

    const {
      "totalAmount": _0x4af0f9,
      "distributionBalance": _0x385ca2
    } = _0xc84764;
    console["log"]("totalAmount, distributionBalance: ", _0x4af0f9, _0x385ca2);
    return await this["salesUsersEntity"]["update"]({
      'userId': _0x13ea29
    }, {
      'totalAmount': new decimal_js_1["default"](_0x4af0f9)["plus"](_0x114517)["toNumber"](),
      'distributionBalance': new decimal_js_1["default"](_0x385ca2)["plus"](_0x114517)["toNumber"]()
    });
  }

  async ["appForMoney"](_0x253633, _0x5440f7) {
    const {
      "id": _0x4e0923
    } = _0x253633["user"],
          {
      "withdrawalAmount": _0x5d50fd,
      "withdrawalChannels": _0x571a4f,
      "contactInformation": _0x138d7b,
      "remark": _0x3f022f
    } = _0x5440f7,
          _0x30747b = (await this['globalConfigService']["getConfigs"](['salesAllowDrawMoney'])) || 10;

    if (typeof _0x5d50fd !== 'number' || _0x5d50fd <= 0) {
      throw new common_1["HttpException"]("提现金额必须为数字且大于0", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (Number(_0x5d50fd) < Number(_0x30747b)) {
      throw new common_1["HttpException"]("提现金额最低必须为" + _0x30747b + '元', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x58d901 = await this["salesUsersEntity"]['findOne']({
      'where': {
        'userId': _0x4e0923
      }
    }),
          {
      "distributionBalance": _0x4b8963,
      "drawMoneyIn": _0x4cd5ad
    } = _0x58d901;

    if (Number(_0x4b8963) < Number(_0x5d50fd)) {
      throw new common_1["HttpException"]("提现金额不足", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x37722f = {
      'userId': _0x4e0923,
      'withdrawalAmount': _0x5d50fd,
      'orderStatus': 0,
      'auditStatus': 0,
      'withdrawalChannels': _0x571a4f,
      'contactInformation': _0x138d7b,
      'remark': _0x3f022f
    };
    await this['createOrder'](_0x37722f);
  }

  async ['drawMoneyOrder'](_0x35c078, _0xb479c5) {
    const {
      "id": _0x5368e1
    } = _0x35c078["user"],
          {
      "page": _0x1d55da,
      "size": _0x87032
    } = _0xb479c5,
          [_0x48d1aa, _0x18f53b] = await this["salesOrderEntity"]["findAndCount"]({
      'where': {
        'userId': _0x5368e1
      },
      'order': {
        'createdAt': "DESC"
      },
      'skip': (_0x1d55da - 1) * _0x87032,
      'take': _0x87032
    }),
          _0x469739 = _0x48d1aa["map"](_0x2b31a3 => _0x2b31a3["auditUserId"]),
          _0x1a3742 = await this["userEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x469739)
      }
    });

    _0x48d1aa['forEach'](_0x24a533 => {
      const _0x46f602 = _0x1a3742['find'](_0x11eb7c => _0x11eb7c['id'] === _0x24a533["auditUserId"]);

      _0x24a533["auditUserName"] = _0x46f602 ? _0x46f602["username"] : '';
    });

    return {
      'rows': (0, utils_1["formatCreateOrUpdateDate"])(_0x48d1aa),
      'count': _0x18f53b
    };
  }

  async ['salesOrder'](_0x1c045f, _0x4cad4f) {
    const {
      "page": _0x2c0277,
      "size": _0x181370
    } = _0x4cad4f,
          _0x4be9e2 = {};
    _0x4cad4f["orderStatus"] !== undefined && _0x4cad4f["orderStatus"] !== '' && (_0x4be9e2["orderStatus"] = _0x4cad4f["orderStatus"]);
    _0x4cad4f["withdrawalChannels"] && (_0x4be9e2["withdrawalChannels"] = _0x4cad4f["withdrawalChannels"]);

    const [_0x3fb5e6, _0x3a981f] = await this["salesOrderEntity"]["findAndCount"]({
      'where': _0x4be9e2,
      'order': {
        'createdAt': "DESC"
      },
      'skip': (_0x2c0277 - 1) * _0x181370,
      'take': _0x181370
    }),
          _0x24624e = _0x3fb5e6["map"](_0x5b47c6 => _0x5b47c6["userId"]),
          _0x1e41e6 = await this['userEntity']["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x24624e)
      }
    });

    _0x3fb5e6['forEach'](_0x502dd1 => {
      const _0x26abd6 = _0x1e41e6["find"](_0x16031c => _0x16031c['id'] === _0x502dd1["userId"]);

      if (_0x26abd6) {
        const {
          "username": _0xaadda3,
          "email": _0x3c41cc,
          "avatar": _0x56c884
        } = _0x26abd6;
        _0x502dd1["userInfo"] = {
          'username': _0xaadda3,
          'avatar': _0x56c884,
          'email': (0, utils_1["hideString"])(_0x3c41cc)
        };
      }
    });

    return {
      'rows': (0, utils_1["formatCreateOrUpdateDate"])(_0x3fb5e6),
      'count': _0x3a981f
    };
  }

  async ["createOrder"](_0x5e0596) {
    try {
      return await this['salesOrderEntity']["save"](_0x5e0596);
    } catch (_0x379234) {
      console["log"]("error: ", _0x379234);
      throw new common_1["HttpException"]('创建提现工单失败', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["auditOrder"](_0x58a735, _0x1c510c) {
    try {
      const {
        "id": _0x4a694e
      } = _0x58a735['user'],
            {
        "id": _0x5b39f3,
        "status": _0x498d0b
      } = _0x1c510c;

      if (![1, -1]['includes'](_0x498d0b)) {
        throw new common_1['HttpException']("审核状态错误", common_1["HttpStatus"]['BAD_REQUEST']);
      }

      const _0x25bc3c = await this["salesOrderEntity"]['findOne']({
        'where': {
          'id': _0x5b39f3
        }
      });

      if (_0x25bc3c["orderStatus"] !== 0) {
        throw new common_1["HttpException"]("该工单已审核过", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0xa0b730 = await this["salesUsersEntity"]['findOne']({
        'where': {
          'userId': _0x25bc3c["userId"]
        }
      }),
            {
        "withdrawalAmount": _0x2fe698,
        "drawMoneyIn": _0x55dc29
      } = _0xa0b730,
            _0x25aeef = new decimal_js_1["default"](_0x2fe698)["plus"](_0x25bc3c["withdrawalAmount"])['toNumber'](),
            _0x780179 = new decimal_js_1["default"](_0x55dc29)["minus"](_0x25bc3c['withdrawalAmount'])["toNumber"]();

      await this['salesUsersEntity']["update"]({
        'userId': _0x25bc3c['userId']
      }, {
        'withdrawalAmount': _0x25aeef,
        'drawMoneyIn': _0x780179
      });
      await this["salesOrderEntity"]['update']({
        'id': _0x5b39f3
      }, {
        'orderStatus': _0x498d0b,
        'auditStatus': _0x498d0b,
        'auditUserId': _0x4a694e,
        'paymentStatus': _0x498d0b
      });
      return "审核完成";
    } catch (_0x1808a4) {
      console["log"]("error: ", _0x1808a4);
      throw new common_1["HttpException"]("审核失败", common_1["HttpStatus"]['BAD_REQUEST']);
    }
  }

  async ['salesUserList'](_0x5015df, _0x97b46d) {
    const {
      "page": _0x3c50f5,
      "size": _0x1aa541,
      "salesOutletName": _0x12eef2,
      "performanceRatio": _0x364e14
    } = _0x97b46d,
          _0x44ea27 = {};
    _0x12eef2 && (_0x44ea27["salesOutletName"] = (0, typeorm_2['Like'])('%' + _0x12eef2 + '%'));
    _0x364e14 && (_0x44ea27['performanceRatio'] = _0x364e14);

    const [_0x2546da, _0x3fb464] = await this["salesUsersEntity"]["findAndCount"]({
      'where': _0x44ea27,
      'order': {
        'id': "DESC"
      },
      'skip': (_0x3c50f5 - 1) * _0x1aa541,
      'take': _0x1aa541
    }),
          _0x3c91cb = _0x2546da["map"](_0x4d6e26 => _0x4d6e26["userId"]),
          _0x313f16 = await this["userEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x3c91cb)
      }
    });

    _0x2546da["forEach"](_0x13ba7b => {
      const _0x5dfa98 = _0x313f16['find'](_0x27be8b => _0x27be8b['id'] === _0x13ba7b["userId"]);

      _0x13ba7b["userInfo"] = _0x5dfa98 ? _0x5dfa98 : {};
    });

    _0x5015df["user"]["role"] !== "super" && _0x2546da["forEach"](_0x17682e => {
      var _0x452cba, _0x293cc9;

      _0x17682e["userInfo"]["email"] = ((_0x452cba = _0x17682e["userInfo"]) === null || _0x452cba === void 0 ? void 0 : _0x452cba["email"]) ? (0, utils_1["hideString"])((_0x293cc9 = _0x17682e["userInfo"]) === null || _0x293cc9 === void 0 ? void 0 : _0x293cc9["email"]) : '';
    });
    return {
      'rows': _0x2546da,
      'count': _0x3fb464
    };
  }

  async ["updateUserSales"](_0x26a061, _0x12cd92) {
    const {
      "performanceRatio": _0x2fe869,
      "salesOutletName": _0xa107ba,
      "userId": _0x6840b2
    } = _0x12cd92,
          _0x4fb917 = await this["salesUsersEntity"]["findOne"]({
      'where': {
        'userId': _0x6840b2
      }
    });

    if (!_0x4fb917) {
      throw new common_1['HttpException']("用户不存在", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x29838b = await this["salesUsersEntity"]["update"]({
      'userId': _0x6840b2
    }, {
      'performanceRatio': _0x2fe869,
      'salesOutletName': _0xa107ba
    });

    if (_0x29838b["affected"] > 0) {
      return "修改成功";
    } else {
      throw new common_1["HttpException"]("修改失败", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

};
SalesService = __decorate([(0, common_1['Injectable'])(), __param(0, (0, typeorm_1["InjectRepository"])(salesUsers_entity_1['SalesUsersEntity'])), __param(1, (0, typeorm_1["InjectRepository"])(salesRecords_entity_1["SalesRecordsEntity"])), __param(2, (0, typeorm_1["InjectRepository"])(user_entity_1['UserEntity'])), __param(3, (0, typeorm_1["InjectRepository"])(salesOrder_entity_1["SalesOrderEntity"])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2["Repository"], globalConfig_service_1["GlobalConfigService"]])], SalesService);
exports["SalesService"] = SalesService;