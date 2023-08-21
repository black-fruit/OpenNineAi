'use strict';

var __decorate = this && this['__decorate'] || function (_0x5a4bb7, _0x5c0242, _0x5d1693, _0x25b461) {
  var _0xcc4e93 = arguments["length"],
      _0x4bffcd = _0xcc4e93 < 3 ? _0x5c0242 : _0x25b461 === null ? _0x25b461 = Object["getOwnPropertyDescriptor"](_0x5c0242, _0x5d1693) : _0x25b461,
      _0x339d6d;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x4bffcd = Reflect["decorate"](_0x5a4bb7, _0x5c0242, _0x5d1693, _0x25b461);
  } else {
    for (var _0x364b5f = _0x5a4bb7["length"] - 1; _0x364b5f >= 0; _0x364b5f--) {
      if (_0x339d6d = _0x5a4bb7[_0x364b5f]) {
        _0x4bffcd = (_0xcc4e93 < 3 ? _0x339d6d(_0x4bffcd) : _0xcc4e93 > 3 ? _0x339d6d(_0x5c0242, _0x5d1693, _0x4bffcd) : _0x339d6d(_0x5c0242, _0x5d1693)) || _0x4bffcd;
      }
    }
  }

  _0xcc4e93 > 3 && _0x4bffcd && Object["defineProperty"](_0x5c0242, _0x5d1693, _0x4bffcd);
  return _0x4bffcd;
},
    __metadata = this && this['__metadata'] || function (_0x6fb371, _0x4a843b) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x6fb371, _0x4a843b);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['VerifycationEntity'] = void 0;

const typeorm_1 = require('typeorm'),
      baseEntity_1 = require("../../common/entity/baseEntity");

let VerifycationEntity = class VerifycationEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户id"
}), __metadata('design:type', Number)], VerifycationEntity["prototype"], 'userId', void 0);

__decorate([(0, typeorm_1['Column'])({
  'nullable': false,
  'comment': "验证类型"
}), __metadata("design:type", Number)], VerifycationEntity["prototype"], 'type', void 0);

__decorate([(0, typeorm_1["Column"])({
  'nullable': false,
  'comment': '验证码'
}), __metadata("design:type", Number)], VerifycationEntity["prototype"], 'code', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '过期时间'
}), __metadata('design:type', Date)], VerifycationEntity['prototype'], "expiresAt", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 64,
  'nullable': false,
  'comment': "发送的邮箱"
}), __metadata("design:type", String)], VerifycationEntity["prototype"], 'email', void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'nullable': false,
  'comment': "是否已经使用了"
}), __metadata('design:type', Number)], VerifycationEntity['prototype'], 'used', void 0);

VerifycationEntity = __decorate([(0, typeorm_1['Entity'])({
  'name': 'verifycation'
})], VerifycationEntity);
exports["VerifycationEntity"] = VerifycationEntity;