'use strict';

var __decorate = this && this['__decorate'] || function (_0x2fa8b0, _0x33abef, _0xbbd1be, _0x301a28) {
  var _0x3e92ca = arguments['length'],
      _0x28875c = _0x3e92ca < 3 ? _0x33abef : _0x301a28 === null ? _0x301a28 = Object["getOwnPropertyDescriptor"](_0x33abef, _0xbbd1be) : _0x301a28,
      _0x2aed8f;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x28875c = Reflect["decorate"](_0x2fa8b0, _0x33abef, _0xbbd1be, _0x301a28);
  } else {
    for (var _0x3f9ea3 = _0x2fa8b0['length'] - 1; _0x3f9ea3 >= 0; _0x3f9ea3--) {
      if (_0x2aed8f = _0x2fa8b0[_0x3f9ea3]) {
        _0x28875c = (_0x3e92ca < 3 ? _0x2aed8f(_0x28875c) : _0x3e92ca > 3 ? _0x2aed8f(_0x33abef, _0xbbd1be, _0x28875c) : _0x2aed8f(_0x33abef, _0xbbd1be)) || _0x28875c;
      }
    }
  }

  _0x3e92ca > 3 && _0x28875c && Object['defineProperty'](_0x33abef, _0xbbd1be, _0x28875c);
  return _0x28875c;
},
    __metadata = this && this["__metadata"] || function (_0xf59976, _0x51da86) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0xf59976, _0x51da86);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["CramiPackageEntity"] = void 0;

const typeorm_1 = require('typeorm'),
      baseEntity_1 = require("../../common/entity/baseEntity");

let CramiPackageEntity = class CramiPackageEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'unique': true,
  'comment': "套餐名称"
}), __metadata('design:type', String)], CramiPackageEntity["prototype"], "name", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐介绍详细信息"
}), __metadata("design:type", String)], CramiPackageEntity["prototype"], "des", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐封面图片",
  'nullable': true
}), __metadata("design:type", String)], CramiPackageEntity["prototype"], 'coverImg', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐价格￥",
  'type': "decimal",
  'scale': 2,
  'precision': 10
}), __metadata('design:type', Number)], CramiPackageEntity["prototype"], "price", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐排序、数字越大越靠前",
  'default': 100
}), __metadata("design:type", Number)], CramiPackageEntity['prototype'], "order", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "套餐是否启用中 0：禁用 1：启用",
  'default': 1
}), __metadata("design:type", Number)], CramiPackageEntity["prototype"], "status", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐权重、数字越大表示套餐等级越高越贵",
  'unique': true
}), __metadata("design:type", Number)], CramiPackageEntity["prototype"], 'weight', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '卡密有效期天数、从使用的时候开始计算，设为-1则不限时间',
  'default': 0
}), __metadata("design:type", Number)], CramiPackageEntity['prototype'], "days", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐包含的模型3数量",
  'default': 0,
  'nullable': true
}), __metadata("design:type", Number)], CramiPackageEntity['prototype'], "model3Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐包含的模型4数量",
  'default': 0,
  'nullable': true
}), __metadata("design:type", Number)], CramiPackageEntity["prototype"], "model4Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐包含的MJ绘画数量",
  'default': 0,
  'nullable': true
}), __metadata("design:type", Number)], CramiPackageEntity["prototype"], 'drawMjCount', void 0);

CramiPackageEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "crami_package"
})], CramiPackageEntity);
exports['CramiPackageEntity'] = CramiPackageEntity;