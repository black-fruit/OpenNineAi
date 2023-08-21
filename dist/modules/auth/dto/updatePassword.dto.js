'use strict';

var __decorate = this && this["__decorate"] || function (_0x5ab4da, _0x28e495, _0x3441f2, _0x158cfc) {
  var _0x15ebb3 = arguments["length"],
      _0x21fa04 = _0x15ebb3 < 3 ? _0x28e495 : _0x158cfc === null ? _0x158cfc = Object['getOwnPropertyDescriptor'](_0x28e495, _0x3441f2) : _0x158cfc,
      _0x10ac3b;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x21fa04 = Reflect["decorate"](_0x5ab4da, _0x28e495, _0x3441f2, _0x158cfc);
  } else {
    for (var _0x193d64 = _0x5ab4da["length"] - 1; _0x193d64 >= 0; _0x193d64--) {
      if (_0x10ac3b = _0x5ab4da[_0x193d64]) {
        _0x21fa04 = (_0x15ebb3 < 3 ? _0x10ac3b(_0x21fa04) : _0x15ebb3 > 3 ? _0x10ac3b(_0x28e495, _0x3441f2, _0x21fa04) : _0x10ac3b(_0x28e495, _0x3441f2)) || _0x21fa04;
      }
    }
  }

  _0x15ebb3 > 3 && _0x21fa04 && Object["defineProperty"](_0x28e495, _0x3441f2, _0x21fa04);
  return _0x21fa04;
},
    __metadata = this && this["__metadata"] || function (_0x3ffd95, _0x25c617) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3ffd95, _0x25c617);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["UpdatePasswordDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class UpdatePasswordDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "123456",
  'description': "用户旧密码"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户密码不能为空！"
}), (0, class_validator_1['MinLength'])(6, {
  'message': "用户密码最低需要大于6位数！"
}), (0, class_validator_1['MaxLength'])(30, {
  'message': '用户密码最长不能超过30位数！'
}), __metadata("design:type", String)], UpdatePasswordDto["prototype"], "oldPassword", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "666666",
  'description': "用户更新新密码"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户密码不能为空！"
}), (0, class_validator_1["MinLength"])(6, {
  'message': "用户密码最低需要大于6位数！"
}), (0, class_validator_1["MaxLength"])(30, {
  'message': "用户密码最长不能超过30位数！"
}), __metadata("design:type", String)], UpdatePasswordDto['prototype'], 'password', void 0);

exports["UpdatePasswordDto"] = UpdatePasswordDto;