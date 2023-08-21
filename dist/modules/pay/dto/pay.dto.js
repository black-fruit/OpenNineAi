'use strict';

var __decorate = this && this["__decorate"] || function (_0x3b413d, _0x38833f, _0xd4f70a, _0x4bed68) {
  var _0x1029a5 = arguments['length'],
      _0x345193 = _0x1029a5 < 3 ? _0x38833f : _0x4bed68 === null ? _0x4bed68 = Object["getOwnPropertyDescriptor"](_0x38833f, _0xd4f70a) : _0x4bed68,
      _0x52417f;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x345193 = Reflect["decorate"](_0x3b413d, _0x38833f, _0xd4f70a, _0x4bed68);
  } else {
    for (var _0x12e189 = _0x3b413d['length'] - 1; _0x12e189 >= 0; _0x12e189--) {
      if (_0x52417f = _0x3b413d[_0x12e189]) {
        _0x345193 = (_0x1029a5 < 3 ? _0x52417f(_0x345193) : _0x1029a5 > 3 ? _0x52417f(_0x38833f, _0xd4f70a, _0x345193) : _0x52417f(_0x38833f, _0xd4f70a)) || _0x345193;
      }
    }
  }

  _0x1029a5 > 3 && _0x345193 && Object["defineProperty"](_0x38833f, _0xd4f70a, _0x345193);
  return _0x345193;
},
    __metadata = this && this["__metadata"] || function (_0x2c331f, _0x316430) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2c331f, _0x316430);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["PayDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class PayDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "订单号",
  'required': true
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], PayDto["prototype"], 'orderId', void 0);

exports["PayDto"] = PayDto;