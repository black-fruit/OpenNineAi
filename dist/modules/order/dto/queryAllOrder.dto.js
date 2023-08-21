'use strict';

var __decorate = this && this['__decorate'] || function (_0x349588, _0x1fcd9c, _0x380b54, _0x769d3e) {
  var _0x1b1f75 = arguments["length"],
      _0x15ca2a = _0x1b1f75 < 3 ? _0x1fcd9c : _0x769d3e === null ? _0x769d3e = Object["getOwnPropertyDescriptor"](_0x1fcd9c, _0x380b54) : _0x769d3e,
      _0x7ff189;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x15ca2a = Reflect["decorate"](_0x349588, _0x1fcd9c, _0x380b54, _0x769d3e);
  } else {
    for (var _0x25b05a = _0x349588["length"] - 1; _0x25b05a >= 0; _0x25b05a--) {
      if (_0x7ff189 = _0x349588[_0x25b05a]) {
        _0x15ca2a = (_0x1b1f75 < 3 ? _0x7ff189(_0x15ca2a) : _0x1b1f75 > 3 ? _0x7ff189(_0x1fcd9c, _0x380b54, _0x15ca2a) : _0x7ff189(_0x1fcd9c, _0x380b54)) || _0x15ca2a;
      }
    }
  }

  _0x1b1f75 > 3 && _0x15ca2a && Object["defineProperty"](_0x1fcd9c, _0x380b54, _0x15ca2a);
  return _0x15ca2a;
},
    __metadata = this && this["__metadata"] || function (_0x3253c4, _0x56ff7c) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3253c4, _0x56ff7c);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QuerAllOrderDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require('@nestjs/swagger');

class QuerAllOrderDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '查询页数',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], QuerAllOrderDto['prototype'], "page", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': '每页数量',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllOrderDto['prototype'], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 99,
  'description': "支付的用户id",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QuerAllOrderDto['prototype'], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "epay",
  'description': "支付的平台",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], QuerAllOrderDto['prototype'], "platform", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "订单状态",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], QuerAllOrderDto["prototype"], 'status', void 0);

exports["QuerAllOrderDto"] = QuerAllOrderDto;