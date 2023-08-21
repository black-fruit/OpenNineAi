'use strict';

var __decorate = this && this["__decorate"] || function (_0x2464dd, _0x1a8f10, _0x1955ee, _0x4b2657) {
  var _0x3008e5 = arguments["length"],
      _0x581eee = _0x3008e5 < 3 ? _0x1a8f10 : _0x4b2657 === null ? _0x4b2657 = Object["getOwnPropertyDescriptor"](_0x1a8f10, _0x1955ee) : _0x4b2657,
      _0x2f6ba8;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x581eee = Reflect['decorate'](_0x2464dd, _0x1a8f10, _0x1955ee, _0x4b2657);
  } else {
    for (var _0x325daf = _0x2464dd["length"] - 1; _0x325daf >= 0; _0x325daf--) {
      if (_0x2f6ba8 = _0x2464dd[_0x325daf]) {
        _0x581eee = (_0x3008e5 < 3 ? _0x2f6ba8(_0x581eee) : _0x3008e5 > 3 ? _0x2f6ba8(_0x1a8f10, _0x1955ee, _0x581eee) : _0x2f6ba8(_0x1a8f10, _0x1955ee)) || _0x581eee;
      }
    }
  }

  _0x3008e5 > 3 && _0x581eee && Object["defineProperty"](_0x1a8f10, _0x1955ee, _0x581eee);
  return _0x581eee;
},
    __metadata = this && this['__metadata'] || function (_0x21034a, _0x262785) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x21034a, _0x262785);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["LoginByPhoneDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class LoginByPhoneDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "19999999",
  'description': "手机号"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "手机号不能为空！"
}), (0, class_validator_1["IsPhoneNumber"])('CN', {
  'message': "手机号格式不正确！"
}), __metadata("design:type", String)], LoginByPhoneDto['prototype'], "phone", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "999999",
  'description': '密码'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户密码不能为空！"
}), (0, class_validator_1["MinLength"])(6, {
  'message': '用户密码最低需要大于6位数！'
}), (0, class_validator_1["MaxLength"])(30, {
  'message': "用户密码最长不能超过30位数！"
}), __metadata("design:type", String)], LoginByPhoneDto['prototype'], "password", void 0);

exports["LoginByPhoneDto"] = LoginByPhoneDto;