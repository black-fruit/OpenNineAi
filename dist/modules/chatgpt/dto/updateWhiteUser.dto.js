'use strict';

var __decorate = this && this["__decorate"] || function (_0x2716aa, _0x12790c, _0x43e0c3, _0x5c5385) {
  var _0x3da91c = arguments["length"],
      _0x1cb084 = _0x3da91c < 3 ? _0x12790c : _0x5c5385 === null ? _0x5c5385 = Object["getOwnPropertyDescriptor"](_0x12790c, _0x43e0c3) : _0x5c5385,
      _0x23cb4f;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x1cb084 = Reflect["decorate"](_0x2716aa, _0x12790c, _0x43e0c3, _0x5c5385);
  } else {
    for (var _0x55afdb = _0x2716aa["length"] - 1; _0x55afdb >= 0; _0x55afdb--) {
      if (_0x23cb4f = _0x2716aa[_0x55afdb]) {
        _0x1cb084 = (_0x3da91c < 3 ? _0x23cb4f(_0x1cb084) : _0x3da91c > 3 ? _0x23cb4f(_0x12790c, _0x43e0c3, _0x1cb084) : _0x23cb4f(_0x12790c, _0x43e0c3)) || _0x1cb084;
      }
    }
  }

  _0x3da91c > 3 && _0x1cb084 && Object["defineProperty"](_0x12790c, _0x43e0c3, _0x1cb084);
  return _0x1cb084;
},
    __metadata = this && this["__metadata"] || function (_0x1a5357, _0x5c52ba) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x1a5357, _0x5c52ba);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['UpdateWhiteUserDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class UpdateWhiteUserDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "当前白名单列表的id"
}), (0, class_validator_1['IsNumber'])({}, {
  'message': 'id必须是number类型'
}), (0, class_validator_1['IsDefined'])({
  'message': "id不能为空"
}), __metadata("design:type", Number)], UpdateWhiteUserDto['prototype'], 'id', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '加入白名单的用户Id'
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "用户Id必须是number类型"
}), (0, class_validator_1["IsDefined"])({
  'message': "用户Id不能为空"
}), __metadata("design:type", Number)], UpdateWhiteUserDto['prototype'], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "限制使用的次数"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1["IsDefined"])({
  'message': "限制使用次数不能为空"
}), __metadata('design:type', Number)], UpdateWhiteUserDto["prototype"], "count", void 0);

exports["UpdateWhiteUserDto"] = UpdateWhiteUserDto;