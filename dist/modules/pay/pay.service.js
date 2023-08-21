'use strict';

var __decorate = this && this["__decorate"] || function (_0x3e7bdd, _0x530741, _0x5858ae, _0x5f4d51) {
  var _0x3853bd = arguments["length"],
      _0x523722 = _0x3853bd < 3 ? _0x530741 : _0x5f4d51 === null ? _0x5f4d51 = Object["getOwnPropertyDescriptor"](_0x530741, _0x5858ae) : _0x5f4d51,
      _0x1ef32c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x523722 = Reflect['decorate'](_0x3e7bdd, _0x530741, _0x5858ae, _0x5f4d51);
  } else {
    for (var _0x3fab00 = _0x3e7bdd["length"] - 1; _0x3fab00 >= 0; _0x3fab00--) {
      if (_0x1ef32c = _0x3e7bdd[_0x3fab00]) {
        _0x523722 = (_0x3853bd < 3 ? _0x1ef32c(_0x523722) : _0x3853bd > 3 ? _0x1ef32c(_0x530741, _0x5858ae, _0x523722) : _0x1ef32c(_0x530741, _0x5858ae)) || _0x523722;
      }
    }
  }

  _0x3853bd > 3 && _0x523722 && Object['defineProperty'](_0x530741, _0x5858ae, _0x523722);
  return _0x523722;
},
    __metadata = this && this["__metadata"] || function (_0x280ce6, _0x36d940) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x280ce6, _0x36d940);
  }
},
    __param = this && this['__param'] || function (_0x343637, _0x192c72) {
  return function (_0x3106f3, _0x1becd1) {
    _0x192c72(_0x3106f3, _0x1becd1, _0x343637);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["PayService"] = void 0;

const typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require('typeorm'),
      common_1 = require("@nestjs/common"),
      crypto = require('crypto'),
      axios_1 = require("axios"),
      order_entity_1 = require("../order/order.entity"),
      cramiPackage_entity_1 = require('../crami/cramiPackage.entity'),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      globalConfig_service_1 = require("../globalConfig/globalConfig.service"),
      utils_1 = require('../../common/utils'),
      user_service_1 = require("../user/user.service");

let PayService = class PayService {
  constructor(_0x232c12, _0x14b892, _0x187f96, _0x4b39f5, _0x198ce4) {
    this['cramiPackageEntity'] = _0x232c12;
    this["orderEntity"] = _0x14b892;
    this["userBalanceService"] = _0x187f96;
    this["globalConfigService"] = _0x4b39f5;
    this["userService"] = _0x198ce4;
  }

  async ['onModuleInit']() {
    const _0x24b583 = await (0, utils_1["importDynamic"])('wechatpay-node-v3');

    this["WxPay"] = (_0x24b583 === null || _0x24b583 === void 0 ? void 0 : _0x24b583["default"]) ? _0x24b583["default"] : _0x24b583;
  }

  async ["notify"](_0x42aa06) {
    if (_0x42aa06["param"] == "epay") {
      return this['notifyEpay'](_0x42aa06);
    }

    if (_0x42aa06['attach'] == "hupi") {
      return this["notifyHupi"](_0x42aa06);
    }

    if (typeof _0x42aa06["resource"] == "object") {
      return this["notifyWeChat"](_0x42aa06);
    }

    return this['notifyMpay'](_0x42aa06);
  }

  async ['pay'](_0x5d98e1, _0x2f451c, _0x308e11 = "wxpay") {
    const _0x1e8c2c = await this["orderEntity"]["findOne"]({
      'where': {
        'userId': _0x5d98e1,
        'orderId': _0x2f451c
      }
    });

    if (!_0x1e8c2c) {
      throw new common_1["HttpException"]("订单不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x4012e0 = await this["cramiPackageEntity"]['findOne']({
      'where': {
        'id': _0x1e8c2c["goodsId"]
      }
    });

    if (!_0x4012e0) {
      throw new common_1["HttpException"]("套餐不存在!", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    console['log']("本次支付类型: ", _0x1e8c2c['payPlatform']);

    try {
      if (_0x1e8c2c["payPlatform"] == 'wechat') {
        return this["payWeChat"](_0x5d98e1, _0x2f451c, _0x308e11);
      }

      if (_0x1e8c2c["payPlatform"] == "epay") {
        return this["payEpay"](_0x5d98e1, _0x2f451c, _0x308e11);
      }

      if (_0x1e8c2c['payPlatform'] == "mpay") {
        return this["payMpay"](_0x5d98e1, _0x2f451c, _0x308e11);
      }

      if (_0x1e8c2c["payPlatform"] == 'hupi') {
        return this["payHupi"](_0x5d98e1, _0x2f451c, _0x308e11);
      }
    } catch (_0x29ab14) {
      console["log"]("支付请求失败: ", _0x29ab14);
      throw new common_1["HttpException"]('支付请求失败!', common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["query"](_0xa8b64) {
    const _0xee0319 = await this["orderEntity"]["findOne"]({
      'where': {
        'orderId': _0xa8b64
      }
    });

    if (!_0xee0319) {
      throw new common_1['HttpException']("订单不存在!", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    return _0xee0319;
  }

  async ["notifyHupi"](_0x2cae03) {
    const _0xdc8dc1 = await this["globalConfigService"]["getConfigs"](["payHupiSecret"]),
          _0x4d895c = _0x2cae03["hash"];

    delete _0x2cae03["hash"];

    if (this["sign"](_0x2cae03, _0xdc8dc1) != _0x4d895c) {
      return "failed";
    }

    const _0x229f15 = await this["orderEntity"]["findOne"]({
      'where': {
        'orderId': _0x2cae03["trade_order_id"],
        'status': 0
      }
    });

    if (!_0x229f15) {
      return 'failed';
    }

    await this['userBalanceService']["addBalanceToOrder"](_0x229f15);

    const _0x39146c = await this["orderEntity"]['update']({
      'orderId': _0x2cae03["trade_order_id"]
    }, {
      'status': 1,
      'paydAt': new Date()
    });

    if (_0x39146c["affected"] != 1) {
      return 'failed';
    }

    return "success";
  }

  async ["payHupi"](_0x4f357b, _0x34f2e2, _0x1f5351 = "wxpay") {
    const _0x36e41d = await this["orderEntity"]['findOne']({
      'where': {
        'userId': _0x4f357b,
        'orderId': _0x34f2e2
      }
    });

    if (!_0x36e41d) {
      throw new common_1['HttpException']('订单不存在!', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x3f69b6 = await this["cramiPackageEntity"]["findOne"]({
      'where': {
        'id': _0x36e41d['goodsId']
      }
    });

    if (!_0x3f69b6) {
      throw new common_1["HttpException"]("套餐不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "payHupiAppId": _0x103759,
      "payHupiSecret": _0x39166d,
      "payHupiNotifyUrl": _0x18fab1,
      "payHupiReturnUrl": _0x1be4d4
    } = await this["globalConfigService"]['getConfigs'](["payHupiAppId", "payHupiSecret", "payHupiNotifyUrl", 'payHupiReturnUrl']),
          _0x147468 = {
      "version": "1.1",
      "appid": _0x103759,
      "time": (Date["now"]() / 1000)['toFixed'](0),
      "nonce_str": (0, utils_1["createRandomNonceStr"])(32),
      "trade_order_id": _0x34f2e2,
      "title": _0x3f69b6["name"],
      "total_fee": _0x36e41d["total"],
      "notify_url": _0x18fab1,
      "return_url": _0x1be4d4,
      "attach": 'hupi',
      'hash': this['sign'](_0x147468, _0x39166d)
    };
    const {
      "data": {
        "errcode": _0x4f50d8,
        "errmsg": _0x442661,
        "url_qrcode": _0x251953,
        "url": _0x1ac515
      }
    } = await axios_1["default"]['post']("https://api.xunhupay.com/payment/do.html", _0x147468);

    if (_0x4f50d8 != 0) {
      throw new common_1["HttpException"](_0x442661, common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return {
      'url_qrcode': _0x251953,
      'url': _0x1ac515
    };
  }

  async ['queryHupi'](_0x1d14d2) {
    const {
      "payHupiAppId": _0x2b458e,
      "payHupiSecret": _0x4c42e6
    } = await this["globalConfigService"]['getConfigs'](["payHupiAppId", 'payHupiSecret']),
          _0x232a9b = {
      "version": "1.1",
      'appid': _0x2b458e,
      "time": (Date["now"]() / 1000)["toFixed"](0),
      'nonce_str': (0, utils_1["createRandomNonceStr"])(32),
      "out_trade_order": _0x1d14d2,
      'hash': this['sign'](_0x232a9b, _0x4c42e6)
    };
    const {
      "data": {
        "errcode": _0x42ae14,
        "errmsg": _0x41a201,
        "data": _0x50b14a
      }
    } = await axios_1["default"]["post"]("https://api.xunhupay.com/payment/query.html", _0x232a9b);

    if (_0x42ae14 != 0) {
      throw new common_1["HttpException"](_0x41a201, common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return _0x50b14a;
  }

  async ["notifyEpay"](_0x1c30c8) {
    const _0x1c3382 = _0x1c30c8['sign'];
    delete _0x1c30c8["sign"];
    delete _0x1c30c8["sign_type"];

    const _0x16ea03 = await this["globalConfigService"]["getConfigs"](['payEpaySecret']);

    if (this['sign'](_0x1c30c8, _0x16ea03) != _0x1c3382) {
      return "failed";
    }

    console["log"]('校验签名通过');

    const _0x23dca4 = await this["orderEntity"]["findOne"]({
      'where': {
        'orderId': _0x1c30c8["out_trade_no"],
        'status': 0
      }
    });

    if (!_0x23dca4) {
      return "failed";
    }

    const _0x141f0b = _0x1c30c8['trade_status'] == "TRADE_SUCCESS" ? 1 : 2,
          _0xc54d87 = await this["orderEntity"]["update"]({
      'orderId': _0x1c30c8["out_trade_no"]
    }, {
      'status': _0x141f0b,
      'paydAt': new Date()
    });

    _0x141f0b === 1 && (await this['userBalanceService']["addBalanceToOrder"](_0x23dca4));

    if (_0xc54d87["affected"] != 1) {
      return "failed";
    }

    return "success";
  }

  async ['payEpay'](_0x2c95fc, _0x24b7c5, _0x37907e = 'alipay') {
    const _0x1e0102 = await this["orderEntity"]["findOne"]({
      'where': {
        'userId': _0x2c95fc,
        'orderId': _0x24b7c5
      }
    });

    if (!_0x1e0102) {
      throw new common_1['HttpException']("订单不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0xf40353 = await this["cramiPackageEntity"]["findOne"]({
      'where': {
        'id': _0x1e0102["goodsId"]
      }
    });

    if (!_0xf40353) {
      throw new common_1["HttpException"]("套餐不存在!", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const {
      "payEpayPid": _0x1c8d97,
      "payEpaySecret": _0xa02001,
      "payEpayNotifyUrl": _0x3c9f7e,
      "payEpayReturnUrl": _0x502ebf,
      "payEpayApiPayUrl": _0x248623
    } = await this["globalConfigService"]["getConfigs"](["payEpayPid", "payEpaySecret", "payEpayNotifyUrl", "payEpayReturnUrl", 'payEpayApiPayUrl']);

    let _0xb8e0ad;

    _0x1c8d97["length"] <= 16 ? _0xb8e0ad = Number(_0x1c8d97) : _0xb8e0ad = BigInt(_0x1c8d97);
    const _0x2d0a54 = {
      "pid": _0xb8e0ad,
      "type": _0x37907e,
      'out_trade_no': _0x24b7c5,
      "name": _0xf40353['name'],
      "money": _0x1e0102["total"],
      "clientip": "192.168.1.100",
      "device": 'pc',
      "notify_url": _0x3c9f7e,
      "return_url": _0x502ebf,
      "param": "epay",
      "sign": this["sign"](_0x2d0a54, _0xa02001),
      "sign_type": "MD5"
    };

    const _0x340094 = new URLSearchParams(_0x2d0a54)["toString"](),
          _0x33fbd7 = _0x248623 + '?' + _0x340094;

    if (_0x248623["includes"]("submit.php")) {
      return {
        'url_qrcode': null,
        'redirectUrl': _0x33fbd7,
        'channel': _0x37907e,
        'isRedirect': true
      };
    } else {
      const _0x5cf3a1 = await axios_1['default']["get"](_0x248623, {
        'params': _0x2d0a54
      });

      console["log"]("epay ---> res: ", _0x5cf3a1["data"]);
      const {
        "data": {
          "code": _0x1e0d59,
          "msg": _0x166aca,
          "qrcode": _0x30b159
        }
      } = _0x5cf3a1;

      if (_0x1e0d59 != 1) {
        throw new common_1["HttpException"](_0x166aca, common_1["HttpStatus"]['BAD_REQUEST']);
      }

      return {
        'url_qrcode': _0x30b159,
        'redirectUrl': null,
        'channel': _0x37907e,
        'isRedirect': false
      };
    }
  }

  async ["queryEpay"](_0x571b2b) {
    const {
      "payEpayPid": _0x467313,
      "payEpaySecret": _0x9eb1bd,
      "payEpayApiQueryUrl": _0xc85aaf
    } = await this['globalConfigService']["getConfigs"](['payEpayPid', "payEpaySecret", "payEpayApiQueryUrl"]),
          _0x5556db = {
      "act": "order",
      'out_trade_no': _0x571b2b,
      'pid': _0x467313,
      'key': _0x9eb1bd
    };
    const {
      "data": {
        "code": _0x36f7b8,
        "msg": _0x28eb74,
        "data": _0x30ca69
      }
    } = await axios_1["default"]['get'](_0xc85aaf, {
      'params': _0x5556db
    });

    if (_0x36f7b8 != 1) {
      throw new common_1["HttpException"](_0x28eb74, common_1['HttpStatus']["BAD_REQUEST"]);
    }

    return _0x30ca69;
  }

  async ["notifyMpay"](_0x1a2931) {
    const _0x59b552 = _0x1a2931["sign"];
    delete _0x1a2931["sign"];
    delete _0x1a2931["sign_type"];

    const _0x51e50c = await this["globalConfigService"]["getConfigs"](["payMpaySecret"]);

    console["log"]('校验签名');

    if (this["sign"](_0x1a2931, _0x51e50c) != _0x59b552) {
      return 'failed';
    }

    console['log']("校验签名通过");

    const _0x4bb3ba = await this['orderEntity']["findOne"]({
      'where': {
        'orderId': _0x1a2931['out_trade_no'],
        'status': 0
      }
    });

    if (!_0x4bb3ba) {
      return 'failed';
    }

    const _0x64a96 = _0x1a2931["trade_status"] == 'TRADE_SUCCESS' ? 1 : 2;

    console['log']("status: ", _0x64a96);

    const _0x21b419 = await this['orderEntity']["update"]({
      'orderId': _0x1a2931["out_trade_no"]
    }, {
      'status': _0x64a96,
      'paydAt': new Date()
    });

    _0x64a96 === 1 && (await this['userBalanceService']['addBalanceToOrder'](_0x4bb3ba));

    if (_0x21b419["affected"] != 1) {
      return "failed";
    }

    return "success";
  }

  async ['payMpay'](_0xad57f, _0x24e6d2, _0x545fa0 = 'wxpay') {
    const _0x504880 = await this["orderEntity"]["findOne"]({
      'where': {
        'userId': _0xad57f,
        'orderId': _0x24e6d2
      }
    });

    if (!_0x504880) {
      throw new common_1["HttpException"]("订单不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x5aa731 = await this["cramiPackageEntity"]["findOne"]({
      'where': {
        'id': _0x504880["goodsId"]
      }
    });

    if (!_0x5aa731) {
      throw new common_1["HttpException"]("套餐不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "payMpayPid": _0x5560b8,
      "payMpaySecret": _0xb05128,
      "payMpayNotifyUrl": _0x7f2ea6,
      "payMpayReturnUrl": _0x4be0ab,
      "payMpayApiPayUrl": _0x2b9d33
    } = await this["globalConfigService"]["getConfigs"](["payMpayPid", "payMpaySecret", "payMpayNotifyUrl", "payMpayReturnUrl", "payMpayApiPayUrl"]),
          _0x3fbc8b = {
      "pid": Number(_0x5560b8),
      "type": _0x545fa0,
      "out_trade_no": _0x24e6d2,
      "name": _0x5aa731["name"],
      "money": _0x504880["total"],
      "notify_url": _0x7f2ea6,
      "return_url": _0x4be0ab,
      'sign': this["sign"](_0x3fbc8b, _0xb05128),
      "sign_type": "MD5"
    };

    const _0x189ed0 = new URLSearchParams(_0x3fbc8b)["toString"](),
          _0x5d5735 = _0x2b9d33 + '?' + _0x189ed0;

    return {
      'url_qrcode': null,
      'redirectUrl': _0x5d5735,
      'channel': _0x545fa0,
      'isRedirect': true
    };
  }

  async ["queryMpay"](_0x431f3) {
    const {
      "payMpayApiQueryUrl": _0x4e7972
    } = await this["globalConfigService"]['getConfigs'](["payMpayPid", "payMpaySecret", "payMpayApiQueryUrl"]),
          _0x2445c6 = {
      "type": 2,
      "order_no": _0x431f3
    };
    const {
      "data": {
        "code": _0x4b3d54,
        "msg": _0x2a8e27,
        "data": _0x3fef6a
      }
    } = await axios_1["default"]["get"](_0x4e7972, {
      'params': _0x2445c6
    });

    if (_0x4b3d54 != 1) {
      throw new common_1["HttpException"](_0x2a8e27, common_1['HttpStatus']['BAD_REQUEST']);
    }

    return _0x3fef6a;
  }

  async ['notifyWeChat'](_0x5010b3) {
    console["log"]("微信支付通知params: ", _0x5010b3);

    const {
      "payWeChatAppId": _0x318fa0,
      "payWeChatMchId": _0x148d3e,
      "payWeChatSecret": _0x32c334,
      "payWeChatPublicKey": _0x343947,
      "payWeChatPrivateKey": _0x4e93ce
    } = await this["globalConfigService"]["getConfigs"](["payWeChatAppId", "payWeChatMchId", "payWeChatSecret", "payWeChatPublicKey", "payWeChatPrivateKey"]),
          _0x5bc8e8 = new this["WxPay"]({
      'appid': _0x318fa0,
      'mchid': _0x148d3e,
      'publicKey': _0x343947,
      'privateKey': _0x4e93ce
    });

    try {
      if (_0x5010b3["event_type"] == "TRANSACTION.SUCCESS") {
        const {
          "ciphertext": _0x4f4d92,
          "associated_data": _0x5c7923,
          "nonce": _0x1d4453
        } = _0x5010b3["resource"],
              _0x6c62a = _0x5bc8e8["decipher_gcm"](_0x4f4d92, _0x5c7923, _0x1d4453, _0x32c334),
              _0x5ec009 = await this["orderEntity"]['findOne']({
          'where': {
            'orderId': _0x6c62a['out_trade_no'],
            'status': 0
          }
        });

        if (!_0x5ec009) {
          return "failed";
        }

        const _0x3cd0e6 = _0x6c62a["trade_state"] == 'SUCCESS' ? 1 : 2,
              _0x2728a7 = await this["orderEntity"]["update"]({
          'orderId': _0x6c62a["out_trade_no"]
        }, {
          'status': _0x3cd0e6,
          'paydAt': new Date()
        });

        _0x3cd0e6 === 1 && (await this["userBalanceService"]["addBalanceToOrder"](_0x5ec009));

        if (_0x2728a7["affected"] != 1) {
          return "failed";
        }
      }

      return "success";
    } catch (_0x520de3) {
      console["log"]("error: ", _0x520de3);
      console['log']("支付通知验证失败: ", _0x520de3);
      return "failed";
    }
  }

  async ["payWeChat"](_0x12eb2a, _0x58e008, _0x7c52b8 = "native") {
    console["log"]("payType: ", _0x7c52b8);

    const _0x54053a = await this["orderEntity"]['findOne']({
      'where': {
        'userId': _0x12eb2a,
        'orderId': _0x58e008
      }
    });

    if (!_0x54053a) {
      throw new common_1["HttpException"]('订单不存在!', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x4e9bcf = await this["cramiPackageEntity"]["findOne"]({
      'where': {
        'id': _0x54053a["goodsId"]
      }
    });

    if (!_0x4e9bcf) {
      throw new common_1["HttpException"]("套餐不存在!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "payWeChatAppId": _0x542dff,
      "payWeChatMchId": _0x535234,
      "payWeChatPublicKey": _0x1ea942,
      "payWeChatPrivateKey": _0x91f010,
      "payWeChatNotifyUrl": _0x2395de,
      "payWeChatH5Name": _0x14295e,
      "payWeChatH5Url": _0x15d61d
    } = await this["globalConfigService"]["getConfigs"](["payWeChatAppId", "payWeChatMchId", 'payWeChatPublicKey', "payWeChatPrivateKey", "payWeChatNotifyUrl", 'payWeChatH5Name', "payWeChatH5Url"]),
          _0x4daec5 = new this["WxPay"]({
      'appid': _0x542dff,
      'mchid': _0x535234,
      'publicKey': _0x1ea942,
      'privateKey': _0x91f010
    }),
          _0x4d5219 = {
      'appid': _0x542dff,
      'mchid': _0x535234,
      'description': _0x4e9bcf['name'],
      'out_trade_no': _0x58e008,
      'notify_url': _0x2395de,
      'amount': {
        'total': Number(_0x54053a['total'] * 100)
      },
      'scene_info': {
        'payer_client_ip': "192.168.1.100"
      }
    };

    console["log"]("wechat-pay: ", _0x4d5219);

    if (_0x7c52b8 == 'h5') {
      _0x4d5219['scene_info']["h5_info"] = {
        'type': "Wap",
        'app_name': _0x14295e,
        'app_url': _0x15d61d
      };

      const _0x599ade = await _0x4daec5['transactions_h5'](_0x4d5219);

      if (_0x599ade["status"] === 403) {
        throw new common_1["HttpException"]((_0x599ade === null || _0x599ade === void 0 ? void 0 : _0x599ade["message"]) || "微信H5支付失败！", common_1["HttpStatus"]['BAD_REQUEST']);
      }

      const {
        "h5_url": _0x43e334
      } = _0x599ade;
      return {
        'url': _0x43e334
      };
    }

    if (_0x7c52b8 == "jsapi") {
      const _0x22b05a = await this["userService"]["getOpenIdByUserId"](_0x12eb2a);

      console["log"]("用户openId: ", _0x22b05a);
      _0x4d5219["payer"] = {
        'openid': _0x22b05a
      };

      const _0x18b81a = await _0x4daec5["transactions_jsapi"](_0x4d5219);

      console["log"]("jsapi支付结果返回值: ", _0x18b81a);
      return _0x18b81a;
    }

    if (_0x7c52b8 == 'native') {
      const _0x9957d8 = await _0x4daec5["transactions_native"](_0x4d5219),
            {
        "code_url": _0x1aab00
      } = _0x9957d8;

      !_0x1aab00 && console["log"]('wx-native', _0x9957d8);
      return {
        'url_qrcode': _0x1aab00,
        'isRedirect': false
      };
    }

    throw new common_1["HttpException"]("unsupported pay type", common_1['HttpStatus']["BAD_REQUEST"]);
  }

  async ["queryWeChat"](_0x183aad) {
    const {
      "payWeChatAppId": _0x12f98a,
      "payWeChatMchId": _0x21b1a8,
      "payWeChatPublicKey": _0x5cc1af,
      "payWeChatPrivateKey": _0x56ce8e,
      "payWeChatNotifyUrl": _0x56e5a9,
      "payWeChatH5Name": _0x259feb,
      "payWeChatH5Url": _0x460fcc
    } = await this['globalConfigService']["getConfigs"](["payWeChatAppId", "payWeChatMchId", "payWeChatPublicKey", 'payWeChatPrivateKey']),
          _0x463e13 = new this["WxPay"]({
      'appid': _0x12f98a,
      'mchid': _0x21b1a8,
      'publicKey': _0x5cc1af,
      'privateKey': _0x56ce8e
    }),
          _0x591f51 = await _0x463e13["query"]({
      'out_trade_no': _0x183aad
    });

    return _0x591f51;
  }

  ['sign'](_0xdff82e, _0x5ee443) {
    const _0x5c1d98 = Object["keys"](_0xdff82e)["sort"]()["map"](_0x9eefde => _0x9eefde + '=' + _0xdff82e[_0x9eefde])["join"]('&') + _0x5ee443;

    return crypto["createHash"]("md5")["update"](_0x5c1d98)['digest']('hex');
  }

};
PayService = __decorate([(0, common_1['Injectable'])(), __param(0, (0, typeorm_1["InjectRepository"])(cramiPackage_entity_1['CramiPackageEntity'])), __param(1, (0, typeorm_1["InjectRepository"])(order_entity_1["OrderEntity"])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2['Repository'], userBalance_service_1["UserBalanceService"], globalConfig_service_1["GlobalConfigService"], user_service_1["UserService"]])], PayService);
exports['PayService'] = PayService;