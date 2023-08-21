'use strict';

var __decorate = this && this["__decorate"] || function (_0x200c9c, _0x1934e0, _0x17b15d, _0x2d5aaf) {
  var _0x58ac43 = arguments["length"],
      _0x41ef14 = _0x58ac43 < 3 ? _0x1934e0 : _0x2d5aaf === null ? _0x2d5aaf = Object["getOwnPropertyDescriptor"](_0x1934e0, _0x17b15d) : _0x2d5aaf,
      _0xb737c3;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x41ef14 = Reflect["decorate"](_0x200c9c, _0x1934e0, _0x17b15d, _0x2d5aaf);
  } else {
    for (var _0x3b30de = _0x200c9c['length'] - 1; _0x3b30de >= 0; _0x3b30de--) {
      if (_0xb737c3 = _0x200c9c[_0x3b30de]) {
        _0x41ef14 = (_0x58ac43 < 3 ? _0xb737c3(_0x41ef14) : _0x58ac43 > 3 ? _0xb737c3(_0x1934e0, _0x17b15d, _0x41ef14) : _0xb737c3(_0x1934e0, _0x17b15d)) || _0x41ef14;
      }
    }
  }

  _0x58ac43 > 3 && _0x41ef14 && Object["defineProperty"](_0x1934e0, _0x17b15d, _0x41ef14);
  return _0x41ef14;
},
    __metadata = this && this["__metadata"] || function (_0x3b1aa5, _0x5ede47) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3b1aa5, _0x5ede47);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AppForMoneyDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class AppForMoneyDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': '提现金额',
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '提现金额必须为数字'
}), (0, class_validator_1['Min'])(0, {
  'message': "提现金额必须大于0"
}), __metadata('design:type', Number)], AppForMoneyDto['prototype'], "withdrawalAmount", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "提现渠道",
  'required': true
}), (0, class_validator_1["IsIn"])([1, 2], {
  'message': '提现渠道非法'
}), __metadata("design:type", Number)], AppForMoneyDto["prototype"], "withdrawalChannels", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "提款联系方式",
  'required': true
}), __metadata("design:type", String)], AppForMoneyDto["prototype"], "contactInformation", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "提款备注",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], AppForMoneyDto["prototype"], "remark", void 0);

exports["AppForMoneyDto"] = AppForMoneyDto;