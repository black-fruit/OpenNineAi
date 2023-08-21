'use strict';

var __decorate = this && this['__decorate'] || function (_0x4305f8, _0x2bef53, _0x525d84, _0x53f9b1) {
  var _0x2a25f0 = arguments['length'],
      _0x5bca91 = _0x2a25f0 < 3 ? _0x2bef53 : _0x53f9b1 === null ? _0x53f9b1 = Object["getOwnPropertyDescriptor"](_0x2bef53, _0x525d84) : _0x53f9b1,
      _0x4b3fa7;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x5bca91 = Reflect["decorate"](_0x4305f8, _0x2bef53, _0x525d84, _0x53f9b1);
  } else {
    for (var _0x22ae06 = _0x4305f8["length"] - 1; _0x22ae06 >= 0; _0x22ae06--) {
      if (_0x4b3fa7 = _0x4305f8[_0x22ae06]) {
        _0x5bca91 = (_0x2a25f0 < 3 ? _0x4b3fa7(_0x5bca91) : _0x2a25f0 > 3 ? _0x4b3fa7(_0x2bef53, _0x525d84, _0x5bca91) : _0x4b3fa7(_0x2bef53, _0x525d84)) || _0x5bca91;
      }
    }
  }

  _0x2a25f0 > 3 && _0x5bca91 && Object["defineProperty"](_0x2bef53, _0x525d84, _0x5bca91);
  return _0x5bca91;
},
    __metadata = this && this["__metadata"] || function (_0x32db4a, _0x219161) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x32db4a, _0x219161);
  }
},
    __param = this && this['__param'] || function (_0x479223, _0x4c5d68) {
  return function (_0x33d71f, _0x1388de) {
    _0x4c5d68(_0x33d71f, _0x1388de, _0x479223);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["PayController"] = void 0;

const common_1 = require('@nestjs/common'),
      swagger_1 = require('@nestjs/swagger'),
      pay_service_1 = require("./pay.service");

let PayController = class PayController {
  constructor(_0xd3bdab) {
    this["payService"] = _0xd3bdab;
  }

  ["notifyHupi"](_0x2e6672) {
    console["log"]("hupi ->body: ", _0x2e6672);
    return this["payService"]["notify"](_0x2e6672);
  }

  ["notifyEpay"](_0x3e14e0) {
    console['log']("epay ->query: ", _0x3e14e0);
    return this["payService"]["notify"](_0x3e14e0);
  }

};

__decorate([(0, common_1["Post"])('notify'), (0, swagger_1["ApiOperation"])({
  'summary': "hupi支付结果通知"
}), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], PayController["prototype"], "notifyHupi", null);

__decorate([(0, common_1["Get"])("notify"), (0, swagger_1["ApiOperation"])({
  'summary': "Epay支付结果通知"
}), __param(0, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], PayController['prototype'], 'notifyEpay', null);

PayController = __decorate([(0, common_1['Controller'])('pay'), (0, swagger_1["ApiTags"])("pay"), __metadata("design:paramtypes", [pay_service_1["PayService"]])], PayController);
exports["PayController"] = PayController;