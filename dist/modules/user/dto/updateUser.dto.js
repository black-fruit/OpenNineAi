'use strict';

var __decorate = this && this['__decorate'] || function (_0x282822, _0x3fdfc0, _0x1978ec, _0x2cce52) {
  var _0xd48d0b = arguments['length'],
      _0x37947d = _0xd48d0b < 3 ? _0x3fdfc0 : _0x2cce52 === null ? _0x2cce52 = Object['getOwnPropertyDescriptor'](_0x3fdfc0, _0x1978ec) : _0x2cce52,
      _0x3f77dc;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x37947d = Reflect["decorate"](_0x282822, _0x3fdfc0, _0x1978ec, _0x2cce52);
  } else {
    for (var _0x5e47a7 = _0x282822["length"] - 1; _0x5e47a7 >= 0; _0x5e47a7--) {
      if (_0x3f77dc = _0x282822[_0x5e47a7]) {
        _0x37947d = (_0xd48d0b < 3 ? _0x3f77dc(_0x37947d) : _0xd48d0b > 3 ? _0x3f77dc(_0x3fdfc0, _0x1978ec, _0x37947d) : _0x3f77dc(_0x3fdfc0, _0x1978ec)) || _0x37947d;
      }
    }
  }

  _0xd48d0b > 3 && _0x37947d && Object["defineProperty"](_0x3fdfc0, _0x1978ec, _0x37947d);
  return _0x37947d;
},
    __metadata = this && this["__metadata"] || function (_0x53313e, _0x53a92d) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x53313e, _0x53a92d);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["UpdateUserDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class UpdateUserDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "cooper",
  'nullable': true,
  'description': "用户名称",
  'required': false
}), (0, class_validator_1["MinLength"])(2, {
  'message': '用户名最低需要大于2位数！'
}), (0, class_validator_1["MaxLength"])(12, {
  'message': '用户名不得超过12位！'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户名不能为空！"
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], UpdateUserDto["prototype"], 'username', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "https://file.jiangly.com/images/93971628.jpeg",
  'description': "用户头像",
  'required': false
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户头像不能为空！"
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], UpdateUserDto['prototype'], "avatar", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "我是一台基于深度学习和自然语言处理技术的 AI 机器人，旨在为用户提供高效、精准、个性化的智能服务。",
  'description': '用户签名',
  'required': false
}), (0, class_validator_1['IsNotEmpty'])({
  'message': "用户签名不能为空！"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], UpdateUserDto["prototype"], "sign", void 0);

exports["UpdateUserDto"] = UpdateUserDto;