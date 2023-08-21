'use strict';

var __decorate = this && this['__decorate'] || function (_0x1667e8, _0x6af08b, _0x4eb1c5, _0x50ec62) {
  var _0x1f71b0 = arguments['length'],
      _0x44272f = _0x1f71b0 < 3 ? _0x6af08b : _0x50ec62 === null ? _0x50ec62 = Object['getOwnPropertyDescriptor'](_0x6af08b, _0x4eb1c5) : _0x50ec62,
      _0x16984e;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x44272f = Reflect["decorate"](_0x1667e8, _0x6af08b, _0x4eb1c5, _0x50ec62);
  } else {
    for (var _0xeadb1e = _0x1667e8["length"] - 1; _0xeadb1e >= 0; _0xeadb1e--) {
      if (_0x16984e = _0x1667e8[_0xeadb1e]) {
        _0x44272f = (_0x1f71b0 < 3 ? _0x16984e(_0x44272f) : _0x1f71b0 > 3 ? _0x16984e(_0x6af08b, _0x4eb1c5, _0x44272f) : _0x16984e(_0x6af08b, _0x4eb1c5)) || _0x44272f;
      }
    }
  }

  _0x1f71b0 > 3 && _0x44272f && Object["defineProperty"](_0x6af08b, _0x4eb1c5, _0x44272f);
  return _0x44272f;
},
    __metadata = this && this["__metadata"] || function (_0x23a39b, _0x322b75) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x23a39b, _0x322b75);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['UserRegisterByPhoneDto'] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require('@nestjs/swagger');

class UserRegisterByPhoneDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "cooper",
  'description': "用户名称"
}), (0, class_validator_1['IsNotEmpty'])({
  'message': "用户名不能为空！"
}), (0, class_validator_1["MinLength"])(2, {
  'message': "用户名最低需要大于2位数！"
}), (0, class_validator_1["MaxLength"])(12, {
  'message': "用户名不得超过12位！"
}), __metadata("design:type", String)], UserRegisterByPhoneDto['prototype'], "username", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '123456',
  'description': '用户密码'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户密码不能为空"
}), (0, class_validator_1["MinLength"])(6, {
  'message': "用户密码最低需要大于6位数！"
}), (0, class_validator_1["MaxLength"])(30, {
  'message': '用户密码最长不能超过30位数！'
}), __metadata("design:type", String)], UserRegisterByPhoneDto['prototype'], 'password', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '19999999999',
  'description': '用户手机号码'
}), (0, class_validator_1["IsPhoneNumber"])('CN', {
  'message': '手机号码格式不正确！'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "手机号码不能为空！"
}), __metadata("design:type", String)], UserRegisterByPhoneDto["prototype"], 'phone', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "152546",
  'description': '手机验证码'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': '手机验证码不能为空！'
}), __metadata("design:type", String)], UserRegisterByPhoneDto["prototype"], 'phoneCode', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "SNINE",
  'description': '用户邀请码',
  'required': true
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], UserRegisterByPhoneDto["prototype"], "invitedBy", void 0);

exports['UserRegisterByPhoneDto'] = UserRegisterByPhoneDto;