'use strict';

var __decorate = this && this["__decorate"] || function (_0xef5ff1, _0x193a26, _0x59f19d, _0x5ed5da) {
  var _0xef7c08 = arguments["length"],
      _0x57e11b = _0xef7c08 < 3 ? _0x193a26 : _0x5ed5da === null ? _0x5ed5da = Object["getOwnPropertyDescriptor"](_0x193a26, _0x59f19d) : _0x5ed5da,
      _0x18f0dd;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x57e11b = Reflect['decorate'](_0xef5ff1, _0x193a26, _0x59f19d, _0x5ed5da);
  } else {
    for (var _0x25b654 = _0xef5ff1["length"] - 1; _0x25b654 >= 0; _0x25b654--) {
      if (_0x18f0dd = _0xef5ff1[_0x25b654]) {
        _0x57e11b = (_0xef7c08 < 3 ? _0x18f0dd(_0x57e11b) : _0xef7c08 > 3 ? _0x18f0dd(_0x193a26, _0x59f19d, _0x57e11b) : _0x18f0dd(_0x193a26, _0x59f19d)) || _0x57e11b;
      }
    }
  }

  _0xef7c08 > 3 && _0x57e11b && Object["defineProperty"](_0x193a26, _0x59f19d, _0x57e11b);
  return _0x57e11b;
},
    __metadata = this && this["__metadata"] || function (_0x2c8464, _0x393a8a) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2c8464, _0x393a8a);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QuerCatsDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class QuerCatsDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': '查询页数',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerCatsDto["prototype"], "page", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QuerCatsDto["prototype"], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "name",
  'description': "分类名称",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], QuerCatsDto["prototype"], "name", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "分类状态 0：禁用 1：启用",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerCatsDto["prototype"], "status", void 0);

exports['QuerCatsDto'] = QuerCatsDto;