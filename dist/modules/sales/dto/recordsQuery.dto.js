'use strict';

var __decorate = this && this["__decorate"] || function (_0x51a3b4, _0x1c0c83, _0x5b2f6a, _0x30fd4b) {
  var _0x5b8c30 = arguments["length"],
      _0x41292c = _0x5b8c30 < 3 ? _0x1c0c83 : _0x30fd4b === null ? _0x30fd4b = Object['getOwnPropertyDescriptor'](_0x1c0c83, _0x5b2f6a) : _0x30fd4b,
      _0x16ffcf;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x41292c = Reflect["decorate"](_0x51a3b4, _0x1c0c83, _0x5b2f6a, _0x30fd4b);
  } else {
    for (var _0x371e58 = _0x51a3b4["length"] - 1; _0x371e58 >= 0; _0x371e58--) {
      if (_0x16ffcf = _0x51a3b4[_0x371e58]) {
        _0x41292c = (_0x5b8c30 < 3 ? _0x16ffcf(_0x41292c) : _0x5b8c30 > 3 ? _0x16ffcf(_0x1c0c83, _0x5b2f6a, _0x41292c) : _0x16ffcf(_0x1c0c83, _0x5b2f6a)) || _0x41292c;
      }
    }
  }

  _0x5b8c30 > 3 && _0x41292c && Object["defineProperty"](_0x1c0c83, _0x5b2f6a, _0x41292c);
  return _0x41292c;
},
    __metadata = this && this["__metadata"] || function (_0x4c2512, _0x9aea10) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x4c2512, _0x9aea10);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["RecordsQueryDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class RecordsQueryDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], RecordsQueryDto['prototype'], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], RecordsQueryDto["prototype"], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "c8c479601c1e11eea4c49fad2cbd3ccd",
  'description': "订单ID",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], RecordsQueryDto["prototype"], 'orderId', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "订单价格",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], RecordsQueryDto["prototype"], "orderPrice", void 0);

exports["RecordsQueryDto"] = RecordsQueryDto;