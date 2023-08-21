'use strict';

var __decorate = this && this["__decorate"] || function (_0x4190c2, _0x25af5a, _0xc6c614, _0x2eb562) {
  var _0xa880f5 = arguments['length'],
      _0x44d3b = _0xa880f5 < 3 ? _0x25af5a : _0x2eb562 === null ? _0x2eb562 = Object["getOwnPropertyDescriptor"](_0x25af5a, _0xc6c614) : _0x2eb562,
      _0x20166e;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x44d3b = Reflect["decorate"](_0x4190c2, _0x25af5a, _0xc6c614, _0x2eb562);
  } else {
    for (var _0x213456 = _0x4190c2['length'] - 1; _0x213456 >= 0; _0x213456--) {
      if (_0x20166e = _0x4190c2[_0x213456]) {
        _0x44d3b = (_0xa880f5 < 3 ? _0x20166e(_0x44d3b) : _0xa880f5 > 3 ? _0x20166e(_0x25af5a, _0xc6c614, _0x44d3b) : _0x20166e(_0x25af5a, _0xc6c614)) || _0x44d3b;
      }
    }
  }

  _0xa880f5 > 3 && _0x44d3b && Object['defineProperty'](_0x25af5a, _0xc6c614, _0x44d3b);
  return _0x44d3b;
},
    __metadata = this && this['__metadata'] || function (_0x7908ac, _0x5a9b07) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x7908ac, _0x5a9b07);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["CramiEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let CramiEntity = class CramiEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'unique': true,
  'comment': '存储卡密CDK编码',
  'length': 50
}), __metadata('design:type', String)], CramiEntity['prototype'], "code", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "卡密CDK类型：1： 普通 | 2： 单人可使用一次 ",
  'default': 1
}), __metadata("design:type", Number)], CramiEntity['prototype'], "cramiType", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "卡密CDK类型： 默认套餐类型 | 不填就是自定义类型",
  'nullable': true
}), __metadata("design:type", Number)], CramiEntity["prototype"], 'packageId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "卡密CDK状态，如已使用、未使用等",
  'default': 0
}), __metadata("design:type", Number)], CramiEntity['prototype'], "status", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '卡密使用账户用户ID信息',
  'nullable': true
}), __metadata("design:type", Number)], CramiEntity["prototype"], "useId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "卡密有效期天数、从生成创建的时候开始计算，设为0则不限时间",
  'default': 0
}), __metadata('design:type', Number)], CramiEntity["prototype"], "days", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '卡密模型3额度',
  'nullable': true
}), __metadata('design:type', Number)], CramiEntity['prototype'], "model3Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "卡密模型4额度",
  'nullable': true
}), __metadata("design:type", Number)], CramiEntity["prototype"], "model4Count", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "卡密MJ绘画额度",
  'nullable': true
}), __metadata("design:type", Number)], CramiEntity["prototype"], "drawMjCount", void 0);

CramiEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "crami"
})], CramiEntity);
exports["CramiEntity"] = CramiEntity;