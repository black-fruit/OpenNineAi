'use strict';

var __decorate = this && this["__decorate"] || function (_0x1e39f0, _0x103cc9, _0x3fe916, _0x4eabf1) {
  var _0x8ceec4 = arguments["length"],
      _0xc69ac7 = _0x8ceec4 < 3 ? _0x103cc9 : _0x4eabf1 === null ? _0x4eabf1 = Object['getOwnPropertyDescriptor'](_0x103cc9, _0x3fe916) : _0x4eabf1,
      _0x313576;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0xc69ac7 = Reflect["decorate"](_0x1e39f0, _0x103cc9, _0x3fe916, _0x4eabf1);
  } else {
    for (var _0x363d23 = _0x1e39f0["length"] - 1; _0x363d23 >= 0; _0x363d23--) {
      if (_0x313576 = _0x1e39f0[_0x363d23]) {
        _0xc69ac7 = (_0x8ceec4 < 3 ? _0x313576(_0xc69ac7) : _0x8ceec4 > 3 ? _0x313576(_0x103cc9, _0x3fe916, _0xc69ac7) : _0x313576(_0x103cc9, _0x3fe916)) || _0xc69ac7;
      }
    }
  }

  _0x8ceec4 > 3 && _0xc69ac7 && Object['defineProperty'](_0x103cc9, _0x3fe916, _0xc69ac7);
  return _0xc69ac7;
},
    __metadata = this && this["__metadata"] || function (_0x3bd6ee, _0xe9730e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3bd6ee, _0xe9730e);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UpdateUserSalesDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class UpdateUserSalesDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "佣金比例",
  'required': false
}), (0, class_validator_1["IsOptional"])(), (0, class_validator_1["IsNumber"])({}, {
  'message': "佣金比例必须是数字"
}), __metadata("design:type", Number)], UpdateUserSalesDto['prototype'], "performanceRatio", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "超级合伙人",
  'description': "自定义分销商名称",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], UpdateUserSalesDto['prototype'], "salesOutletName", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "用户ID"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '用户ID必须是数字'
}), __metadata('design:type', Number)], UpdateUserSalesDto["prototype"], "userId", void 0);

exports["UpdateUserSalesDto"] = UpdateUserSalesDto;