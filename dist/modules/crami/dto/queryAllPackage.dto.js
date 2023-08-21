'use strict';

var __decorate = this && this["__decorate"] || function (_0x1bf559, _0x4d7369, _0x4efbdf, _0x5c0825) {
  var _0x39c65d = arguments["length"],
      _0x3f43a6 = _0x39c65d < 3 ? _0x4d7369 : _0x5c0825 === null ? _0x5c0825 = Object["getOwnPropertyDescriptor"](_0x4d7369, _0x4efbdf) : _0x5c0825,
      _0x36417e;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3f43a6 = Reflect["decorate"](_0x1bf559, _0x4d7369, _0x4efbdf, _0x5c0825);
  } else {
    for (var _0x592fc6 = _0x1bf559["length"] - 1; _0x592fc6 >= 0; _0x592fc6--) {
      if (_0x36417e = _0x1bf559[_0x592fc6]) {
        _0x3f43a6 = (_0x39c65d < 3 ? _0x36417e(_0x3f43a6) : _0x39c65d > 3 ? _0x36417e(_0x4d7369, _0x4efbdf, _0x3f43a6) : _0x36417e(_0x4d7369, _0x4efbdf)) || _0x3f43a6;
      }
    }
  }

  _0x39c65d > 3 && _0x3f43a6 && Object["defineProperty"](_0x4d7369, _0x4efbdf, _0x3f43a6);
  return _0x3f43a6;
},
    __metadata = this && this["__metadata"] || function (_0x1b9cae, _0x196103) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x1b9cae, _0x196103);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QuerAllPackageDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QuerAllPackageDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QuerAllPackageDto['prototype'], 'page', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': '每页数量',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QuerAllPackageDto["prototype"], 'size', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 'name',
  'description': "套餐名称",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], QuerAllPackageDto["prototype"], 'name', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "套餐状态 0：禁用 1：启用",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllPackageDto['prototype'], "status", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "套餐类型 -1：永久套餐 1：限时套餐",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllPackageDto["prototype"], "type", void 0);

exports["QuerAllPackageDto"] = QuerAllPackageDto;