'use strict';

var __decorate = this && this['__decorate'] || function (_0x258291, _0x531f94, _0x2ee29d, _0x59639a) {
  var _0x5da16c = arguments['length'],
      _0x285146 = _0x5da16c < 3 ? _0x531f94 : _0x59639a === null ? _0x59639a = Object['getOwnPropertyDescriptor'](_0x531f94, _0x2ee29d) : _0x59639a,
      _0x2eee88;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x285146 = Reflect["decorate"](_0x258291, _0x531f94, _0x2ee29d, _0x59639a);
  } else {
    for (var _0xd2f34 = _0x258291['length'] - 1; _0xd2f34 >= 0; _0xd2f34--) {
      if (_0x2eee88 = _0x258291[_0xd2f34]) {
        _0x285146 = (_0x5da16c < 3 ? _0x2eee88(_0x285146) : _0x5da16c > 3 ? _0x2eee88(_0x531f94, _0x2ee29d, _0x285146) : _0x2eee88(_0x531f94, _0x2ee29d)) || _0x285146;
      }
    }
  }

  _0x5da16c > 3 && _0x285146 && Object['defineProperty'](_0x531f94, _0x2ee29d, _0x285146);
  return _0x285146;
},
    __metadata = this && this["__metadata"] || function (_0x22d46a, _0x2bfbb1) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x22d46a, _0x2bfbb1);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UserLoginDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class UserLoginDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 'super',
  'description': '邮箱'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户名不能为空！"
}), (0, class_validator_1["MinLength"])(2, {
  'message': "用户名最短是两位数！"
}), (0, class_validator_1["MaxLength"])(30, {
  'message': "用户名最长不得超过30位！"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], UserLoginDto['prototype'], 'username', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "用户ID"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UserLoginDto["prototype"], 'uid', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "999999",
  'description': '密码'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户密码不能为空！"
}), (0, class_validator_1["MinLength"])(6, {
  'message': '用户密码最低需要大于6位数！'
}), (0, class_validator_1["MaxLength"])(30, {
  'message': "用户密码最长不能超过30位数！"
}), __metadata("design:type", String)], UserLoginDto["prototype"], "password", void 0);

exports["UserLoginDto"] = UserLoginDto;