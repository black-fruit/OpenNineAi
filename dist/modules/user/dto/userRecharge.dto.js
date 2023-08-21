'use strict';

var __decorate = this && this["__decorate"] || function (_0x37b578, _0x3e8f64, _0x5ebac9, _0x40ffb1) {
  var _0x35cdcc = arguments['length'],
      _0x204955 = _0x35cdcc < 3 ? _0x3e8f64 : _0x40ffb1 === null ? _0x40ffb1 = Object["getOwnPropertyDescriptor"](_0x3e8f64, _0x5ebac9) : _0x40ffb1,
      _0x23cf71;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x204955 = Reflect["decorate"](_0x37b578, _0x3e8f64, _0x5ebac9, _0x40ffb1);
  } else {
    for (var _0x411628 = _0x37b578["length"] - 1; _0x411628 >= 0; _0x411628--) {
      if (_0x23cf71 = _0x37b578[_0x411628]) {
        _0x204955 = (_0x35cdcc < 3 ? _0x23cf71(_0x204955) : _0x35cdcc > 3 ? _0x23cf71(_0x3e8f64, _0x5ebac9, _0x204955) : _0x23cf71(_0x3e8f64, _0x5ebac9)) || _0x204955;
      }
    }
  }

  _0x35cdcc > 3 && _0x204955 && Object["defineProperty"](_0x3e8f64, _0x5ebac9, _0x204955);
  return _0x204955;
},
    __metadata = this && this['__metadata'] || function (_0x161107, _0x6aeb52) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x161107, _0x6aeb52);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['UserRechargeDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class UserRechargeDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '用户id',
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': '用户id是必传参数'
}), __metadata('design:type', Number)], UserRechargeDto["prototype"], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 100,
  'description': "用户对话模型3次数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], UserRechargeDto['prototype'], "model3Count", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 5,
  'description': '用户对话模型4次数',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], UserRechargeDto["prototype"], "model4Count", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 0,
  'description': '用户MJ额度',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], UserRechargeDto['prototype'], 'drawMjCount', void 0);

exports['UserRechargeDto'] = UserRechargeDto;