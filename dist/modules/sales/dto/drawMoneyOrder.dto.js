'use strict';

var __decorate = this && this["__decorate"] || function (_0x404ffb, _0xc1d559, _0x48a763, _0x4ff8bf) {
  var _0x275d77 = arguments['length'],
      _0x3e4d0a = _0x275d77 < 3 ? _0xc1d559 : _0x4ff8bf === null ? _0x4ff8bf = Object["getOwnPropertyDescriptor"](_0xc1d559, _0x48a763) : _0x4ff8bf,
      _0x43b9e1;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3e4d0a = Reflect["decorate"](_0x404ffb, _0xc1d559, _0x48a763, _0x4ff8bf);
  } else {
    for (var _0x3e5e8d = _0x404ffb["length"] - 1; _0x3e5e8d >= 0; _0x3e5e8d--) {
      if (_0x43b9e1 = _0x404ffb[_0x3e5e8d]) {
        _0x3e4d0a = (_0x275d77 < 3 ? _0x43b9e1(_0x3e4d0a) : _0x275d77 > 3 ? _0x43b9e1(_0xc1d559, _0x48a763, _0x3e4d0a) : _0x43b9e1(_0xc1d559, _0x48a763)) || _0x3e4d0a;
      }
    }
  }

  _0x275d77 > 3 && _0x3e4d0a && Object["defineProperty"](_0xc1d559, _0x48a763, _0x3e4d0a);
  return _0x3e4d0a;
},
    __metadata = this && this["__metadata"] || function (_0x25e02a, _0x36f664) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x25e02a, _0x36f664);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['drawMoneyOrderDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class drawMoneyOrderDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], drawMoneyOrderDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], drawMoneyOrderDto['prototype'], 'size', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "工单状态",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], drawMoneyOrderDto["prototype"], "orderStatus", void 0);

exports["drawMoneyOrderDto"] = drawMoneyOrderDto;