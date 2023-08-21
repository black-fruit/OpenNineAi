'use strict';

var __decorate = this && this["__decorate"] || function (_0x43c569, _0x2c8b2c, _0x5f03ff, _0x109b4f) {
  var _0x1b4763 = arguments['length'],
      _0x5f11a4 = _0x1b4763 < 3 ? _0x2c8b2c : _0x109b4f === null ? _0x109b4f = Object["getOwnPropertyDescriptor"](_0x2c8b2c, _0x5f03ff) : _0x109b4f,
      _0x4c90c3;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5f11a4 = Reflect["decorate"](_0x43c569, _0x2c8b2c, _0x5f03ff, _0x109b4f);
  } else {
    for (var _0x4e44eb = _0x43c569["length"] - 1; _0x4e44eb >= 0; _0x4e44eb--) {
      if (_0x4c90c3 = _0x43c569[_0x4e44eb]) {
        _0x5f11a4 = (_0x1b4763 < 3 ? _0x4c90c3(_0x5f11a4) : _0x1b4763 > 3 ? _0x4c90c3(_0x2c8b2c, _0x5f03ff, _0x5f11a4) : _0x4c90c3(_0x2c8b2c, _0x5f03ff)) || _0x5f11a4;
      }
    }
  }

  _0x1b4763 > 3 && _0x5f11a4 && Object["defineProperty"](_0x2c8b2c, _0x5f03ff, _0x5f11a4);
  return _0x5f11a4;
},
    __metadata = this && this["__metadata"] || function (_0x5c02bc, _0x98716f) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x5c02bc, _0x98716f);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AppEntity"] = void 0;

const typeorm_1 = require('typeorm'),
      baseEntity_1 = require('../../common/entity/baseEntity');

let AppEntity = class AppEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'unique': true,
  'comment': "App应用名称"
}), __metadata("design:type", String)], AppEntity["prototype"], "name", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "App分类Id"
}), __metadata("design:type", Number)], AppEntity["prototype"], "catId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': 'App应用描述信息'
}), __metadata('design:type', String)], AppEntity["prototype"], "des", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "App应用预设场景信息",
  'type': "text"
}), __metadata("design:type", String)], AppEntity['prototype'], "preset", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "App应用封面图片",
  'nullable': true
}), __metadata('design:type', String)], AppEntity["prototype"], "coverImg", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': 'App应用排序、数字越大越靠前',
  'default': 100
}), __metadata("design:type", Number)], AppEntity["prototype"], "order", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "App应用是否启用中 0：禁用 1：启用",
  'default': 1
}), __metadata('design:type', Number)], AppEntity["prototype"], "status", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': 'App示例数据',
  'nullable': true,
  'type': 'text'
}), __metadata('design:type', String)], AppEntity["prototype"], "demoData", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "App应用角色 system  user",
  'default': "system"
}), __metadata("design:type", String)], AppEntity["prototype"], 'role', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "App是否共享到应用广场",
  'default': false
}), __metadata("design:type", Boolean)], AppEntity["prototype"], "public", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '用户Id',
  'nullable': true
}), __metadata("design:type", Number)], AppEntity["prototype"], "userId", void 0);

AppEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "app"
})], AppEntity);
exports["AppEntity"] = AppEntity;