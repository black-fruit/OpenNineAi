'use strict';

var __decorate = this && this["__decorate"] || function (_0x5f58a1, _0xe7fb2c, _0x474027, _0x1be892) {
  var _0xdb7106 = arguments["length"],
      _0x3251e7 = _0xdb7106 < 3 ? _0xe7fb2c : _0x1be892 === null ? _0x1be892 = Object["getOwnPropertyDescriptor"](_0xe7fb2c, _0x474027) : _0x1be892,
      _0x1a223e;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3251e7 = Reflect["decorate"](_0x5f58a1, _0xe7fb2c, _0x474027, _0x1be892);
  } else {
    for (var _0x6d09e0 = _0x5f58a1["length"] - 1; _0x6d09e0 >= 0; _0x6d09e0--) {
      if (_0x1a223e = _0x5f58a1[_0x6d09e0]) {
        _0x3251e7 = (_0xdb7106 < 3 ? _0x1a223e(_0x3251e7) : _0xdb7106 > 3 ? _0x1a223e(_0xe7fb2c, _0x474027, _0x3251e7) : _0x1a223e(_0xe7fb2c, _0x474027)) || _0x3251e7;
      }
    }
  }

  _0xdb7106 > 3 && _0x3251e7 && Object["defineProperty"](_0xe7fb2c, _0x474027, _0x3251e7);
  return _0x3251e7;
},
    __metadata = this && this["__metadata"] || function (_0x3c7d2c, _0x57bead) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x3c7d2c, _0x57bead);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['UpdateUserStatusDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class UpdateUserStatusDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 2,
  'description': "用户状态",
  'required': false
}), (0, class_validator_1["IsNotEmpty"])({
  'message': '用户状态不能为空！'
}), (0, class_validator_1["IsDefined"])({
  'message': '用户状态是必传参数'
}), (0, class_validator_1['IsIn'])([0, 1, 2, 3], {
  'message': "非法参数、用户状态非法！"
}), __metadata("design:type", Number)], UpdateUserStatusDto["prototype"], "status", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': '修改的用户id',
  'required': false
}), (0, class_validator_1["IsDefined"])({
  'message': "用户id是必传参数"
}), __metadata("design:type", Number)], UpdateUserStatusDto["prototype"], 'id', void 0);

exports["UpdateUserStatusDto"] = UpdateUserStatusDto;