'use strict';

var __decorate = this && this['__decorate'] || function (_0x1b37b0, _0x602f93, _0x460dba, _0x268619) {
  var _0x10ae28 = arguments["length"],
      _0x3a33ca = _0x10ae28 < 3 ? _0x602f93 : _0x268619 === null ? _0x268619 = Object['getOwnPropertyDescriptor'](_0x602f93, _0x460dba) : _0x268619,
      _0xf5eff3;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3a33ca = Reflect['decorate'](_0x1b37b0, _0x602f93, _0x460dba, _0x268619);
  } else {
    for (var _0x393447 = _0x1b37b0["length"] - 1; _0x393447 >= 0; _0x393447--) {
      if (_0xf5eff3 = _0x1b37b0[_0x393447]) {
        _0x3a33ca = (_0x10ae28 < 3 ? _0xf5eff3(_0x3a33ca) : _0x10ae28 > 3 ? _0xf5eff3(_0x602f93, _0x460dba, _0x3a33ca) : _0xf5eff3(_0x602f93, _0x460dba)) || _0x3a33ca;
      }
    }
  }

  _0x10ae28 > 3 && _0x3a33ca && Object["defineProperty"](_0x602f93, _0x460dba, _0x3a33ca);
  return _0x3a33ca;
},
    __metadata = this && this["__metadata"] || function (_0x5c95bd, _0x13a855) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5c95bd, _0x13a855);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["WhiteListEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let WhiteListEntity = class WhiteListEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'unique': true,
  'comment': "用户ID"
}), __metadata("design:type", Number)], WhiteListEntity["prototype"], "userId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "使用次数限制",
  'default': 0
}), __metadata("design:type", Number)], WhiteListEntity["prototype"], "count", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '当前用户状态',
  'default': 1
}), __metadata('design:type', Number)], WhiteListEntity["prototype"], "status", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "已经使用的次数",
  'default': 0
}), __metadata("design:type", Number)], WhiteListEntity['prototype'], "useCount", void 0);

WhiteListEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "white_list"
})], WhiteListEntity);
exports["WhiteListEntity"] = WhiteListEntity;