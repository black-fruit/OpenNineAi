'use strict';

var __decorate = this && this["__decorate"] || function (_0x4f9920, _0x3c98f8, _0x245e47, _0x3c2494) {
  var _0x204998 = arguments["length"],
      _0x3095a7 = _0x204998 < 3 ? _0x3c98f8 : _0x3c2494 === null ? _0x3c2494 = Object["getOwnPropertyDescriptor"](_0x3c98f8, _0x245e47) : _0x3c2494,
      _0x96e1aa;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3095a7 = Reflect['decorate'](_0x4f9920, _0x3c98f8, _0x245e47, _0x3c2494);
  } else {
    for (var _0x133701 = _0x4f9920["length"] - 1; _0x133701 >= 0; _0x133701--) {
      if (_0x96e1aa = _0x4f9920[_0x133701]) {
        _0x3095a7 = (_0x204998 < 3 ? _0x96e1aa(_0x3095a7) : _0x204998 > 3 ? _0x96e1aa(_0x3c98f8, _0x245e47, _0x3095a7) : _0x96e1aa(_0x3c98f8, _0x245e47)) || _0x3095a7;
      }
    }
  }

  _0x204998 > 3 && _0x3095a7 && Object["defineProperty"](_0x3c98f8, _0x245e47, _0x3095a7);
  return _0x3095a7;
},
    __metadata = this && this["__metadata"] || function (_0x2cd0fc, _0x267991) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x2cd0fc, _0x267991);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UpdatePassByOtherDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class UpdatePassByOtherDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '666666',
  'description': "三方用户更新新密码"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': '用户密码不能为空！'
}), (0, class_validator_1['MinLength'])(6, {
  'message': "用户密码最低需要大于6位数！"
}), (0, class_validator_1["MaxLength"])(30, {
  'message': '用户密码最长不能超过30位数！'
}), __metadata("design:type", String)], UpdatePassByOtherDto['prototype'], "password", void 0);

exports['UpdatePassByOtherDto'] = UpdatePassByOtherDto;