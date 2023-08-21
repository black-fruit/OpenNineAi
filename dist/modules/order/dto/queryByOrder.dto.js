'use strict';

var __decorate = this && this['__decorate'] || function (_0x362969, _0x357cfb, _0xf1d94, _0x1ba0f6) {
  var _0x295282 = arguments["length"],
      _0x699096 = _0x295282 < 3 ? _0x357cfb : _0x1ba0f6 === null ? _0x1ba0f6 = Object["getOwnPropertyDescriptor"](_0x357cfb, _0xf1d94) : _0x1ba0f6,
      _0x1b0dbf;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x699096 = Reflect["decorate"](_0x362969, _0x357cfb, _0xf1d94, _0x1ba0f6);
  } else {
    for (var _0x2f33d5 = _0x362969["length"] - 1; _0x2f33d5 >= 0; _0x2f33d5--) {
      if (_0x1b0dbf = _0x362969[_0x2f33d5]) {
        _0x699096 = (_0x295282 < 3 ? _0x1b0dbf(_0x699096) : _0x295282 > 3 ? _0x1b0dbf(_0x357cfb, _0xf1d94, _0x699096) : _0x1b0dbf(_0x357cfb, _0xf1d94)) || _0x699096;
      }
    }
  }

  _0x295282 > 3 && _0x699096 && Object['defineProperty'](_0x357cfb, _0xf1d94, _0x699096);
  return _0x699096;
},
    __metadata = this && this["__metadata"] || function (_0xb81f48, _0x264e0a) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0xb81f48, _0x264e0a);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['QueryByOrderIdDto'] = void 0;

const swagger_1 = require("@nestjs/swagger");

class QueryByOrderIdDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 'qwdadadwe-qeqwfcadqw-gguytewj',
  'description': "订单ID",
  'required': false
}), __metadata("design:type", String)], QueryByOrderIdDto["prototype"], 'orderId', void 0);

exports["QueryByOrderIdDto"] = QueryByOrderIdDto;