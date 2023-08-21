'use strict';

var __decorate = this && this["__decorate"] || function (_0x83c367, _0x18cb57, _0x28bea9, _0x562e98) {
  var _0x3a62bf = arguments["length"],
      _0x2d19fa = _0x3a62bf < 3 ? _0x18cb57 : _0x562e98 === null ? _0x562e98 = Object["getOwnPropertyDescriptor"](_0x18cb57, _0x28bea9) : _0x562e98,
      _0x5deb1c;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x2d19fa = Reflect['decorate'](_0x83c367, _0x18cb57, _0x28bea9, _0x562e98);
  } else {
    for (var _0x422867 = _0x83c367["length"] - 1; _0x422867 >= 0; _0x422867--) {
      if (_0x5deb1c = _0x83c367[_0x422867]) {
        _0x2d19fa = (_0x3a62bf < 3 ? _0x5deb1c(_0x2d19fa) : _0x3a62bf > 3 ? _0x5deb1c(_0x18cb57, _0x28bea9, _0x2d19fa) : _0x5deb1c(_0x18cb57, _0x28bea9)) || _0x2d19fa;
      }
    }
  }

  _0x3a62bf > 3 && _0x2d19fa && Object["defineProperty"](_0x18cb57, _0x28bea9, _0x2d19fa);
  return _0x2d19fa;
},
    __metadata = this && this["__metadata"] || function (_0x4155c7, _0x5c5a9a) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x4155c7, _0x5c5a9a);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports['SalesUserListDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class SalesUserListDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], SalesUserListDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], SalesUserListDto["prototype"], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 99,
  'description': "支付的用户id",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], SalesUserListDto["prototype"], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "epay",
  'description': '支付的平台',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], SalesUserListDto["prototype"], "platform", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "订单状态",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], SalesUserListDto["prototype"], 'status', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '分销人称号',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], SalesUserListDto["prototype"], "salesOutletName", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '返佣比例',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], SalesUserListDto["prototype"], "performanceRatio", void 0);

exports["SalesUserListDto"] = SalesUserListDto;