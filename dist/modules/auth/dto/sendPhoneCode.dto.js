'use strict';

var __decorate = this && this["__decorate"] || function (_0x5401db, _0x43f8c2, _0x5f4f1d, _0x31bfc9) {
  var _0x379407 = arguments["length"],
      _0x45bccf = _0x379407 < 3 ? _0x43f8c2 : _0x31bfc9 === null ? _0x31bfc9 = Object["getOwnPropertyDescriptor"](_0x43f8c2, _0x5f4f1d) : _0x31bfc9,
      _0x48f590;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x45bccf = Reflect["decorate"](_0x5401db, _0x43f8c2, _0x5f4f1d, _0x31bfc9);
  } else {
    for (var _0x58a653 = _0x5401db["length"] - 1; _0x58a653 >= 0; _0x58a653--) {
      if (_0x48f590 = _0x5401db[_0x58a653]) {
        _0x45bccf = (_0x379407 < 3 ? _0x48f590(_0x45bccf) : _0x379407 > 3 ? _0x48f590(_0x43f8c2, _0x5f4f1d, _0x45bccf) : _0x48f590(_0x43f8c2, _0x5f4f1d)) || _0x45bccf;
      }
    }
  }

  _0x379407 > 3 && _0x45bccf && Object['defineProperty'](_0x43f8c2, _0x5f4f1d, _0x45bccf);
  return _0x45bccf;
},
    __metadata = this && this['__metadata'] || function (_0x46598b, _0x1d5588) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x46598b, _0x1d5588);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SendPhoneCodeDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class SendPhoneCodeDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '199999999',
  'description': "手机号"
}), (0, class_validator_1['IsNotEmpty'])({
  'message': "手机号不能为空"
}), (0, class_validator_1["MinLength"])(11, {
  'message': "手机号长度为11位"
}), (0, class_validator_1["MaxLength"])(11, {
  'message': "手机号长度为11位！"
}), __metadata("design:type", String)], SendPhoneCodeDto["prototype"], "phone", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "2b4i1b4",
  'description': "图形验证码KEY"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "验证码KEY不能为空"
}), __metadata("design:type", String)], SendPhoneCodeDto["prototype"], "captchaId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '1g4d',
  'description': "图形验证码"
}), (0, class_validator_1['IsNotEmpty'])({
  'message': "验证码不能为空"
}), __metadata('design:type', String)], SendPhoneCodeDto["prototype"], "captchaCode", void 0);

exports["SendPhoneCodeDto"] = SendPhoneCodeDto;