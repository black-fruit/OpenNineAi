'use strict';

var __decorate = this && this["__decorate"] || function (_0x123120, _0x21387d, _0x4ff03a, _0x1c3aa8) {
  var _0x1a64e8 = arguments["length"],
      _0x59588c = _0x1a64e8 < 3 ? _0x21387d : _0x1c3aa8 === null ? _0x1c3aa8 = Object["getOwnPropertyDescriptor"](_0x21387d, _0x4ff03a) : _0x1c3aa8,
      _0x39582d;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x59588c = Reflect["decorate"](_0x123120, _0x21387d, _0x4ff03a, _0x1c3aa8);
  } else {
    for (var _0x29b0c3 = _0x123120["length"] - 1; _0x29b0c3 >= 0; _0x29b0c3--) {
      if (_0x39582d = _0x123120[_0x29b0c3]) {
        _0x59588c = (_0x1a64e8 < 3 ? _0x39582d(_0x59588c) : _0x1a64e8 > 3 ? _0x39582d(_0x21387d, _0x4ff03a, _0x59588c) : _0x39582d(_0x21387d, _0x4ff03a)) || _0x59588c;
      }
    }
  }

  _0x1a64e8 > 3 && _0x59588c && Object["defineProperty"](_0x21387d, _0x4ff03a, _0x59588c);
  return _0x59588c;
},
    __metadata = this && this["__metadata"] || function (_0x2c0d43, _0x259cc7) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2c0d43, _0x259cc7);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["AddWhiteUserDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class AddWhiteUserDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '加入白名单的用户Id'
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "用户Id必须是number类型"
}), (0, class_validator_1['IsDefined'])({
  'message': "用户Id不能为空"
}), __metadata('design:type', Number)], AddWhiteUserDto["prototype"], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "限制使用的次数"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1['IsDefined'])({
  'message': '限制使用次数不能为空'
}), __metadata("design:type", Number)], AddWhiteUserDto["prototype"], "count", void 0);

exports["AddWhiteUserDto"] = AddWhiteUserDto;