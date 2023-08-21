'use strict';

var __decorate = this && this['__decorate'] || function (_0x14c09f, _0x19b030, _0x4826d2, _0x3f5798) {
  var _0x5a9075 = arguments["length"],
      _0x397557 = _0x5a9075 < 3 ? _0x19b030 : _0x3f5798 === null ? _0x3f5798 = Object["getOwnPropertyDescriptor"](_0x19b030, _0x4826d2) : _0x3f5798,
      _0xf3ef90;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x397557 = Reflect["decorate"](_0x14c09f, _0x19b030, _0x4826d2, _0x3f5798);
  } else {
    for (var _0x2b5b9b = _0x14c09f['length'] - 1; _0x2b5b9b >= 0; _0x2b5b9b--) {
      if (_0xf3ef90 = _0x14c09f[_0x2b5b9b]) {
        _0x397557 = (_0x5a9075 < 3 ? _0xf3ef90(_0x397557) : _0x5a9075 > 3 ? _0xf3ef90(_0x19b030, _0x4826d2, _0x397557) : _0xf3ef90(_0x19b030, _0x4826d2)) || _0x397557;
      }
    }
  }

  _0x5a9075 > 3 && _0x397557 && Object['defineProperty'](_0x19b030, _0x4826d2, _0x397557);
  return _0x397557;
},
    __metadata = this && this["__metadata"] || function (_0x3c0ce4, _0x29ba43) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x3c0ce4, _0x29ba43);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SigninEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require('../../common/entity/baseEntity');

let SigninEntity = class SigninEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'comment': "用户ID"
}), __metadata("design:type", Number)], SigninEntity["prototype"], "userId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "签到日期"
}), __metadata("design:type", String)], SigninEntity["prototype"], "signInDate", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '签到时间'
}), __metadata("design:type", Date)], SigninEntity['prototype'], "signInTime", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': false
}), __metadata("design:type", Boolean)], SigninEntity["prototype"], 'isSigned', void 0);

SigninEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "signin"
})], SigninEntity);
exports["SigninEntity"] = SigninEntity;