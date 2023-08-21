'use strict';

var __decorate = this && this["__decorate"] || function (_0x348134, _0x25ad51, _0x11fa90, _0x393a6d) {
  var _0x2fa58b = arguments["length"],
      _0x13884d = _0x2fa58b < 3 ? _0x25ad51 : _0x393a6d === null ? _0x393a6d = Object["getOwnPropertyDescriptor"](_0x25ad51, _0x11fa90) : _0x393a6d,
      _0x56d16d;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x13884d = Reflect["decorate"](_0x348134, _0x25ad51, _0x11fa90, _0x393a6d);
  } else {
    for (var _0x6a37ca = _0x348134["length"] - 1; _0x6a37ca >= 0; _0x6a37ca--) {
      if (_0x56d16d = _0x348134[_0x6a37ca]) {
        _0x13884d = (_0x2fa58b < 3 ? _0x56d16d(_0x13884d) : _0x2fa58b > 3 ? _0x56d16d(_0x25ad51, _0x11fa90, _0x13884d) : _0x56d16d(_0x25ad51, _0x11fa90)) || _0x13884d;
      }
    }
  }

  _0x2fa58b > 3 && _0x13884d && Object["defineProperty"](_0x25ad51, _0x11fa90, _0x13884d);
  return _0x13884d;
},
    __metadata = this && this["__metadata"] || function (_0x2ca43c, _0x536160) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x2ca43c, _0x536160);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["BuyDto"] = void 0;

const swagger_1 = require("@nestjs/swagger");

class BuyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '要购买的套餐Id',
  'required': true
}), __metadata('design:type', Number)], BuyDto["prototype"], "goodsId", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 'wxpay',
  'description': '付款方式',
  'required': false
}), __metadata("design:type", String)], BuyDto["prototype"], "payType", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "购买数量",
  'required': false
}), __metadata("design:type", Number)], BuyDto["prototype"], "count", void 0);

exports["BuyDto"] = BuyDto;