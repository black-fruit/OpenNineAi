'use strict';

var __decorate = this && this["__decorate"] || function (_0x4eeaf2, _0x1eef3d, _0x53032b, _0x1057bb) {
  var _0x105073 = arguments['length'],
      _0x51c6aa = _0x105073 < 3 ? _0x1eef3d : _0x1057bb === null ? _0x1057bb = Object["getOwnPropertyDescriptor"](_0x1eef3d, _0x53032b) : _0x1057bb,
      _0x44659c;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x51c6aa = Reflect['decorate'](_0x4eeaf2, _0x1eef3d, _0x53032b, _0x1057bb);
  } else {
    for (var _0x584414 = _0x4eeaf2["length"] - 1; _0x584414 >= 0; _0x584414--) {
      if (_0x44659c = _0x4eeaf2[_0x584414]) {
        _0x51c6aa = (_0x105073 < 3 ? _0x44659c(_0x51c6aa) : _0x105073 > 3 ? _0x44659c(_0x1eef3d, _0x53032b, _0x51c6aa) : _0x44659c(_0x1eef3d, _0x53032b)) || _0x51c6aa;
      }
    }
  }

  _0x105073 > 3 && _0x51c6aa && Object['defineProperty'](_0x1eef3d, _0x53032b, _0x51c6aa);
  return _0x51c6aa;
},
    __metadata = this && this["__metadata"] || function (_0x4a512c, _0xe41386) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x4a512c, _0xe41386);
  }
},
    __param = this && this['__param'] || function (_0x4e59b1, _0x49d284) {
  return function (_0x381157, _0x241b7b) {
    _0x49d284(_0x381157, _0x241b7b, _0x4e59b1);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['OrderService'] = void 0;

const user_entity_1 = require("./../user/user.entity"),
      typeorm_1 = require("@nestjs/typeorm"),
      common_1 = require("@nestjs/common"),
      typeorm_2 = require("typeorm"),
      order_entity_1 = require("./order.entity"),
      cramiPackage_entity_1 = require('../crami/cramiPackage.entity'),
      utils_1 = require("../../common/utils"),
      pay_service_1 = require("../pay/pay.service"),
      globalConfig_service_1 = require('../globalConfig/globalConfig.service');

let OrderService = class OrderService {
  constructor(_0x2236c9, _0xa8b909, _0x120303, _0x4c185c, _0x32fd5) {
    this["orderEntity"] = _0x2236c9;
    this['cramiPackageEntity'] = _0xa8b909;
    this['userEntity'] = _0x120303;
    this["payService"] = _0x4c185c;
    this["globalConfigService"] = _0x32fd5;
  }

  async ["buy"](_0x5d4f11, _0x1d261e) {
    try {
      const {
        "goodsId": _0x2cb5f9,
        "count": count = 1,
        "payType": _0x1725bf
      } = _0x5d4f11,
            {
        "id": _0x15d34a
      } = _0x1d261e['user'],
            _0xaa9bc = await this['create'](_0x15d34a, _0x2cb5f9, count, _0x1725bf),
            _0x1ef210 = await this["payService"]["pay"](_0x15d34a, _0xaa9bc["orderId"], _0x1725bf);

      return Object['assign'](Object["assign"]({}, _0x1ef210), {
        'orderId': _0xaa9bc["orderId"],
        'platform': _0xaa9bc["payPlatform"],
        'total': _0xaa9bc["total"]
      });
    } catch (_0x3278ea) {
      console["log"]("error: ", _0x3278ea);
      throw new common_1['HttpException'](_0x3278ea["message"] || '购买失败!', common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["queryByOrderId"](_0x37fcf3, _0x5414de) {
    const {
      "id": _0x5833cc
    } = _0x37fcf3['user'],
          {
      "orderId": _0x3588c2
    } = _0x5414de,
          _0x31b5b4 = await this["orderEntity"]['findOne']({
      'where': {
        'userId': _0x5833cc,
        'orderId': _0x3588c2
      }
    });

    if (!_0x31b5b4) {
      throw new common_1["HttpException"]("订单不存在!", common_1['HttpStatus']['BAD_REQUEST']);
    }

    return _0x31b5b4;
  }

  async ["create"](_0x4d55dd, _0x22b3db, _0x469439, _0x344301) {
    const _0x32dab4 = await this["globalConfigService"]['queryPayType'](),
          _0x59e1a3 = await this["cramiPackageEntity"]['findOne']({
      'where': {
        'id': _0x22b3db
      }
    });

    if (!_0x59e1a3) {
      throw new common_1["HttpException"]("套餐不存在!", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x3b9624 = {
      "orderId": (0, utils_1["createOrderId"])()
    };
    console["log"]("do ", _0x3b9624["orderId"]);
    _0x3b9624["userId"] = _0x4d55dd;
    _0x3b9624["goodsId"] = _0x22b3db;
    _0x3b9624["price"] = Number(_0x59e1a3["price"]);
    _0x3b9624["count"] = _0x469439;
    _0x3b9624["total"] = Number(_0x59e1a3["price"]) * _0x469439;
    _0x3b9624["payPlatform"] = _0x32dab4;
    _0x3b9624['channel'] = _0x344301;

    const _0x503f3b = await this["orderEntity"]["save"](_0x3b9624);

    return _0x503f3b;
  }

  async ["query"](_0x2c6d3b, _0x2fee00, _0xa3dd2c) {
    return await this["orderEntity"]['findAndCount']({
      'where': {
        'userId': _0x2c6d3b
      },
      'order': {
        'id': "DESC"
      },
      'skip': (_0x2fee00 - 1) * _0xa3dd2c,
      'take': _0xa3dd2c
    });
  }

  async ["queryAllOrder"](_0x14132c) {
    const {
      "page": _0x209e87,
      "size": _0x19c1fb,
      "userId": _0x551a6e,
      "platform": _0x5872f8,
      "status": _0x20b189
    } = _0x14132c,
          _0x2ad783 = {};

    if (_0x551a6e) {
      _0x2ad783["userId"] = _0x551a6e;
    }

    if (_0x5872f8) {
      _0x2ad783["payPlatform"] = _0x5872f8;
    }

    if (_0x20b189) {
      _0x2ad783["status"] = _0x20b189;
    }

    const [_0x38dce2, _0x100e1f] = await this["orderEntity"]["findAndCount"]({
      'order': {
        'id': "DESC"
      },
      'where': _0x2ad783,
      'skip': (_0x209e87 - 1) * _0x19c1fb,
      'take': _0x19c1fb
    }),
          _0x107bd9 = _0x38dce2["map"](_0x4fb73f => _0x4fb73f["userId"]),
          _0x5175af = _0x38dce2["map"](_0x1f6224 => _0x1f6224["goodsId"]),
          _0x2e54ea = await this["userEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x107bd9)
      },
      'select': ['id', 'username', "email"]
    }),
          _0x979330 = await this["cramiPackageEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x5175af)
      },
      'select': ['id', "name", "coverImg", 'des']
    });

    _0x38dce2["forEach"](_0x2410ef => {
      _0x2410ef["userInfo"] = _0x2e54ea["find"](_0x4d16ad => _0x4d16ad['id'] === _0x2410ef["userId"]);
      _0x2410ef["goodsInfo"] = _0x979330["find"](_0x4c397a => _0x4c397a['id'] === _0x2410ef['goodsId']);
    });

    return {
      'rows': _0x38dce2,
      'count': _0x100e1f
    };
  }

  async ["deleteOrder"](_0x354126) {
    const {
      "orderId": _0x5262af
    } = _0x354126,
          _0x51330b = await this["orderEntity"]['findOne']({
      'where': {
        'orderId': _0x5262af
      }
    });

    if (!_0x51330b) {
      throw new common_1["HttpException"]("订单不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return await this["orderEntity"]["delete"]({
      'orderId': _0x5262af
    });
  }

};
OrderService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(order_entity_1["OrderEntity"])), __param(1, (0, typeorm_1["InjectRepository"])(cramiPackage_entity_1["CramiPackageEntity"])), __param(2, (0, typeorm_1["InjectRepository"])(user_entity_1["UserEntity"])), __metadata('design:paramtypes', [typeorm_2["Repository"], typeorm_2['Repository'], typeorm_2["Repository"], pay_service_1["PayService"], globalConfig_service_1["GlobalConfigService"]])], OrderService);
exports["OrderService"] = OrderService;