'use strict';

var __decorate = this && this["__decorate"] || function (_0x55703c, _0x4722a0, _0xab8f92, _0x14badb) {
  var _0x3e550e = arguments["length"],
      _0x20b3b0 = _0x3e550e < 3 ? _0x4722a0 : _0x14badb === null ? _0x14badb = Object["getOwnPropertyDescriptor"](_0x4722a0, _0xab8f92) : _0x14badb,
      _0xb14c65;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x20b3b0 = Reflect["decorate"](_0x55703c, _0x4722a0, _0xab8f92, _0x14badb);
  } else {
    for (var _0x303631 = _0x55703c['length'] - 1; _0x303631 >= 0; _0x303631--) {
      if (_0xb14c65 = _0x55703c[_0x303631]) {
        _0x20b3b0 = (_0x3e550e < 3 ? _0xb14c65(_0x20b3b0) : _0x3e550e > 3 ? _0xb14c65(_0x4722a0, _0xab8f92, _0x20b3b0) : _0xb14c65(_0x4722a0, _0xab8f92)) || _0x20b3b0;
      }
    }
  }

  _0x3e550e > 3 && _0x20b3b0 && Object["defineProperty"](_0x4722a0, _0xab8f92, _0x20b3b0);
  return _0x20b3b0;
},
    __metadata = this && this["__metadata"] || function (_0x12c4e6, _0x5dfa76) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x12c4e6, _0x5dfa76);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['AppCatsEntity'] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let AppCatsEntity = class AppCatsEntity extends baseEntity_1['BaseEntity'] {};

__decorate([(0, typeorm_1['Column'])({
  'unique': true,
  'comment': 'App分类名称'
}), __metadata('design:type', String)], AppCatsEntity["prototype"], "name", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': 'App分类描述信息'
}), __metadata("design:type", String)], AppCatsEntity["prototype"], "des", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "App分类封面图片",
  'nullable': true
}), __metadata('design:type', String)], AppCatsEntity["prototype"], "coverImg", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "App分类排序、数字越大越靠前",
  'default': 100
}), __metadata("design:type", Number)], AppCatsEntity['prototype'], "order", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "App分类是否启用中 0：禁用 1：启用",
  'default': 1
}), __metadata('design:type', Number)], AppCatsEntity['prototype'], "status", void 0);

AppCatsEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': 'app_cats'
})], AppCatsEntity);
exports['AppCatsEntity'] = AppCatsEntity;