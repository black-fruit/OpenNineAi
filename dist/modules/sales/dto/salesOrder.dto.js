'use strict';

var __decorate = this && this["__decorate"] || function (_0x87a0bb, _0x3eaa8e, _0x1c88d4, _0x20138f) {
  var _0x5d6030 = arguments["length"],
      _0x480340 = _0x5d6030 < 3 ? _0x3eaa8e : _0x20138f === null ? _0x20138f = Object["getOwnPropertyDescriptor"](_0x3eaa8e, _0x1c88d4) : _0x20138f,
      _0x4e4f5c;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x480340 = Reflect["decorate"](_0x87a0bb, _0x3eaa8e, _0x1c88d4, _0x20138f);
  } else {
    for (var _0x1e3371 = _0x87a0bb["length"] - 1; _0x1e3371 >= 0; _0x1e3371--) {
      if (_0x4e4f5c = _0x87a0bb[_0x1e3371]) {
        _0x480340 = (_0x5d6030 < 3 ? _0x4e4f5c(_0x480340) : _0x5d6030 > 3 ? _0x4e4f5c(_0x3eaa8e, _0x1c88d4, _0x480340) : _0x4e4f5c(_0x3eaa8e, _0x1c88d4)) || _0x480340;
      }
    }
  }

  _0x5d6030 > 3 && _0x480340 && Object["defineProperty"](_0x3eaa8e, _0x1c88d4, _0x480340);
  return _0x480340;
},
    __metadata = this && this["__metadata"] || function (_0x450f91, _0x6ecae9) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x450f91, _0x6ecae9);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["salesOrderDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class salesOrderDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], salesOrderDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], salesOrderDto["prototype"], 'size', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': "工单状态",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Object)], salesOrderDto["prototype"], "orderStatus", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "提现渠道",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], salesOrderDto['prototype'], "withdrawalChannels", void 0);

exports["salesOrderDto"] = salesOrderDto;