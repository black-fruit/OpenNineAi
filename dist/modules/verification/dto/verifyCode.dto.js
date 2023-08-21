'use strict';

var __decorate = this && this["__decorate"] || function (_0x3e395d, _0x65763c, _0x4c0949, _0x551132) {
  var _0x4411af = arguments["length"],
      _0x31d1c0 = _0x4411af < 3 ? _0x65763c : _0x551132 === null ? _0x551132 = Object["getOwnPropertyDescriptor"](_0x65763c, _0x4c0949) : _0x551132,
      _0x5b4dd4;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x31d1c0 = Reflect["decorate"](_0x3e395d, _0x65763c, _0x4c0949, _0x551132);
  } else {
    for (var _0x559be2 = _0x3e395d['length'] - 1; _0x559be2 >= 0; _0x559be2--) {
      if (_0x5b4dd4 = _0x3e395d[_0x559be2]) {
        _0x31d1c0 = (_0x4411af < 3 ? _0x5b4dd4(_0x31d1c0) : _0x4411af > 3 ? _0x5b4dd4(_0x65763c, _0x4c0949, _0x31d1c0) : _0x5b4dd4(_0x65763c, _0x4c0949)) || _0x31d1c0;
      }
    }
  }

  _0x4411af > 3 && _0x31d1c0 && Object["defineProperty"](_0x65763c, _0x4c0949, _0x31d1c0);
  return _0x31d1c0;
},
    __metadata = this && this["__metadata"] || function (_0x536cd0, _0x43902a) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x536cd0, _0x43902a);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["VerifyCodeDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class VerifyCodeDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': '1',
  'description': "验证码下发id"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "缺少必要参数！"
}), __metadata("design:type", Number)], VerifyCodeDto['prototype'], 'id', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "15366754",
  'description': '验证码'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "验证码不能为空！"
}), __metadata("design:type", Number)], VerifyCodeDto['prototype'], "code", void 0);

exports["VerifyCodeDto"] = VerifyCodeDto;