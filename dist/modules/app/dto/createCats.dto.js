'use strict';

var __decorate = this && this["__decorate"] || function (_0x130f33, _0x712f5c, _0xba91d1, _0x3968c4) {
  var _0x2a1727 = arguments['length'],
      _0x897a35 = _0x2a1727 < 3 ? _0x712f5c : _0x3968c4 === null ? _0x3968c4 = Object["getOwnPropertyDescriptor"](_0x712f5c, _0xba91d1) : _0x3968c4,
      _0x4e7898;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x897a35 = Reflect['decorate'](_0x130f33, _0x712f5c, _0xba91d1, _0x3968c4);
  } else {
    for (var _0x1253ab = _0x130f33['length'] - 1; _0x1253ab >= 0; _0x1253ab--) {
      if (_0x4e7898 = _0x130f33[_0x1253ab]) {
        _0x897a35 = (_0x2a1727 < 3 ? _0x4e7898(_0x897a35) : _0x2a1727 > 3 ? _0x4e7898(_0x712f5c, _0xba91d1, _0x897a35) : _0x4e7898(_0x712f5c, _0xba91d1)) || _0x897a35;
      }
    }
  }

  _0x2a1727 > 3 && _0x897a35 && Object["defineProperty"](_0x712f5c, _0xba91d1, _0x897a35);
  return _0x897a35;
},
    __metadata = this && this["__metadata"] || function (_0x12f7e9, _0x24bc4b) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x12f7e9, _0x24bc4b);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["CreateCatsDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class CreateCatsDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "编程助手",
  'description': 'app分类名称',
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "app分类名称是必传参数"
}), __metadata('design:type', String)], CreateCatsDto["prototype"], "name", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "适用于编程编码、期望成为您的编程助手",
  'description': "app分类名称详情描述",
  'required': false
}), (0, class_validator_1['IsDefined'])({
  'message': "app分类名称描述是必传参数"
}), __metadata('design:type', String)], CreateCatsDto["prototype"], "des", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 'https://xxxx.png',
  'description': '套餐封面图片'
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], CreateCatsDto["prototype"], "coverImg", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 100,
  'description': "套餐排序、数字越大越靠前",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], CreateCatsDto["prototype"], "order", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "套餐状态 0：禁用 1：启用",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "套餐状态必须是Number"
}), (0, class_validator_1["IsIn"])([0, 1, 3, 4, 5], {
  'message': "套餐状态错误"
}), __metadata("design:type", Number)], CreateCatsDto['prototype'], "status", void 0);

exports["CreateCatsDto"] = CreateCatsDto;